import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/Logo(2).png')} />
      <Text style={styles.title}>Tongkrongan Programmer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginTop: 15,
  }
});
