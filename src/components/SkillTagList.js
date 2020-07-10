import React from 'react';
import {StyleSheet, View} from 'react-native';
import Badge from './Badge';

export default function BadgeList(props) {
  const {textColor = 'white', tagList = [], itemLimit = 7} = props;
  const badgeColor = {
    javascript: '#D5D90C',
    html: '#FFC806',
    nodejs: '#03A500',
    chromium: '#A8A8A8',
    desktop: '#55FF46',
    css: '#4F9FFD',
  };

  return (
    <View style={styles.container}>
      {tagList.length > 0 &&
        tagList.map((data, i) => {
          const backgroundColor = badgeColor[data.toLowerCase()]
            ? badgeColor[data.toLowerCase()]
            : '#393939';
          return i < itemLimit - 1 ? (
            <Badge
              style={styles.tag}
              text={data}
              color={backgroundColor}
              textColor={textColor}
              key={i}
            />
          ) : null;
        })}
      <Badge
        style={styles.tag}
        text="Lainnya"
        color="#393939"
        textColor={textColor}
        key={itemLimit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    marginTop: 5,
  },
});
