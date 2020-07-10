import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';

import Text from '../components/Text';
import SkillTagList from '../components/SkillTagList';
import {
  PostAuthor as Author,
  PostAuthorSkeleton as AuthorSkeleton,
} from '../components/PostAuthor';

import gitApiData from '../data/githubApi.json';
import {
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

export default function SkillScreen(props) {
  const DEVICE = Dimensions.get('window');
  const [data, setData] = useState([]);
  const {navigation} = props;

  async function getGithubRepo() {
    try {
      let RNG = Math.round(Math.random() * 50);
      let repos = await fetch(
        `https://api.github.com/repositories?since=${RNG.toString()}`,
      );
      repos = await repos.json();
      let languages = await fetch(repos.languages_url);
      languages.languages = await languages.json();
      setData(repos);
    } catch (err) {
      console.warn(err);
      setData(gitApiData); //offline data
    }
  }

  //   useEffect(() => {
  //     getGithubRepo();
  //   }, []);
  const goBack = () => {
        navigation.goBack();
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity
          onPress={() => goBack()}>
            <Icon name="chevron-left" size={28} />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 20, paddingTop: 10}}>
          <Text size={18} style={styles.articleTitle}>
            website pemantauan data COVID-19 & web portofolio
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
            name="yuanda"
            avatar_url="https://avatars2.githubusercontent.com/u/128?v=4"
          />
          <View>
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
              pharetra pharetra tellus in ornare.
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
              pharetra pharetra tellus in ornare.
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
              pharetra pharetra tellus in ornare.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // backgroundColor: 'cyan',
  },
  top: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    justifyContent: 'flex-end',
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
