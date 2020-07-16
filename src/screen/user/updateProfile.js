import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import Text from '../../components/Text';


export default function updateProfile({navigation}) {
  return (
    <View>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => goBack()}>
          <Icon name="chevron-left" size={28} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>{/* foto profile dan sosial media */}</View>
        <View>
          {/* magang */}
          {/* Bekerja */}
        </View>
        <View>{/* skill */}</View>
      </ScrollView>
      <View>{/* save */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    justifyContent: 'flex-end',
  },
});
