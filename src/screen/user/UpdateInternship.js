import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ficon from 'react-native-vector-icons/Feather';

const DEVICE = Dimensions.get('window');
export default function UpdateInternship() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => goBack()}>
          <Icon name="chevron-left" size={28} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomTabContainer}>
        <TouchableOpacity style={styles.bottomTabButton}>
          <Ficon name="save" color="white" size={18} />
          <Text style={styles.textSave} weight="Regular">
            Simpan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    backgroundColor: 'white',
    height: DEVICE.height * 0.08,
    paddingHorizontal: 20,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  bottomTabContainer: {
    height: DEVICE.height * 0.08,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  bottomTabButton: {
    flexDirection: 'row',
    backgroundColor: '#0095F6',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
  textSave: {
    marginLeft: 5,
    color: 'white',
    fontSize: 16,
  },
});
