import 'dart:math';

import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:ewaste/data/services/volunteer_service.dart';
import 'package:ewaste/presentations/volunteer/requests/requestmap.dart';
import 'package:latlong2/latlong.dart';

class VolunteerRequestsPage extends StatefulWidget {
  @override
  _VolunteerRequestsPageState createState() => _VolunteerRequestsPageState();
}

class _VolunteerRequestsPageState extends State<VolunteerRequestsPage> {
  final VolunteerRequestService _volunteerService = VolunteerRequestService();
  List<Map<String, dynamic>> _requests = [];
  bool _loading = true;
  bool _sortByDistance = false;
  LatLng? _volunteerLocation;

  @override
  void initState() {
    super.initState();
    _loadRequests();
  }

  Future<void> _loadRequests() async {
    try {
      User? user = FirebaseAuth.instance.currentUser;
      if (user == null) return;

      // Get volunteer location
      DocumentSnapshot volunteerSnapshot = await FirebaseFirestore.instance
          .collection('Volunteers')
          .doc(user.uid)
          .get();

      _volunteerLocation = LatLng(
        volunteerSnapshot['location']['latitude'],
        volunteerSnapshot['location']['longitude'],
      );

      QuerySnapshot snapshot = await FirebaseFirestore.instance
          .collection('requests')
          .where('status', isEqualTo: 'pending')
          .get();

      List<Map<String, dynamic>> requests = [];

      for (var doc in snapshot.docs) {
        var data = doc.data() as Map<String, dynamic>;
        String requestId = doc.id;
        String userId = data['userId'];
        double lat = data['pickupAddress']['latitude'];
        double lng = data['pickupAddress']['longitude'];

        // Get user name
        DocumentSnapshot userDoc = await FirebaseFirestore.instance
            .collection('Users')
            .doc(userId)
            .get();

        String userName = userDoc.exists ? userDoc['name'] : 'Unknown';

        double? distance;
        if (_volunteerLocation != null) {
          distance = _calculateDistance(
            _volunteerLocation!.latitude,
            _volunteerLocation!.longitude,
            lat,
            lng,
          );
        }

        requests.add({
          'id': requestId,
          'userName': userName,
          'totalCredits': data['totalCredits'],
          'latitude': lat,
          'longitude': lng,
          'distance': distance,
        });
      }

      setState(() {
        _requests = requests;
        _loading = false;
      });
    } catch (e) {
      print("Error loading requests: $e");
    }
  }

  double _calculateDistance(
      double lat1, double lon1, double lat2, double lon2) {
    const R = 6371; // km
    final dLat = _deg2rad(lat2 - lat1);
    final dLon = _deg2rad(lon2 - lon1);
    final a =
        (sin(dLat / 2) * sin(dLat / 2)) +
        cos(_deg2rad(lat1)) * cos(_deg2rad(lat2)) *
            (sin(dLon / 2) * sin(dLon / 2));
    final c = 2 * atan2(sqrt(a), sqrt(1 - a));
    return R * c;
  }

  double _deg2rad(double deg) => deg * (3.1415926535897932 / 180);

  Future<void> _acceptRequest(String requestId) async {
    User? user = FirebaseAuth.instance.currentUser;
    if (user == null) return;

    String volunteerId = user.uid;
    String? volunteerName = user.displayName ??
        await _volunteerService.getVolunteerName(volunteerId);

    bool success = await _volunteerService.acceptRequest(
      requestId: requestId,
      volunteerId: volunteerId,
      volunteerName: volunteerName ?? "Unknown",
    );

    if (success) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text("Request Accepted!")),
      );
      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => RequestMap(requestId: requestId),
        ),
      );
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text("Failed to accept request.")),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    List<Map<String, dynamic>> displayList = [..._requests];
    if (_sortByDistance) {
      displayList.sort((a, b) => a['distance']!.compareTo(b['distance']!));
    }

    return Scaffold(
      appBar: AppBar(
        title: const Text("Available Pickup Requests"),
        actions: [
          IconButton(
            icon: Icon(Icons.sort),
            onPressed: () {
              setState(() {
                _sortByDistance = !_sortByDistance;
              });
            },
          ),
        ],
      ),
      body: _loading
          ? const Center(child: CircularProgressIndicator())
          : displayList.isEmpty
              ? const Center(child: Text("No pending requests available."))
              : ListView.builder(
                  itemCount: displayList.length,
                  itemBuilder: (context, index) {
                    var request = displayList[index];
                    return Card(
                      margin: const EdgeInsets.all(10),
                      child: ListTile(
                        title: Text("User: ${request['userName']}"),
                        subtitle: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text("Credits: ${request['totalCredits']}"),
                            if (_sortByDistance && request['distance'] != null)
                              Text("Distance: ${request['distance']!.toStringAsFixed(2)} km"),
                          ],
                        ),
                        trailing: ElevatedButton(
                          onPressed: () => _acceptRequest(request['id']),
                          child: const Text("Accept"),
                        ),
                      ),
                    );
                  },
                ),
    );
  }
}
