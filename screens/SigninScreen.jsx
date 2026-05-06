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
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const SigninScreen = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../assets/white.jpg')}
          style={styles.image}
          resizeMode="cover"
        >
          <KeyboardAvoidingView
            style={styles.overlay}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            {/* TOP TEXT (fixed position) */}
            <View style={styles.topSection}>
              <Text style={styles.text}>Welcome to your space</Text>
              <Text style={styles.smalltext}>Start where you left off</Text>
            </View>

            {/* FORM */}
            <View style={styles.form}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                placeholderTextColor="rgba(133, 132, 132, 0.5)"
              />

              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="rgba(133, 132, 132, 0.5)"
                keyboardType="email-address"
              />

              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="********"
                secureTextEntry
                placeholderTextColor="rgba(133, 132, 132, 0.5)"
              />

              <TouchableOpacity style={styles.buttonbg}>
                <Text style={styles.buttontext}>Login</Text>
              </TouchableOpacity>
              <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                  <Text style={styles.signUpText}>Login In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SigninScreen;

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
