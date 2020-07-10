import React, { Children } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Badge from './Badge';

export default function TextC(props) {
  const {
    text,
    style,
    weight = 'Medium',
    color = '#424242',
    size = 0,
    lineBreak = 'tail',
    badge = false,
    badgeColor = '#55FF46',
    badgeText = 'Basic',
    badgeTextColor = '#424242',
    children,
    numberOfLines,
  } = props;

  let fontSize = size === 0 ? '' : {fontSize: size};
  return (
    <View style={styles.textContainer}>
      <Text
        lineBreakMode={lineBreak}
        numberOfLines={numberOfLines}
        style={[{fontFamily: `Rubik-${weight}`, color}, fontSize, style]}>
        {children ? children : text}
      </Text>
      {badge ? (
        <Badge
          style={styles.badge}
          text={badgeText}
          color={badgeColor}
          textColor={badgeTextColor}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    alignSelf: 'center',
  },
});
