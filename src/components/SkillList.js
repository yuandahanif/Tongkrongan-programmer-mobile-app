import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from './Text';

export default function SkillList(props) {
  
  const {skillData, title} = props;
  return (
    <View style={styles.container}>
      <Text text={title} size={14} style={styles.title} />
      <FlatList
        data={skillData}
        renderItem={data => (
          <View style={styles.skillInfo}>
            <MCIcon name={data.item.iconName} size={28} />
            <View style={styles.skillInfoDetail}>
              <View style={styles.skillInfoTop}>
                <Text
                  text={data.item.skillName}
                  weight="Regular"
                  badge={true}
                  badgeText={
                    data.item.percentageProgress < 40
                      ? 'Basic'
                      : data.item.percentageProgress > 85
                      ? 'Advanced'
                      : 'Intermediate'
                  }
                  badgeColor={
                    data.item.percentageProgress < 40
                      ? '#55FF46'
                      : data.item.percentageProgress > 85
                      ? '#E1306C'
                      : '#006192'
                  }
                  badgeTextColor="white"
                />
                <Text
                  text={`${data.item.percentageProgress}%`}
                  weight="Regular"
                  style={styles.percentText}
                />
              </View>
              <View style={styles.skillInfoPercent}>
                <View
                  style={[
                    styles.percent,
                    {width: `${data.item.percentageProgress}%`},
                  ]}
                />
              </View>
            </View>
          </View>
        )}
        keyExtractor={data => data.id.toString()}
      />
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
