import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  // FlatList,
  // ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import TabBar from '../components/TabBar';
import Text from '../components/Text';
import SkillList from '../components/SkillList';
import skillData from '../data/skillData.json';
import dataSociall from '../data/socialData.json';
import {ScrollView, FlatList} from 'react-native-gesture-handler';

const languageSkill = skillData.items.filter(v => v.category === 'Language');
const LibrarySkill = skillData.items.filter(v => v.category === 'Library');
const TechnologySkill = skillData.items.filter(
  v => v.category === 'Technology',
);

export default function AbouteMeScreen() {
  let id = 1;
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Text
          lineBreak={1}
          text="Yuanda Hanif"
          size={24}
          color="white"
          badge={true}
          badgeTextColor="white"
        />
        <Text
          text="Bergabung sejak Juni 15, 2020"
          color="white"
          size={11}
          weight="Light"
        />
      </View>
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileInfoImage}
          source={require('../assets/images/profile.png')}
        />
        <View style={styles.profileInfoSocial}>
          <Text size={11} weight="Light">
            Terhubung
          </Text>
          <View style={styles.listSocial}>
            <FlatList
              contentContainerStyle={styles.listSocial}
              data={dataSociall}
              renderItem={data => (
                <TouchableOpacity
                  onPressIn={() => {
                    alert(data.item.account);
                  }}>
                  <Icon
                    name={data.item.iName}
                    size={24}
                    color={data.item.color}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={data => data.iName}
              horizontal={true}
            />
          </View>
        </View>
      </View>
      <View style={styles.profileSkill}>
        <TouchableOpacity style={styles.editAkun} activeOpacity={0.8}>
          <Icon name="settings" size={11} style={styles.settingIcon} />
          <Text text="Edit akun" />
        </TouchableOpacity>
        <Text size={18} style={styles.subTitle}>
          Pengalaman
        </Text>
        <View style={styles.expContainer}>
          <View style={styles.expContent}>
            <Text numberOfLines={1} size={15}>
              Magang
            </Text>
            <TouchableOpacity style={styles.exp} activeOpacity={0.8}>
              <Text numberOfLines={1}>PT. Mencari Cinta Sejati</Text>
              <View style={styles.expDesc}>
                <Text numberOfLines={1} weight="Regular" size={16}>
                  Content writer
                </Text>
                <Text numberOfLines={1} weight="Regular" size={13}>
                  {' '}
                  (2010-2011)
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.expContent}>
            <Text numberOfLines={1} size={15}>
              Bekerja
            </Text>
            <TouchableOpacity style={styles.exp} activeOpacity={0.8}>
              <Text numberOfLines={1}>Tidak ada</Text>
              <View style={styles.expDesc}>
                <Text numberOfLines={1} weight="Regular" size={16} />
                <Text numberOfLines={1} weight="Regular" size={13} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text size={18} style={styles.subTitle}>
          Skill
        </Text>
        <FlatList
          data={[
            () => (
              <SkillList title="Bahasa Pemrograman" skillData={languageSkill} />
            ),
            () => (
              <SkillList title="Framework / Library" skillData={LibrarySkill} />
            ),
            () => <SkillList title="Teknologi" skillData={TechnologySkill} />,
          ]}
          renderItem={data => <data.item />}
          keyExtractor={() => (id += 1).toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bar: {
    paddingHorizontal: 15,
    paddingLeft: 110,
    backgroundColor: '#6782F0',
    flex: 3,
    justifyContent: 'flex-end',
    paddingBottom: 5,
  },
  profileInfo: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  profileInfoImage: {
    height: 80,
    width: 80,
    marginTop: -40,
  },
  profileInfoSocial: {
    marginLeft: 15,
    marginTop: 5,
    flex: 1,
  },
  listSocial: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginRight: 25,
    justifyContent: 'space-evenly',
  },
  editAkun: {
    height: 30,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: 'white',
    borderColor: '#424242',
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 25,
  },
  settingIcon: {
    marginHorizontal: 5,
  },
  subTitle: {
    marginBottom: 5,
  },
  expContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expContent: {
    // flexDirection: 'column',
    width: '48%',
  },
  exp: {
    borderRadius: 6,
    // flex: 1,
    backgroundColor: 'white',
    borderColor: '#424242',
    borderWidth: 0.7,
    flexDirection: 'column',
    padding: 6,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  expDesc: {
    marginTop: 5,
    flexDirection: 'column',
  },
  profileSkill: {
    flex: 10,
    marginHorizontal: 15,
    paddingTop: 15,
  },
  skillCategoryContainer: {
    flexDirection: 'row',
  },
});
