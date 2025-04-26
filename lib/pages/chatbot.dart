import 'package:ewaste/presentations/user/home/userHomePage.dart';
import 'package:flutter/material.dart';

class ChatBotScreen extends StatefulWidget {
  const ChatBotScreen({Key? key}) : super(key: key);

  @override
  _ChatBotScreenState createState() => _ChatBotScreenState();
}

class _ChatBotScreenState extends State<ChatBotScreen> {
  final TextEditingController _messageController = TextEditingController();
  final ScrollController _scrollController = ScrollController();
  final List<ChatMessage> _messages = [];
  
  // FAQ data structure
  final Map<String, List<String>> _faqQuestions = {
    // Credits related
    'What are recycling credits?': ['credits', 'what', 'recycle', 'point'],
    'How do I earn credits?': ['earn', 'get', 'credit', 'how'],
    'What can I do with credits?': ['use', 'spend', 'credit', 'redeem'],
    'How many credits per item?': ['many', 'much', 'credit', 'item', 'per'],
    
    // Recycling process
    'How do I start recycling?': ['start', 'begin', 'recycle', 'how'],
    'What items can I recycle?': ['item', 'recycle', 'what', 'can'],
    'Where are recycling centers?': ['where', 'location', 'center', 'recycle'],
    'When are centers open?': ['when', 'time', 'open', 'hour'],
    
    // Account related
    'How do I create an account?': ['create', 'account', 'register', 'sign up'],
    'How do I reset my password?': ['reset', 'password', 'forgot'],
    'How do I update my profile?': ['update', 'profile', 'change', 'edit'],
    'How do I delete my account?': ['delete', 'remove', 'account'],
    
    // App usage
    'How does the app work?': ['how', 'work', 'app', 'use'],
    'Is the app free to use?': ['free', 'cost', 'pay', 'app'],
    'How do I contact support?': ['contact', 'support', 'help', 'problem'],
    'What are the privacy policies?': ['privacy', 'policy', 'data', 'personal'],
  };

  final Map<String, String> _faqAnswers = {
    'What are recycling credits?': 'Recycling credits are points you earn when you recycle items through our app. These credits can be redeemed for rewards, discounts, or used to track your environmental impact.',
    'How do I earn credits?': 'You earn credits by:\n1. Dropping off recyclable items at our partner locations\n2. Scanning items using the app\n3. Participating in special recycling events\n4. Completing recycling challenges',
    'What can I do with credits?': 'You can:\n1. Redeem them for discounts at partner stores\n2. Exchange them for eco-friendly products\n3. Donate them to environmental causes\n4. Compete on our leaderboard',
    'How many credits per item?': 'Credit values vary by item type:\n- Plastic bottles: 5 credits\n- Aluminum cans: 3 credits\n- Glass bottles: 7 credits\n- Paper/Cardboard: 2 credits per kg\n- Electronics: 20-50 credits depending on item',
    
    'How do I start recycling?': 'To start recycling:\n1. Create an account in our app\n2. Find a nearby recycling center using our map\n3. Sort your recyclables by type\n4. Visit the center and scan items using the app\n5. Earn credits instantly!',
    'What items can I recycle?': 'You can recycle:\n- Plastic bottles and containers\n- Aluminum cans\n- Glass bottles and jars\n- Paper and cardboard\n- Electronic waste\n- Metal items\n- Certain types of batteries',
    'Where are recycling centers?': 'To find recycling centers:\n1. Open the map in our app\n2. Allow location access\n3. Centers will appear as pins on the map\n4. Tap a pin for details and directions',
    'When are centers open?': 'Most recycling centers are open:\n- Monday-Friday: 8 AM - 6 PM\n- Saturday: 9 AM - 4 PM\n- Sunday: 10 AM - 2 PM\n\nCheck specific center details in the app for exact hours.',
    
    'How do I create an account?': 'To create an account:\n1. Download our app\n2. Click "Sign Up"\n3. Enter your email and create a password\n4. Verify your email\n5. Complete your profile information',
    'How do I reset my password?': 'To reset your password:\n1. Go to the login screen\n2. Click "Forgot Password"\n3. Enter your email address\n4. Check your email for a reset link\n5. Create a new password',
    'How do I update my profile?': 'To update your profile:\n1. Go to Settings\n2. Tap "Edit Profile"\n3. Update your information\n4. Save changes',
    'How do I delete my account?': 'To delete your account:\n1. Go to Settings\n2. Select "Account Settings"\n3. Tap "Delete Account"\n4. Confirm your decision\n\nNote: This action is permanent and cannot be undone.',
    
    'How does the app work?': 'Our app works by:\n1. Tracking your recycling activities\n2. Awarding credits for each item recycled\n3. Providing locations of recycling centers\n4. Offering rewards for consistent recycling\n5. Creating a community of eco-conscious users',
    'Is the app free to use?': 'Yes, our app is completely free to download and use. There are no hidden fees or subscriptions. You earn credits through recycling, not by paying.',
    'How do I contact support?': 'To contact support:\n1. Go to Settings\n2. Tap "Help & Support"\n3. Choose "Contact Us"\n4. Email us at support@recycleapp.com\n\nWe typically respond within 24 hours.',
    'What are the privacy policies?': 'We take privacy seriously. We:\n1. Only collect necessary information\n2. Never sell your data to third parties\n3. Use encryption for all sensitive data\n4. Allow you to delete your data anytime\n\nRead our full privacy policy in the app under Settings.',
  };

