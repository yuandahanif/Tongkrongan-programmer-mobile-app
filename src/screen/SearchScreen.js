import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function SearchScreen() {
  const onClick = () => signOut();
  return (
    <View style={styles.container}>
      <Text>Maaf halaman belum di buat!</Text>
      <Text>dan hanya ada tombol Logout disini</Text>
      <TouchableOpacity onPress={() => onClick()} style={styles.logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logout: {
    padding: 5,
    backgroundColor: 'cyan',
    marginTop: 5,
    borderRadius: 4,
    color: 'white',
  },
});
