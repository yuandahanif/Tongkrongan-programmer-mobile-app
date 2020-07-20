import React from 'react';
import {StyleSheet, Dimensions, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DEVICE = Dimensions.get('window');

export default function BackHeader({navigation}) {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()}>
        <Icon name="chevron-left" size={34} color="#424242" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: DEVICE.height * 0.08,
    paddingHorizontal: 20,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: 1000
  },
});
