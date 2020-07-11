import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

import Text from './Text';
import SkillTagList from './SkillTagList';
import {PostAuthor as Author, PostAuthorSkeleton as AuthorSkeleton} from './PostAuthor'

export function ProjectPostList(props) {
  const {data, titleOnClick, index} = props;
  return (
    <View style={styles.post}>
      <Author name={data.owner.login} avatar_url={data.owner.avatar_url} />
      <Image
        style={styles.postImage}
        source={{uri: 'https://via.placeholder.com/350?text=its+the+post'}}
      />
      <View style={styles.postDescription}>
        <View style={styles.leftDescription}>
          <TouchableOpacity
          activeOpacity={0.8}
          onPress={()=>{titleOnClick(index)}}
          >
            <Text text={data.name} size={16} />
          </TouchableOpacity>
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

  const postImageLayout = [{width: '100%', height: 200}];
  const postDescLayout = [
    {width: '90%', height: 50, marginBottom: 5},
    // {width: '100%', height: '10%', marginBottom: 5},
    // {width: '90%', height: '10%'},
  ];

  return loop.map((v, i) => (
    <View style={styles.post} key={i}>
      <AuthorSkeleton />
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