  @override
  void initState() {
    super.initState();
    // Add welcome message
    _addBotMessage("Hi there! 👋 I'm your EcoAssistant. I can help you with recycling questions, credit information, and more. What would you like to know?");
    _addSuggestedQuestions();
  }

  void _addSuggestedQuestions() {
    _messages.add(ChatMessage(
      text: '',
      isBot: true,
      suggestedQuestions: [
        'What are recycling credits?',
        'How do I earn credits?',
        'What items can I recycle?',
        'Where are recycling centers?',
      ],
    ));
  }

  void _addBotMessage(String message) {
    setState(() {
      _messages.add(ChatMessage(
        text: message,
        isBot: true,
      ));
    });
    _scrollToBottom();
  }

  void _addUserMessage(String message) {
    setState(() {
      _messages.add(ChatMessage(
        text: message,
        isBot: false,
      ));
    });
    _scrollToBottom();
  }

  void _scrollToBottom() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_scrollController.hasClients) {
        _scrollController.animateTo(
          _scrollController.position.maxScrollExtent,
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeOut,
        );
      }
    });
  }

  String _findBestMatch(String userInput) {
    String input = userInput.toLowerCase();
    Map<String, int> scores = {};
    
    _faqQuestions.forEach((question, keywords) {
      int score = 0;
      for (String keyword in keywords) {
        if (input.contains(keyword)) {
          score++;
        }
      }
      if (score > 0) {
        scores[question] = score;
      }
    });
    
    if (scores.isEmpty) {
      return '';
    }
    
    // Find the question with the highest score
    String bestMatch = scores.entries.reduce((a, b) => a.value > b.value ? a : b).key;
    return bestMatch;
  }

  void _handleUserInput(String message) {
    if (message.trim().isEmpty) return;
    
    _addUserMessage(message);
    
    // Find best matching question
    String bestMatch = _findBestMatch(message);
    
    if (bestMatch.isNotEmpty && _faqAnswers.containsKey(bestMatch)) {
      _addBotMessage(_faqAnswers[bestMatch]!);
    } else {
      _addBotMessage("I'm not sure I understand. Here are some questions I can help with:");
      _addSuggestedQuestions();
    }
    
    _messageController.clear();
  }

  void _handleSuggestedQuestion(String question) {
    _handleUserInput(question);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[50],
      appBar: AppBar(
  leading: IconButton(
  icon: const Icon(Icons.arrow_back),
  onPressed: () {
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => UserHomePage()),
    );
  },
),

  title: const Text('EcoAssistant', style: TextStyle(fontWeight: FontWeight.bold)),
  centerTitle: false,
  elevation: 0,
  backgroundColor: Colors.white,
  foregroundColor: Colors.green[800],
  actions: [
    IconButton(
      icon: const Icon(Icons.info_outline),
      onPressed: () {
        _addBotMessage("I'm here to help with all your recycling questions! Try asking about credits, recycling centers, or how to get started.");
      },
    ),
  ],
),
      body: Column(
        children: [
          Expanded(
            child: Container(
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: const BorderRadius.only(
                  bottomLeft: Radius.circular(20),
                  bottomRight: Radius.circular(20)),
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey.withOpacity(0.1),
                    spreadRadius: 1,
                    blurRadius: 8,
                    offset: const Offset(0, 3),
              )],
              ),
              child: ClipRRect(
                borderRadius: const BorderRadius.only(
                  bottomLeft: Radius.circular(20),
                  bottomRight: Radius.circular(20)),
                child: ListView.builder(
                  controller: _scrollController,
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                  itemCount: _messages.length,
                  itemBuilder: (context, index) {
                    return _buildMessage(_messages[index]);
                  },
                ),
              ),
            ),
          ),
          _buildInputArea(),
        ],
      ),
    );
  }

  Widget _buildMessage(ChatMessage message) {
    if (message.suggestedQuestions != null) {
      return Padding(
        padding: const EdgeInsets.only(top: 8, bottom: 16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Padding(
              padding: EdgeInsets.only(left: 8, bottom: 8),
              child: Text(
                'Suggested questions:',
                style: TextStyle(
                  color: Colors.grey,
                  fontSize: 12,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ),
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: message.suggestedQuestions!.map((question) {
                return InkWell(
                  borderRadius: BorderRadius.circular(16),
                  onTap: () => _handleSuggestedQuestion(question),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                    decoration: BoxDecoration(
                      color: Colors.green[50],
                      borderRadius: BorderRadius.circular(16),
                      border: Border.all(color: Colors.green[100]!),
                    ),
                    child: Text(
                      question,
                      style: TextStyle(
                        color: Colors.green[800],
                        fontSize: 13,
                      ),
                    ),
                  ),
                );
              }).toList(),
            ),
          ],
        ),
      );
    }
    
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 6),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.end,
        mainAxisAlignment: message.isBot ? MainAxisAlignment.start : MainAxisAlignment.end,
        children: [
          if (message.isBot)
            Container(
              width: 28,
              height: 28,
              margin: const EdgeInsets.only(right: 8),
              decoration: BoxDecoration(
                color: Colors.green[100],
                borderRadius: BorderRadius.circular(14),
              ),
              child: Icon(Icons.recycling, size: 16, color: Colors.green[800]),
            ),
          Flexible(
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
              decoration: BoxDecoration(
                color: message.isBot ? Colors.grey[100] : Colors.green[600],
                borderRadius: BorderRadius.only(
                  topLeft: const Radius.circular(20),
                  topRight: const Radius.circular(20),
                  bottomLeft: Radius.circular(message.isBot ? 0 : 20),
                  bottomRight: Radius.circular(message.isBot ? 20 : 0),
                ),
              ),
              child: Text(
                message.text,
                style: TextStyle(
                  color: message.isBot ? Colors.grey[800] : Colors.white,
                  fontSize: 15,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildInputArea() {
    return SafeArea(
      top: false,
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white,
          boxShadow: [
            BoxShadow(
              color: Colors.grey.withOpacity(0.1),
              spreadRadius: 2,
              blurRadius: 8,
              offset: const Offset(0, -2),
            ),
          ],
        ),
        child: Row(
          children: [
            Expanded(
              child: Container(
                decoration: BoxDecoration(
                  color: Colors.grey[100],
                  borderRadius: BorderRadius.circular(24),
                ),
                child: Row(
                  children: [
                    const SizedBox(width: 16),
                    Expanded(
                      child: TextField(
                        controller: _messageController,
                        decoration: const InputDecoration(
                          hintText: 'Type your message...',
                          border: InputBorder.none,
                          hintStyle: TextStyle(color: Colors.grey),
                        ),
                        style: const TextStyle(color: Colors.black87),
                        onSubmitted: _handleUserInput,
                      ),
                    ),
                    IconButton(
                      icon: Icon(Icons.attach_file, color: Colors.grey[600]),
                      onPressed: () {
                        // Handle attachment
                      },
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(width: 12),
            Container(
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.green[600],
                boxShadow: [
                  BoxShadow(
                    color: Colors.green.withOpacity(0.2),
                    spreadRadius: 1,
                    blurRadius: 6,
                    offset: const Offset(0, 2),
                  ),
                ],
              ),
              child: IconButton(
                icon: const Icon(Icons.send, color: Colors.white),
                onPressed: () => _handleUserInput(_messageController.text),
              ),
            ),
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    _messageController.dispose();
    _scrollController.dispose();
    super.dispose();
  }
}

class ChatMessage {
  final String text;
  final bool isBot;
  final List<String>? suggestedQuestions;

  ChatMessage({
    required this.text,
    required this.isBot,
    this.suggestedQuestions,
  });
}