import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

import Text from './Text';

export const PostAuthor = props => {
  const {avatar_url, name, containerStyle} = props;
  return (
    <View style={[styles.author, containerStyle]}>
      <Image
        style={styles.avatar}
        defaultSource={require('../assets/images/Arkgnits-main.jpg')}
        source={{uri: avatar_url}}
      />
      <Text text={name} size={14} />
      <TouchableOpacity style={styles.moreIcon}>
        <Icon name="more-horizontal" size={20} color="#424242" />
      </TouchableOpacity>
    </View>
  );
};
export const PostAuthorSkeleton = () => {
  const authorLayout = [
    styles.avatar,
    {width: '50%', height: '80%', alignSelf: 'center'},
    {...styles.moreIcon, width: '10%', height: '30%', alignSelf: 'center'},
  ];
  return (
    <SkeletonContent
      isLoading={true}
      layout={authorLayout}
      containerStyle={styles.author}>
      <View />
      <View />
      <View />
    </SkeletonContent>
  );
};

const styles = StyleSheet.create({
  author: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    overflow: 'hidden',
    marginHorizontal: 15,
    marginRight: 10,
  },
  moreIcon: {
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 15,
  },
});
