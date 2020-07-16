import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from './Text';

export default function SkillList(props) {
  
  const {skillData = [], title} = props;
  return (
    <View style={styles.container}>
      <Text text={title} size={14} style={styles.title} />
      {skillData && skillData.map( data => (
        <View style={styles.skillInfo} key={data.id}>
        <MCIcon name={data.iconName} size={28} />
        <View style={styles.skillInfoDetail}>
          <View style={styles.skillInfoTop}>
            <Text
              text={data.skillName}
              weight="Regular"
              badge={true}
              badgeText={
                data.percentageProgress < 40
                  ? 'Basic'
                  : data.percentageProgress > 85
                  ? 'Advanced'
                  : 'Intermediate'
              }
              badgeColor={
                data.percentageProgress < 40
                  ? '#55FF46'
                  : data.percentageProgress > 85
                  ? '#E1306C'
                  : '#006192'
              }
              badgeTextColor="white"
            />
            <Text
              text={`${data.percentageProgress}%`}
              weight="Regular"
              style={styles.percentText}
            />
          </View>
          <View style={styles.skillInfoPercent}>
            <View
              style={[
                styles.percent,
                {width: `${data.percentageProgress}%`},
              ]}
            />
          </View>
        </View>
      </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  skillInfo: {
    marginTop: 10,
    flexDirection: 'row',
  },
  skillInfoDetail: {
    flex: 1,
    marginLeft: 5,
  },
  skillInfoTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skillInfoPercent: {
    height: 5,
    width: '100%',
    backgroundColor: '#C4C4C4',
    borderRadius: 4,
    marginTop: 5,
  },
  percent: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: '#83CD29',
  },
  percentText: {
    marginRight: 5,
  },
});
