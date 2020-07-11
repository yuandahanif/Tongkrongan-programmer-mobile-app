import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function SearchScreen() {
  const onClick = () => signOut();
  return (
    <View style={styles.container}>
      <Text>Maaf halaman belum di selesai buat!</Text>
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
