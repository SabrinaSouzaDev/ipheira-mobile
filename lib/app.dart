import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutterprojetfeira/views/content/content_page.dart';
import 'core/theme/app_theme.dart';

class App extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Iphera',
      debugShowCheckedModeBanner: false,
     theme: AppTheme.theme,
     
      home: ContentPage(),
    );
  }
}