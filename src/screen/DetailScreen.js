/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {connect} from 'react-redux';
import Animated from 'react-native-reanimated';
import {ScrollView} from 'react-native-gesture-handler';

import Text from '../components/Text';
import SkillTagList from '../components/SkillTagList';
import {
  PostAuthor as Author,
  PostAuthorSkeleton as AuthorSkeleton,
} from '../components/PostAuthor';
import {getArticleDetail} from '../actions/articleAction';

function DetailScreen(props) {
  const {navigation, articleDetail, route, article} = props;
  const {description, name, owner = {}} = article;
  const {avatar_url, login} = owner;
  useEffect(() => {
    articleDetail(route.params.index);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={{paddingHorizontal: 20, paddingTop: 10}}>
          <Text size={18} style={styles.articleTitle}>
            {name}
          </Text>
          <Image
            style={styles.postImage}
            source={require('../assets/images/project-photo.png')}
          />
          <SkillTagList
            tagList={['Javascript', 'HTML', 'NodeJs', 'Chromium', 'Desktop']}
          />
          <Author
            containerStyle={{
              marginHorizontal: -10,
              marginVertical: 10,
            }}
            name={login}
            avatar_url={avatar_url}
          />
          <View>
            <Text weight="Regular" size={16} style={styles.articleParagraph}>
              {description}.
            </Text>
            <Text weight="Regular" size={16} style={styles.articleParagraph}>
              from there is just a dummy text
            </Text>
            <Text weight="Regular" size={16} style={styles.articleParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
              auctor ante. Phasellus semper, diam vel consectetur venenatis, dui
              urna elementum libero, in malesuada turpis turpis vel turpis.
              Aenean sagittis auctor tellus id eleifend. Aenean tincidunt
              sollicitudin ipsum, ullamcorper feugiat nisi congue non. Nam
              maximus faucibus urna. Fusce scelerisque justo non diam interdum
              rhoncus. Fusce consectetur erat vel metus tincidunt, a pretium
              metus porttitor. Morbi semper nisi quis erat commodo pulvinar.
              Praesent id suscipit ex. Maecenas finibus vulputate eros et
              mattis. Aenean pretium ornare massa. Duis nec sem mauris. Proin
              pharetra pharetra tellus in ornare. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Proin id auctor ante. Phasellus
              semper, diam vel consectetur venenatis, dui urna elementum libero,
              in malesuada turpis turpis vel turpis. Aenean sagittis auctor
              tellus id eleifend. Aenean tincidunt sollicitudin ipsum,
              ullamcorper feugiat nisi congue non. Nam maximus faucibus urna.
              Fusce scelerisque justo non diam interdum rhoncus. Fusce
              consectetur erat vel metus tincidunt, a pretium metus porttitor.
              Morbi semper nisi quis erat commodo pulvinar. Praesent id suscipit
              ex. Maecenas finibus vulputate eros et mattis. Aenean pretium
              ornare massa. Duis nec sem mauris. Proin pharetra pharetra tellus
              in ornare.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const mapsStateToProps = state => ({
  article: state.articleReducer.articleDetail,
});
const mapDispatchToProps = dispatch => ({
  articleDetail: index => dispatch(getArticleDetail(index)),
});
export default connect(
  mapsStateToProps,
  mapDispatchToProps,
)(DetailScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    position: 'relative',
  },
  scrollContainer: {
    paddingTop: 10,
  },
  articleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 10,
  },
  articleParagraph: {
    marginBottom: 10,
    textAlign: 'justify',
    textTransform: 'capitalize',
  },
  listFooter: {
    marginTop: 70,
  },
});
