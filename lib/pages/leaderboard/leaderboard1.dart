import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

class RealTimeLeaderboard extends StatefulWidget {
  const RealTimeLeaderboard({Key? key}) : super(key: key);

  @override
  _RealTimeLeaderboardState createState() => _RealTimeLeaderboardState();
}

// Badge type enum
enum BadgeType {
  recyclingRookie,
  ecoWarrior,
  greenChampion,
  sustainabilityMaster,
  topClimber,
  consistentRecycler,
  weeklyHero,
  monthlyLegend
}

// Badge model
class Badge {
  final BadgeType type;
  final String name;
  final String description;
  final IconData icon;
  final Color color;
  final int requiredCredits;
  
  Badge({
    required this.type,
    required this.name,
    required this.description,
    required this.icon,
    required this.color,
    required this.requiredCredits,
  });
  
  static List<Badge> get allBadges => [
    Badge(
      type: BadgeType.recyclingRookie,
      name: 'Recycling Rookie',
      description: 'Earned first 50 credits',
      icon: Icons.star_outline,
      color: Colors.blue,
      requiredCredits: 50,
    ),
    Badge(
      type: BadgeType.ecoWarrior,
      name: 'Eco Warrior',
      description: 'Reached 200 credits',
      icon: Icons.eco_outlined,
      color: Colors.green,
      requiredCredits: 200,
    ),
    Badge(
      type: BadgeType.greenChampion,
      name: 'Green Champion',
      description: 'Achieved 500 credits',
      icon: Icons.military_tech,
      color: Colors.teal,
      requiredCredits: 500,
    ),
    Badge(
      type: BadgeType.sustainabilityMaster,
      name: 'Sustainability Master',
      description: 'Earned 1000 credits',
      icon: Icons.diamond_outlined,
      color: Colors.purple,
      requiredCredits: 1000,
    ),
    // Add more badges as needed...
  ];
}

class _RealTimeLeaderboardState extends State<RealTimeLeaderboard> with SingleTickerProviderStateMixin {
  final FirebaseFirestore _firestore = FirebaseFirestore.instance;
  final FirebaseAuth _auth = FirebaseAuth.instance;
  List<Map<String, dynamic>> _userCredits = [];
  late AnimationController _animationController;
  late Animation<double> _fadeAnimation;
  
