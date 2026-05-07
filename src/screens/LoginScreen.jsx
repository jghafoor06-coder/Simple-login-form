import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../redux/auth/AuthSlice';

const LoginScreen = ({navigation}) => {

  const dispatch = useDispatch();
  const userData = useSelector(state => state.auth.userData);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (userData) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'home' }],
      });
    }
  }, [userData, navigation]);

  const handleLogin = () => {
    const params = {
      username: username,
      password: password,
    };
    dispatch(Login(params));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../../assets/white.jpg')}
          style={styles.image}
          resizeMode="cover"
        >
          <KeyboardAvoidingView
            style={styles.overlay}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            {/* TOP TEXT */}
            <View style={styles.topSection}>
              <Text style={styles.text}>Welcome to your space</Text>
              <Text style={styles.smalltext}>Start where you left off</Text>
            </View>

            {/* FORM */}
            <View style={styles.form}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="rgba(133, 132, 132, 0.5)"
                value={username}
                onChangeText={setUsername}
              />

              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="********"
                placeholderTextColor="rgba(133, 132, 132, 0.5)"
                value={password}
                onChangeText={setPassword}
              />

              <TouchableOpacity style={styles.buttonbg} onPress={handleLogin}>
                <Text style={styles.buttontext}>Login</Text>
              </TouchableOpacity>
              <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('signin')}>
                  <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 30,
  },
  topSection: {
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  smalltext: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  form: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    backgroundColor: 'rgba(224, 219, 219, 0.5)',
    marginVertical: 10,
  },
  label: {
    color: 'rgba(24, 24, 24, 0.5)',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonbg: {
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#7945cc',
  },
  buttontext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    color: 'rgba(24, 24, 24, 0.5)',
    fontSize: 14,
    fontWeight: '500',
  },
  signUpText: {
    color: '#7945cc',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
