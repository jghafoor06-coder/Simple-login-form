import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    }}>
      <Text>Welcome back!</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})