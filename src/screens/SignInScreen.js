

import Header from "../components/Header";
import {colors, parameters, title} from "../global/styles";
import { View, Text, TextInput, TouchableOpacity, Keyboard, Animated, StyleSheet } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';


const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email inválido')
      .required('Campo obrigatório'),
    password: Yup.string()
      .required('Campo obrigatório')
      .min(6, 'A senha deve ter pelo menos 6 caracteres'),
  });
  
  const SighInScren = () => {

    const handleLogin = (values) => {
      console.log(values);
    };
  
    return (
        
          
           
              <View style={styles.container}>
                <Header title="Minha conta"/>
                <View style={styles.header}>
                  <Animatable.Text animation="fadeInDown" style={styles.textHeader}>
                    Login
                  </Animatable.Text>
                </View>
                <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                  <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={(values) => handleLogin(values)}
                  >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                      <>
                        <Text style={styles.text}>E-mail</Text>
                        <View style={styles.action}>
                          <Icon name="user-o" size={20} />
                          <TextInput
                            placeholder="Seu e-mail"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                          />
                        </View>
                        {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}
                        <Text style={[styles.text, { marginTop: 35 }]}>Senha</Text>
                        <View style={styles.action}>
                          <Icon name="lock" size={20} />
                          <TextInput
                            placeholder="Sua senha"
                            placeholderTextColor="#666666"
                            secureTextEntry
                            style={styles.textInput}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                          />
                        </View>
                        {errors.password && touched.password && (
                          <Text style={styles.error}>{errors.password}</Text>
                        )}
                        <TouchableOpacity onPress={handleSubmit} style={styles.buttonContainer}>
                          <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                      </>
                    )}
                  </Formik>
                </Animatable.View>
              </View>
            );
          };
  
  
  export default SighInScren;

const styles = StyleSheet.create({
container: {
flex: 1,
 backgroundColor: '#009387'
},
logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    },
    error: {
        color: '#FF0000',
        fontSize: 14,
      },
      textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
      },
      iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
      },
      footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
      },
      textHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
      },
      action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
      },
      buttonContainer: {
        backgroundColor: '#009387',
        paddingVertical: 10,
        marginTop: 20,
        borderRadius: 10,
      },
      buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
      },
      
      
text1:{
color:colors.grey3,
fontSize: 16,
},

TextInput1:{
borderBottom:1,
borderBottomColor:"#86939e",
marginHorizontal: 20,
borderRadius: 12,
borderBottom:20,
paddingLeft:15,
},

TextInput2: {
borderWidth:1,
marginTop: 20,
borderRadius: 12,
marginHorizontal:20,
borderColor:"#86939e",
flexDirection: "row",
justifyContent: "space-between",
alignContent:"center",
alignItems: "center",
paddingLeft:15,
}
});

