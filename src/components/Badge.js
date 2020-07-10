import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Badge(props) {
  const {text, color, style, textColor} = props;
  return (
    <Text
      style={[styles.badge, style, {backgroundColor: color, color: textColor}]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  badge: {
    marginLeft: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 4,
    fontSize: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