  // New properties for gamification
  Map<String, List<BadgeType>> _userBadges = {};
  String? _selectedUserId;
  
  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1500),
    );
    
    _fadeAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: _animationController, curve: Curves.easeInOut)
    );
    
    _listenToUserCredits();
    _animationController.forward();
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  void _listenToUserCredits() {
    _firestore.collection('Users').snapshots().listen((snapshot) {
      setState(() {
        _userCredits = snapshot.docs.map((doc) {
          var data = doc.data();
          // Fetch user badges from firestore
          List<BadgeType> badges = _determineBadges(data['credits'] ?? 0);
          _userBadges[doc.id] = badges;
          
          return {
            'uid': doc.id,
            'name': data['name'] ?? 'Unknown',
            'credits': data['credits'] ?? 0,
            'recycledItems': data['recycledItems'] ?? 0,
            'lastActive': data['lastActive'] ?? DateTime.now(),
            'streak': data['streak'] ?? 0,
          };
        }).toList();

        _userCredits.sort((a, b) => (b['credits']).compareTo(a['credits']));
        if (_userCredits.length > 5) {
          _userCredits = _userCredits.sublist(0, 5);
        }
      });
    });
  }
  
  List<BadgeType> _determineBadges(int credits) {
    List<BadgeType> earnedBadges = [];
    for (var badge in Badge.allBadges) {
      if (credits >= badge.requiredCredits) {
        earnedBadges.add(badge.type);
      }
    }
    return earnedBadges;
  }

  List<Color> get _gradientColors => [
    const Color(0xFF23B6E6),
    const Color(0xFF02D39A),
  ];

  @override
  Widget build(BuildContext context) {
    return FadeTransition(
      opacity: _fadeAnimation,
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              Colors.white,
              Colors.grey.shade50,
            ],
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.05),
              offset: const Offset(0, 10),
              blurRadius: 20,
              spreadRadius: 0,
            ),
          ],
        ),
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Title with animated decoration
              Row(
                children: [
                  Container(
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      color: const Color(0xFF324F5E).withOpacity(0.1),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: const Icon(
                      Icons.leaderboard_rounded,
                      color: Color(0xFF324F5E),
                      size: 24,
                    ),
                  ),
                  const SizedBox(width: 12),
                  const Expanded(
                    child: Text(
                      'Credit Leaderboard',
                      style: TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.bold,
                        color: Color(0xFF324F5E),
                        letterSpacing: 0.5,
                      ),
                    ),
                  ),
                  // Badges showcase button
                  IconButton(
                    icon: const Icon(Icons.military_tech, color: Colors.amber),
                    onPressed: () => _showBadgesShowcase(context),
                  ),
                ],
              ),
              
              const SizedBox(height: 8),
              Text(
                'Top performers based on recycling credits',
                style: TextStyle(
                  fontSize: 14,
                  color: Colors.grey.shade600,
                ),
              ),
              
              const SizedBox(height: 30),
              
              // Main chart area
              _userCredits.isEmpty
                  ? _buildEmptyState()
                  : SizedBox(
                      height: 360,
                      child: BarChart(
                        BarChartData(
                          alignment: BarChartAlignment.spaceAround,
                          maxY: _userCredits.isNotEmpty
                              ? ((_userCredits.first['credits'] ?? 0) * 1.2).toDouble()
                              : 100,
                          barTouchData: BarTouchData(
                            enabled: true,
                            touchTooltipData: BarTouchTooltipData(
                              tooltipBgColor: Colors.blueGrey.shade800,
                              tooltipPadding: const EdgeInsets.all(12),
                              tooltipMargin: 8,
                              getTooltipItem: (group, groupIndex, rod, rodIndex) {
                                String name = _userCredits[group.x.toInt()]['name'];
                                return BarTooltipItem(
                                  '$name\n',
                                  const TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold,
                                  ),
                                  children: [
                                    TextSpan(
                                      text: '${rod.toY.round()} credits\n',
                                      style: const TextStyle(
                                        color: Colors.white,
                                        fontSize: 16,
                                        fontWeight: FontWeight.w500,
                                      ),
                                    ),
                                    TextSpan(
                                      text: 'Tap for details',
                                      style: TextStyle(
                                        color: Colors.white.withOpacity(0.8),
                                        fontSize: 12,
                                      ),
                                    ),
                                  ],
                                );
                              },
                            ),
                            touchCallback: (FlTouchEvent event, barTouchResponse) {
                              if (event is FlTapUpEvent && barTouchResponse?.spot != null) {
                                int index = barTouchResponse!.spot!.touchedBarGroupIndex;
                                if (index >= 0 && index < _userCredits.length) {
                                  _showUserDetails(_userCredits[index]);
                                }
                              }
                            },
                          ),
                          titlesData: FlTitlesData(
                            leftTitles: AxisTitles(
                              sideTitles: SideTitles(
                                showTitles: true,
                                reservedSize: 40,
                                getTitlesWidget: (value, meta) {
                                  if (value == 0) {
                                    return const SizedBox.shrink();
                                  }
                                  return Padding(
                                    padding: const EdgeInsets.only(right: 8.0),
                                    child: Text(
                                      '${value.toInt()}',
                                      style: TextStyle(
                                        color: Colors.grey.shade700,
                                        fontSize: 12,
                                        fontWeight: FontWeight.w500,
                                      ),
                                    ),
                                  );
                                },
                              ),
                            ),
                            rightTitles: const AxisTitles(
                              sideTitles: SideTitles(showTitles: false),
                            ),
                            topTitles: const AxisTitles(
                              sideTitles: SideTitles(showTitles: false),
                            ),
                            bottomTitles: AxisTitles(
                              sideTitles: SideTitles(
                                showTitles: true,
                                getTitlesWidget: (value, meta) {
                                  if (value.toInt() < _userCredits.length) {
                                    final user = _userCredits[value.toInt()];
                                    final name = user['name'] ?? 'Unknown';
                                    
                                    // Rank badges
                                    Widget badge;
                                    if (value.toInt() == 0) {
                                      badge = _buildRankBadge('👑', Colors.amber);
                                    } else if (value.toInt() == 1) {
                                      badge = _buildRankBadge('🥈', Colors.grey.shade400);
                                    } else if (value.toInt() == 2) {
                                      badge = _buildRankBadge('🥉', Colors.brown.shade300);
                                    } else {
                                      badge = _buildRankBadge('${value.toInt() + 1}', Colors.blueGrey.shade200);
                                    }

                                    return Padding(
                                      padding: const EdgeInsets.only(top: 10),
                                      child: Column(
                                        children: [
                                          badge,
                                          const SizedBox(height: 8),
                                          SizedBox(
                                            width: 60,
                                            child: Column(
                                              children: [
                                                Text(
                                                  name,
                                                  textAlign: TextAlign.center,
                                                  overflow: TextOverflow.ellipsis,
                                                  style: TextStyle(
                                                    fontSize: 12,
                                                    fontWeight: FontWeight.w500,
                                                    color: Colors.grey.shade800,
                                                  ),
                                                ),
                                                const SizedBox(height: 4),
                                                // Show badges icons
                                                if (_userBadges[user['uid']] != null)
                                                  Row(
                                                    mainAxisSize: MainAxisSize.min,
                                                    children: _userBadges[user['uid']]!
                                                        .take(3)
                                                        .map((badgeType) => _buildBadgeIcon(badgeType))
                                                        .toList(),
                                                  ),
                                              ],
                                            ),
                                          ),
                                        ],
                                      ),
                                    );
                                  }
                                  return const SizedBox.shrink();
                                },
                                reservedSize: 80,
                              ),
                            ),
                          ),
                          gridData: FlGridData(
                            show: true,
                            drawVerticalLine: false,
                            horizontalInterval: _calculateGridInterval(),
                            getDrawingHorizontalLine: (value) => FlLine(
                              color: Colors.grey.shade200,
                              strokeWidth: 1,
                              dashArray: [5, 5],
                            ),
                          ),
                          borderData: FlBorderData(show: false),
                          barGroups: _userCredits.asMap().entries.map((entry) {
                            int index = entry.key;
                            var data = entry.value;
                            double credits = (data['credits']).toDouble();
                            
                            // Custom color and badge for each rank
                            Color barColor;
                            if (index == 0) {
                              barColor = Colors.amber;
                            } else if (index == 1) {
                              barColor = Colors.grey.shade400;
                            } else if (index == 2) {
                              barColor = Colors.brown.shade300;
                            } else {
                              barColor = Colors.blueGrey.shade300;
                            }
                            
                            return _buildBarGroup(index, credits, barColor);
                          }).toList(),
                        ),
                      ),
                    ),
                    
              const SizedBox(height: 20),
              
              // User's position indicator
              if (_userCredits.isNotEmpty)
                _buildUserPositionIndicator(),
              
              const SizedBox(height: 20),
              
              // Achievement progress
              if (_userCredits.isNotEmpty)
                _buildAchievementProgress(),
            ],
          ),
        ),
      ),
    );
  }
  
  Widget _buildBadgeIcon(BadgeType badgeType) {
    Badge badge = Badge.allBadges.firstWhere((b) => b.type == badgeType);
    return Padding(
      padding: const EdgeInsets.only(right: 2),
      child: Icon(
        badge.icon,
        size: 12,
        color: badge.color,
      ),
    );
  }
  
  void _showUserDetails(Map<String, dynamic> user) {
    showModalBottomSheet(
      context: context,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (context) => Container(
        padding: const EdgeInsets.all(20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            CircleAvatar(
              radius: 30,
              backgroundColor: Colors.blueGrey.shade100,
              child: Text(
                user['name'].substring(0, 1).toUpperCase(),
                style: const TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            const SizedBox(height: 16),
            Text(
              user['name'],
              style: const TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              '${user['credits']} Credits',
              style: TextStyle(
                fontSize: 16,
                color: Colors.grey.shade600,
              ),
            ),
            const SizedBox(height: 16),
            
            // User stats
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                _buildStatCard('Items Recycled', '${user['recycledItems'] ?? 0}', Icons.recycling),
                _buildStatCard('Streak', '${user['streak'] ?? 0} days', Icons.local_fire_department),
              ],
            ),
            
            const SizedBox(height: 16),
            
            // User badges
            if (_userBadges[user['uid']] != null && _userBadges[user['uid']]!.isNotEmpty)
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Earned Badges',
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 12),
                  Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: _userBadges[user['uid']]!
                        .map((badgeType) => _buildBadgeChip(Badge.allBadges.firstWhere((b) => b.type == badgeType)))
                        .toList(),
                  ),
                ],
              ),
          ],
        ),
      ),
    );
  }
  
  Widget _buildStatCard(String title, String value, IconData icon) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.grey.shade100,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(
        children: [
          Icon(icon, color: Colors.blueGrey),
          const SizedBox(height: 8),
          Text(
            value,
            style: const TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.bold,
            ),
          ),
          Text(
            title,
            style: TextStyle(
              fontSize: 12,
              color: Colors.grey.shade600,
            ),
          ),
        ],
      ),
    );
  }
  
  Widget _buildBadgeChip(Badge badge) {
    return Chip(
      avatar: Icon(
        badge.icon,
        color: badge.color,
        size: 18,
      ),
      label: Text(badge.name),
      backgroundColor: badge.color.withOpacity(0.1),
    );
  }
  
  void _showBadgesShowcase(BuildContext context) {
    showModalBottomSheet(
      context: context,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (context) => Container(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Achievement Badges',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            Expanded(
              child: ListView.builder(
                itemCount: Badge.allBadges.length,
                itemBuilder: (context, index) {
                  Badge badge = Badge.allBadges[index];
                  bool isEarned = false;
                  String currentUid = _auth.currentUser?.uid ?? '';
                  if (_userBadges[currentUid] != null) {
                    isEarned = _userBadges[currentUid]!.contains(badge.type);
                  }
                  
                  return ListTile(
                    leading: CircleAvatar(
                      backgroundColor: badge.color.withOpacity(isEarned ? 0.2 : 0.1),
                      child: Icon(
                        badge.icon,
                        color: isEarned ? badge.color : Colors.grey,
                      ),
                    ),
                    title: Text(
                      badge.name,
                      style: TextStyle(
                        color: isEarned ? Colors.black : Colors.grey,
                        fontWeight: isEarned ? FontWeight.bold : FontWeight.normal,
                      ),
                    ),
                    subtitle: Text(badge.description),
                    trailing: isEarned
                        ? const Icon(Icons.check_circle, color: Colors.green)
                        : Text(
                            '${badge.requiredCredits} credits',
                            style: TextStyle(color: Colors.grey.shade600),
                          ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
  
  Widget _buildAchievementProgress() {
    String currentUid = _auth.currentUser?.uid ?? '';
    int userPos = _userCredits.indexWhere((user) => user['uid'] == currentUid);
    
    if (userPos == -1) return const SizedBox.shrink();
    
    int currentCredits = _userCredits[userPos]['credits'] ?? 0;
    Badge? nextBadge;
    
    for (var badge in Badge.allBadges) {
      if (currentCredits < badge.requiredCredits) {
        nextBadge = badge;
        break;
      }
    }
    
    if (nextBadge == null) return const SizedBox.shrink();
    
    double progress = currentCredits / nextBadge.requiredCredits;
    
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.grey.shade100,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(nextBadge.icon, color: nextBadge.color),
              const SizedBox(width: 8),
              Text(
                'Next Badge: ${nextBadge.name}',
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Text(
            nextBadge.description,
            style: TextStyle(
              fontSize: 12,
              color: Colors.grey.shade600,
            ),
          ),
          const SizedBox(height: 12),
          LinearProgressIndicator(
            value: progress,
            backgroundColor: Colors.grey.shade300,
            valueColor: AlwaysStoppedAnimation<Color>(nextBadge.color),
          ),
          const SizedBox(height: 4),
          Text(
            '$currentCredits / ${nextBadge.requiredCredits} credits',
            style: TextStyle(
              fontSize: 12,
              color: Colors.grey.shade600,
            ),
          ),
        ],
      ),
    );
  }

  double _calculateGridInterval() {
    if (_userCredits.isEmpty) return 20;
    final maxCredits = _userCredits.first['credits'] ?? 0;
    if (maxCredits <= 100) return 20;
    if (maxCredits <= 500) return 100;
    return 200;
  }

  Widget _buildRankBadge(String rank, Color color) {
    return Container(
      width: 28,
      height: 28,
      decoration: BoxDecoration(
        color: color,
        shape: BoxShape.circle,
        boxShadow: [
          BoxShadow(
            color: color.withOpacity(0.4),
            blurRadius: 6,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Center(
        child: Text(
          rank,
          style: const TextStyle(
            fontSize: 14,
          ),
        ),
      ),
    );
  }

  Widget _buildUserPositionIndicator() {
    String currentUid = _auth.currentUser?.uid ?? '';
    int userPos = _userCredits.indexWhere((user) => user['uid'] == currentUid);
    
    if (userPos == -1) {
      return const SizedBox.shrink();
    }
    
    Color bgColor = userPos == 0 ? Colors.amber.withOpacity(0.1) : Colors.blueGrey.withOpacity(0.1);
    Color textColor = userPos == 0 ? Colors.amber.shade800 : Colors.blueGrey.shade700;
    
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 16),
      decoration: BoxDecoration(
        color: bgColor,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Row(
        children: [
          CircleAvatar(
            radius: 18,
            backgroundColor: Colors.white,
            child: Text(
              userPos == 0 ? '👑' : '${userPos + 1}',
              style: TextStyle(
                fontWeight: FontWeight.bold, 
                color: textColor,
              ),
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Your Position',
                  style: TextStyle(
                    fontSize: 12,
                    color: Colors.grey.shade600,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  userPos == 0 
                      ? 'You\'re in the lead! 🎉' 
                      : 'You\'re #${userPos + 1} on the leaderboard',
                  style: TextStyle(
                    fontWeight: FontWeight.w600,
                    color: textColor,
                  ),
                ),
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(16),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.05),
                  blurRadius: 6,
                  offset: const Offset(0, 2),
                ),
              ],
            ),
            child: Text(
              '${_userCredits[userPos]['credits']} pts',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                color: textColor,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildEmptyState() {
    return SizedBox(
      height: 300,
      child: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              Icons.analytics_outlined,
              size: 70,
              color: Colors.grey.shade300,
            ),
            const SizedBox(height: 16),
            Text(
              'No leaderboard data yet',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w500,
                color: Colors.grey.shade500,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              'Start recycling to earn credits!',
              style: TextStyle(
                fontSize: 14,
                color: Colors.grey.shade500,
              ),
            ),
          ],
        ),
      ),
    );
  }

  BarChartGroupData _buildBarGroup(int x, double y, Color color) {
    return BarChartGroupData(
      x: x,
      barRods: [
        BarChartRodData(
          fromY: 0,
          toY: y,
          gradient: LinearGradient(
            colors: [
              color,
              color.withOpacity(0.7),
            ],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
          width: 24,
          borderRadius: const BorderRadius.vertical(top: Radius.circular(12)),
          backDrawRodData: BackgroundBarChartRodData(
            show: true,
            fromY: 0,
            toY: _userCredits.isNotEmpty
                ? ((_userCredits.first['credits'] ?? 0) * 1.2).toDouble()
                : 100,
            color: Colors.grey.shade100,
          ),
        ),
      ],
    );
  }
}