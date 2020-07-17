import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from '../../components/Text';
const DEVICE = Dimensions.get('window');

import dataSociall from '../../data/socialData.json';

export default function updateProfile({navigation}) {
  const goBack = () => {
    navigation.goBack();
  };
  const [name, setName] = useState('yuanda');
  const [enableEditName, setEnableEditName] = useState(true);
  const nameEdit = useRef(null);
  const nameEditPress = () => {
    // setEnableEditName(!enableEditName);
    nameEdit.current.focus();
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => goBack()}>
          <Icon name="chevron-left" size={28} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageProfile}
            source={{uri: 'https://ui-avatars.com/api/?name=yuanda'}}
          />
          <View style={styles.containerProfileName}>
            <TextInput
              style={styles.profileName}
              // underlineColorAndroid='#666666'
              placeholder=""
              defaultValue={name}
              onChangeText={value => setName(value)}
              autoCapitalize="none"
              onBlur={() => setEnableEditName(!enableEditName)}
              ref={nameEdit}
            />
            <TouchableOpacity onPress={nameEditPress}>
              <Icon name="pencil-outline" size={22} color="#666666" />
            </TouchableOpacity>
          </View>
          <View style={styles.externalLinkContainer}>
            <Text>Hubungkan</Text>
            <View style={styles.externalLinkList}>
              {dataSociall &&
                dataSociall.map(data => (
                  <TouchableOpacity
                    onPressIn={() => {
                      openLink(data.account);
                    }}
                    key={data.iName}>
                    <Icon name={data.iName} size={32} color={data.color} />
                  </TouchableOpacity>
                ))}
            </View>
          </View>
        </View>
        <View style={styles.expContainer}>
          <View style={styles.internHeader}>
            <Text size={16}>Magang</Text>
            <TouchableOpacity style={styles.addInternContainer}>
              <Icon name="plus" size={14} color="white" />
              <Text color="white" weight="Regular">
                Tambah
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.internList}>
            {/* awal list */}
            <View style={styles.intern}>
              <View style={styles.internLeft}>
                <Text size={18} weight="Medium">
                  Frelance
                </Text>
                <Text size={12} weight={'Regular'}>
                  Content writer (2019-2020)
                </Text>
              </View>
              <View style={styles.internRight}>
                <TouchableOpacity onPress={null}>
                  <Icon name="pencil-outline" size={22} color="#666666" />
                </TouchableOpacity>
              </View>
            </View>
            {/* list ke 2 */}
            <View style={styles.intern}>
              <View style={styles.internLeft}>
                <Text size={18} weight="Medium">
                  Frelance
                </Text>
                <Text size={12} weight={'Regular'}>
                  Content writer (2019-2020)
                </Text>
              </View>
              <View style={styles.internRight}>
                <TouchableOpacity onPress={null}>
                  <Icon name="pencil-outline" size={22} color="#666666" />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
            style={styles.expandInternButton}>
              <Text weight="Regular" size={12}>Tampilkan 7 lainnya</Text>
            </TouchableOpacity>
          </View>
          {/* Bekerja */}
          <View style={styles.internHeader}>
            <Text size={16}>Magang</Text>
            <TouchableOpacity style={styles.addInternContainer}>
              <Icon name="plus" size={14} color="white" />
              <Text color="white" weight="Regular">
                Tambah
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.internList}>
            {/* awal list */}
            <View style={styles.intern}>
              <View style={styles.internLeft}>
                <Text size={18} weight="Medium">
                  Frelance
                </Text>
                <Text size={12} weight={'Regular'}>
                  Content writer (2019-2020)
                </Text>
              </View>
              <View style={styles.internRight}>
                <TouchableOpacity onPress={null}>
                  <Icon name="pencil-outline" size={22} color="#666666" />
                </TouchableOpacity>
              </View>
            </View>
            {/* list ke 2 */}
            <View style={styles.intern}>
              <View style={styles.internLeft}>
                <Text size={18} weight="Medium">
                  Frelance
                </Text>
                <Text size={12} weight={'Regular'}>
                  Content writer (2019-2020)
                </Text>
              </View>
              <View style={styles.internRight}>
                <TouchableOpacity onPress={null}>
                  <Icon name="pencil-outline" size={22} color="#666666" />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
            style={styles.expandInternButton}>
              <Text weight="Regular" size={12}>Tampilkan 7 lainnya</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>{/* skill */}</View>
      </ScrollView>
      <View>{/* save */}</View>
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
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scrollContainer: {
    flex: 1,
    marginHorizontal: 30,
  },
  imageContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  imageProfile: {
    width: DEVICE.height * 0.15,
    height: DEVICE.height * 0.15,
    borderRadius: 100,
  },
  containerProfileName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#666',
    borderBottomWidth: 0.5,
  },
  profileName: {
    fontSize: 18,
    marginRight: 5,
    minWidth: '30%',
    textAlign: 'center',
    paddingVertical: 5,
  },
  externalLinkContainer: {
    flex: 1,
    width: DEVICE.width - 60,
    marginTop: 10,
  },
  externalLinkList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  expContainer: {
    marginTop: 20,
  },
  internHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  addInternContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#0095F6',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 3,
  },
  intern: {
    borderColor: '#8D8D8D',
    borderRadius: 2,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 5,
  },
  internRight: {
    justifyContent: 'center',
  },
  expandInternButton: {
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
});
