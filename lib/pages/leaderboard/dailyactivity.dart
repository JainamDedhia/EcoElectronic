import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import '/data/services/auth_service.dart';

class MonthlyActivity extends StatefulWidget {
  @override
  _MonthlyActivityState createState() => _MonthlyActivityState();
}

class _MonthlyActivityState extends State<MonthlyActivity> with SingleTickerProviderStateMixin {
  Map<String, int> monthlyCounts = {};
  bool isLoading = true;
  String selectedMonth = 'April'; // Default to current month
  String? errorMessage;
  late AnimationController _animationController;
  late Animation<double> _animation;

  // Static data for demo purposes
  final Map<String, int> staticMonthlyCounts = {
    '2025-01': 45,  // January
    '2025-02': 67,  // February
    '2025-03': 82,  // March
    '2025-04': 58,  // April
    '2025-05': 0,   // May
    '2025-06': 0,   // June
    '2025-07': 0,   // July
    '2025-08': 0,   // August
    '2025-09': 0,   // September
    '2025-10': 0,   // October
    '2025-11': 0,   // November
    '2025-12': 0,   // December
  };

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1500),
    );
    _animation = CurvedAnimation(
      parent: _animationController,
      curve: Curves.easeInOut,
    );
    fetchMonthlyData();
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  Future<void> fetchMonthlyData() async {
    try {
      final currentUserId = AuthService().currentUser()?.uid;

      if (currentUserId == null) {
        setState(() {
          errorMessage = "No user is logged in!";
          isLoading = false;
        });
        return;
      }

      QuerySnapshot snapshot = await FirebaseFirestore.instance
          .collection('usertemporary')
          .where('status', isEqualTo: 'completed')
          .where('uid', isEqualTo: currentUserId)
          .get();

      Map<String, int> counts = {};

      for (var doc in snapshot.docs) {
        DateTime? scheduledDate;

        if (doc['scheduledDate'] is Timestamp) {
          scheduledDate = (doc['scheduledDate'] as Timestamp).toDate();
        } else if (doc['scheduledDate'] is String) {
          scheduledDate = DateTime.tryParse(doc['scheduledDate']);
        }

        if (scheduledDate == null) continue;

        String monthKey = "${scheduledDate.year}-${scheduledDate.month.toString().padLeft(2, '0')}";

        var results = doc['results'] ?? [];
        int itemCount = 0;

        for (var result in results) {
          if (result['detections'] != null && result['detections'] is List) {
            itemCount += (result['detections'] as List).length;
          }
        }

        counts.update(monthKey, (value) => value + itemCount, ifAbsent: () => itemCount);
      }

      // Merge with static data for demo purposes
      // In production, remove this and use only the fetched data
      for (var entry in staticMonthlyCounts.entries) {
        if (!counts.containsKey(entry.key)) {
          counts[entry.key] = entry.value;
        }
      }

      setState(() {
        monthlyCounts = counts;
        isLoading = false;
        _animationController.forward();
      });
    } catch (e) {
      setState(() {
        isLoading = false;
        errorMessage = "Oops! Something went wrong. Please try again.";
      });
    }
  }

  int getTotalForMonth(String month) {
    String yearMonth = "2025-${_getMonthIndex(month).toString().padLeft(2, '0')}";
    return monthlyCounts[yearMonth] ?? staticMonthlyCounts[yearMonth] ?? 0;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Monthly Activity",
          style: TextStyle(fontWeight: FontWeight.w600),
        ),
        elevation: 0,
        backgroundColor: Colors.green.shade600,
        centerTitle: true,
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: () {
              setState(() {
                isLoading = true;
              });
              fetchMonthlyData();
            },
          ),
        ],
      ),
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Color(0xFFF5F7FA), Colors.white],
          ),
        ),
        child: isLoading
            ? const Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    CircularProgressIndicator(
                      valueColor: AlwaysStoppedAnimation<Color>(Colors.green),
                    ),
                    SizedBox(height: 24),
                    Text(
                      "Fetching your activity...",
                      style: TextStyle(
                        color: Color(0xFF324F5E),
                        fontSize: 16,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ],
                ),
              )
            : errorMessage != null
                ? Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(
                          Icons.error_outline,
                          size: 80,
                          color: Colors.red.shade300,
                        ),
                        const SizedBox(height: 16),
                        Text(
                          errorMessage!,
                          style: TextStyle(
                            color: Colors.red.shade700,
                            fontSize: 18,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        const SizedBox(height: 24),
                        ElevatedButton.icon(
                          icon: const Icon(Icons.refresh),
                          label: const Text("Try Again"),
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.green,
                            foregroundColor: Colors.white,
                            padding: const EdgeInsets.symmetric(
                              horizontal: 24,
                              vertical: 12,
                            ),
                          ),
                          onPressed: () {
                            setState(() {
                              isLoading = true;
                              errorMessage = null;
                            });
                            fetchMonthlyData();
                          },
                        ),
                      ],
                    ),
                  )
                : _buildSuccessContent(),
      ),
    );
  }

  Widget _buildSuccessContent() {
    return SafeArea(
      child: ListView(
        physics: const BouncingScrollPhysics(),
        padding: const EdgeInsets.fromLTRB(16, 24, 16, 32),
        children: [
          const Text(
            "Activity Dashboard",
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
              color: Color(0xFF324F5E),
            ),
          ),
          const SizedBox(height: 8),
          Text(
            "Track your monthly detection progress",
            style: TextStyle(
              fontSize: 16,
              color: Colors.grey.shade600,
            ),
          ),
          const SizedBox(height: 32),
          _buildMonthSelector(),
          const SizedBox(height: 32),
          AnimatedBuilder(
            animation: _animation,
            builder: (context, child) {
              return _buildMonthlyActivity(
                (getTotalForMonth(selectedMonth) * _animation.value).round(),
                selectedMonth,
              );
            },
          ),
          const SizedBox(height: 32),
          _buildMonthlyStats(),
        ],
      ),
    );
  }

  Widget _buildMonthSelector() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            blurRadius: 10,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "Select Month",
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.w500,
              color: Colors.grey.shade700,
            ),
          ),
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: Colors.grey.shade300),
            ),
            child: DropdownButtonHideUnderline(
              child: DropdownButton<String>(
                value: selectedMonth,
                isExpanded: true,
                icon: Icon(Icons.keyboard_arrow_down, color: Colors.green.shade600),
                style: const TextStyle(
                  color: Color(0xFF324F5E),
                  fontSize: 16,
                  fontWeight: FontWeight.w500,
                ),
                onChanged: (String? newValue) {
                  if (newValue != null) {
                    setState(() {
                      selectedMonth = newValue;
                      _animationController.reset();
                      _animationController.forward();
                    });
                  }
                },
                items: _getMonthNames().map<DropdownMenuItem<String>>((String month) {
                  return DropdownMenuItem<String>(
                    value: month,
                    child: Text(month),
                  );
                }).toList(),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildMonthlyActivity(int itemCount, String month) {
    double progress = (itemCount / 100).clamp(0.0, 1.0);
    Color progressColor = _getProgressColor(progress);
    
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            blurRadius: 20,
            offset: const Offset(0, 5),
          ),
        ],
      ),
      child: Column(
        children: [
          Text(
            "Monthly Progress",
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
              color: Colors.grey.shade800,
            ),
          ),
          const SizedBox(height: 24),
          SizedBox(
            width: 220,
            height: 220,
            child: Stack(
              alignment: Alignment.center,
              children: [
                SizedBox(
                  width: 180,
                  height: 180,
                  child: CircularProgressIndicator(
                    value: progress,
                    strokeWidth: 15,
                    backgroundColor: Colors.grey.shade200,
                    valueColor: AlwaysStoppedAnimation<Color>(progressColor),
                  ),
                ),
                Container(
                  width: 150,
                  height: 150,
                  decoration: BoxDecoration(
                    color: Colors.white,
                    shape: BoxShape.circle,
                    boxShadow: [
                      BoxShadow(
                        color: progressColor.withOpacity(0.2),
                        blurRadius: 10,
                        spreadRadius: 3,
                      ),
                    ],
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        '$itemCount',
                        style: TextStyle(
                          fontSize: 48,
                          fontWeight: FontWeight.bold,
                          color: progressColor,
                        ),
                      ),
                      Text(
                        "Detections",
                        style: TextStyle(
                          fontSize: 16,
                          color: Colors.grey.shade600,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 24),
          Text(
            itemCount == 0
                ? "No activity detected for $month."
                : _getMotivationalMessage(itemCount, month),
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.w500,
              color: Colors.grey.shade700,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildMonthlyStats() {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            blurRadius: 20,
            offset: const Offset(0, 5),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                "Activity Insights",
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: Colors.grey.shade800,
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                decoration: BoxDecoration(
                  color: Colors.green.shade50,
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Text(
                  "2025",
                  style: TextStyle(
                    color: Colors.green.shade700,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 20),
          _buildMonthsBarChart(),
          const SizedBox(height: 24),
          _buildMonthComparison(),
        ],
      ),
    );
  }

  Widget _buildMonthsBarChart() {
    final months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    final values = months.map((m) {
      String fullMonth = _getFullMonthName(m);
      return getTotalForMonth(fullMonth);
    }).toList();
    
    final maxValue = values.reduce((a, b) => a > b ? a : b).toDouble();
    
    return SizedBox(
      height: 140, // Reduced height to prevent overflow
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: List.generate(
          months.length,
          (index) {
            final value = values[index].toDouble();
            final barHeight = maxValue > 0 ? (value / maxValue) * 100 : 0.0; // Reduced max height
            
            return Expanded(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 2), // Reduced padding
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    AnimatedContainer(
                      duration: const Duration(milliseconds: 1000),
                      height: barHeight,
                      decoration: BoxDecoration(
                        color: _getBarColor(index, months.length),
                        borderRadius: BorderRadius.vertical(
                          top: const Radius.circular(6), // Smaller radius
                        ),
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      months[index],
                      style: TextStyle(
                        color: Colors.grey.shade600,
                        fontWeight: FontWeight.w500,
                        fontSize: 12, // Smaller font
                      ),
                    ),
                    const SizedBox(height: 2), // Reduced spacing
                    Text(
                      "${values[index]}",
                      style: TextStyle(
                        fontSize: 11, // Smaller font
                        color: Colors.grey.shade500,
                      ),
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }

  Widget _buildMonthComparison() {
    final int currentMonthValue = getTotalForMonth(selectedMonth);
    
    // Get last month
    List<String> allMonths = _getMonthNames();
    int currentIndex = allMonths.indexOf(selectedMonth);
    int lastMonthIndex = (currentIndex - 1 + 12) % 12;
    String lastMonth = allMonths[lastMonthIndex];
    
    final int lastMonthValue = getTotalForMonth(lastMonth);
    final int difference = currentMonthValue - lastMonthValue;
    final bool isIncrease = difference >= 0;
    
    return LayoutBuilder(
      builder: (context, constraints) {
        // If width is small, stack vertically
        if (constraints.maxWidth < 300) {
          return Column(
            children: [
              _buildComparisonCard(
                isIncrease ? "Growth" : "Decrease",
                isIncrease ? Icons.trending_up : Icons.trending_down,
                difference.abs().toString(),
                isIncrease ? Colors.green : Colors.red,
                "vs $lastMonth",
              ),
              const SizedBox(height: 12),
              _buildComparisonCard(
                "Daily Avg",
                Icons.calendar_today,
                (currentMonthValue / 30).toStringAsFixed(1),
                Colors.blue,
                "per day",
              ),
            ],
          );
        } else {
          // Otherwise use row layout
          return Row(
            children: [
              Expanded(
                child: _buildComparisonCard(
                  isIncrease ? "Growth" : "Decrease",
                  isIncrease ? Icons.trending_up : Icons.trending_down,
                  difference.abs().toString(),
                  isIncrease ? Colors.green : Colors.red,
                  "vs $lastMonth",
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: _buildComparisonCard(
                  "Daily Avg",
                  Icons.calendar_today,
                  (currentMonthValue / 30).toStringAsFixed(1),
                  Colors.blue,
                  "per day",
                ),
              ),
            ],
          );
        }
      },
    );
  }

  Widget _buildComparisonCard(
    String title,
    IconData icon,
    String value,
    Color color,
    String subtitle,
  ) {
    return Container(
      padding: const EdgeInsets.all(14), // Reduced padding
      decoration: BoxDecoration(
        color: color.withOpacity(0.1),
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(icon, color: color, size: 18), // Smaller icon
              const SizedBox(width: 6), // Reduced spacing
              Text(
                title,
                style: TextStyle(
                  color: color,
                  fontWeight: FontWeight.w600,
                  fontSize: 14, // Smaller font
                ),
              ),
            ],
          ),
          const SizedBox(height: 10), // Reduced spacing
          Text(
            value,
            style: TextStyle(
              fontSize: 22, // Smaller font
              fontWeight: FontWeight.bold,
              color: Colors.blue.shade800, // Correct usage
            ),
          ),
          const SizedBox(height: 2), // Reduced spacing
          Text(
            subtitle,
            style: TextStyle(
              fontSize: 11, // Smaller font
              color: color.withOpacity(0.8),
            ),
          ),
        ],
      ),
    );
  }

  String _getMotivationalMessage(int count, String month) {
    if (count >= 80) {
      return "Outstanding! You've had $count detections in $month!";
    } else if (count >= 50) {
      return "Great work! You had $count detections in $month.";
    } else if (count >= 20) {
      return "Good progress with $count detections in $month.";
    } else {
      return "You had $count detections in $month.";
    }
  }

  Color _getProgressColor(double progress) {
    if (progress >= 0.8) {
      return Colors.green.shade600;
    } else if (progress >= 0.5) {
      return Colors.blue.shade600;
    } else if (progress >= 0.2) {
      return Colors.orange.shade600;
    } else {
      return Colors.grey.shade600;
    }
  }

  Color _getBarColor(int index, int totalBars) {
    final colors = [
      Colors.green.shade400,
      Colors.green.shade500,
      Colors.green.shade600,
      Colors.blue.shade500,
      Colors.blue.shade600,
      Colors.blue.shade700,
    ];
    
    return colors[index % colors.length];
  }

  List<String> _getMonthNames() {
    return [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  }

  String _getFullMonthName(String abbreviation) {
    Map<String, String> abbrevToFull = {
      'Jan': 'January',
      'Feb': 'February',
      'Mar': 'March',
      'Apr': 'April',
      'May': 'May',
      'Jun': 'June',
      'Jul': 'July',
      'Aug': 'August',
      'Sep': 'September',
      'Oct': 'October',
      'Nov': 'November',
      'Dec': 'December',
    };
    return abbrevToFull[abbreviation] ?? abbreviation;
  }

  int _getMonthIndex(String month) {
    return _getMonthNames().indexOf(month) + 1;
  }
}