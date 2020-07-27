import React from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import Text from '../../components/Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ficon from 'react-native-vector-icons/Feather';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

const DEVICE = Dimensions.get('window');
export default function UpdateInternship() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollHandler}>
        <View style={styles.top}>
          <Text weight="Medium" style={styles.topTitle}>
            Magang
          </Text>
          <TouchableOpacity style={styles.deleteButton}>
            <Ficon name="trash-2" color="red" />
            <Text weight="Regular" style={styles.deleteText}>
              Hapus
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formInputTextContainer}>
          <Text style={styles.formLabel}>Judul</Text>
          <TextInput
            style={styles.formTextInput}
            underlineColorAndroid="transparent"
            placeholder={'Posisi'}
          />
        </View>
        {/* TODO: nanti di buat component */}
        <View style={styles.formInputTextContainer}>
          <Text style={styles.formLabel}>Judul</Text>
          <TextInput
            style={styles.formTextInput}
            underlineColorAndroid="transparent"
            placeholder={'Posisi'}
          />
        </View>
      </ScrollView>
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
  scrollHandler: {
    flex: 1,
    marginHorizontal: 30,
    paddingVertical: 10,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topTitle: {
    fontSize: 24,
  },
  deleteButton: {flexDirection: 'row', alignItems: 'center'},
  deleteText: {color: 'red', marginLeft: 3},
  // form
  formInputTextContainer: {
    marginTop: 10,
  },
  formLabel: {
    marginLeft: 5,
  },
  formTextInput: {
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 3,
  },
  // form end
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
