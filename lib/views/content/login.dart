import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import '../../app.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  bool _isLoading = false;
  

  @override
  Widget build(BuildContext context) {
    var onPressed2 = _isLoading ? null : () => _signInWithGoogle();
    return Scaffold(
      
      backgroundColor: Colors.green,
      
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              FontAwesomeIcons.userCircle,
              color: Colors.white,
              size: 100,
            ),
            SizedBox(height: 50),
            ElevatedButton.icon(
              onPressed: onPressed2,
              //  _isLoading ? null : () => _signInWithGoogle(context),
              icon: Icon(FontAwesomeIcons.google),
              label: Text('Entrar com o Google'),
              style: ElevatedButton.styleFrom(
                primary: Colors.blueGrey,
                textStyle: TextStyle(fontSize: 20),
                padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
              ),
            ),
            SizedBox(height: 20),
            _isLoading ? CircularProgressIndicator() : SizedBox(),
          ],
        ),
      ),
    );
  }

  Future<void> _signInWithGoogle() async {
    setState(() {
      _isLoading = true;
    });
    // Implementar a autenticação do Google aqui
    await Future.delayed(
        Duration(seconds: 2)); // Simulando uma espera de 2 segundos
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => App()),
    );
    // Aqui você pode implementar a autenticação do Google
  }
}
