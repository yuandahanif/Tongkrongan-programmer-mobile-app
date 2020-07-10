import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

import Text from './Text';
import SkillTagList from './SkillTagList';

export function ProjectPostList(props) {
  const {data} = props;
  return (
    <View style={styles.post}>
      <View style={styles.author}>
        <Image
          style={styles.avatar}
          defaultSource={require('../assets/images/Arkgnits-main.jpg')}
          source={{uri: data.owner.avatar_url}}
        />
        <Text text={data.owner.login} size={14} />
        <TouchableOpacity style={styles.moreIcon}>
          <Icon name="more-horizontal" size={20} color="#424242" />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.postImage}
        source={{uri: 'https://via.placeholder.com/350?text=its+the+post'}}
      />
      <View style={styles.postDescription}>
        <View style={styles.leftDescription}>
          <Text text={data.name} size={16} />
          <SkillTagList tagList={data.skillTag} itemLimit={10} />
          <Text
            style={styles.time}
            text="1 hari yang lalu"
            weight="Regular"
            size={8}
          />
        </View>
        <TouchableOpacity style={styles.shareButton}>
          <Icon name="share-2" size={24} color="#424242" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function ProjectPostListSkeleton(props) {
  const {load = true} = props;
  const loop = Array(2).fill(0);

  const authorLayout = [
    styles.avatar,
    {width: '50%', height: '80%', alignSelf: 'center'},
    {...styles.moreIcon, width: '10%', height: '30%', alignSelf: 'center'},
  ];
  const postImageLayout = [{width: '100%', height: 200}];
  const postDescLayout = [
    {width: '90%', height: 50, marginBottom: 5},
    // {width: '100%', height: '10%', marginBottom: 5},
    // {width: '90%', height: '10%'},
  ];

  return loop.map((v, i) => (
    <View style={styles.post} key={i}>
      <SkeletonContent
        isLoading={load}
        layout={authorLayout}
        containerStyle={styles.author}>
        <View />
        <View />
        <View />
      </SkeletonContent>
      <SkeletonContent layout={postImageLayout} isLoading={load}>
        <View />
      </SkeletonContent>
      <View style={styles.postDescription}>
        <SkeletonContent
          containerStyle={styles.leftDescription}
          layout={postDescLayout}
          isLoading={load}>
          <View />
          <View />
          <View />
        </SkeletonContent>
        <SkeletonContent
          containerStyle={styles.shareButton}
          isLoading={load}
          layout={[{width: 36, height: 36, marginLeft: 'auto'}]}>
          <View />
        </SkeletonContent>
      </View>
    </View>
  ));
}

const styles = StyleSheet.create({
  post: {
    // flex: 1,
    marginHorizontal: 30,
    marginTop: 15,
    paddingVertical: 10,
    borderRadius: 4,
    borderColor: '#898989',
    borderWidth: 0.5,
  },
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
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  postDescription: {
    flexDirection: 'row',
    padding: 15,
    paddingBottom: 5,
  },
  leftDescription: {
    width: '90%',
  },
  shareButton: {
    marginLeft: 'auto',
  },
  time: {
    marginLeft: 5,
  },
});
