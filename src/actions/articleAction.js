import {GET_ARTICLE, GET_ARTICLE_DETAIL} from '../actions/Types';
import offlineItems from '../data/githubApi.json';
export const getArticle = () => {
  return async dispatch => {
    try {
      let RNG = Math.round(Math.random() * 50);
      let repos = await fetch(
        `https://api.github.com/repositories?since=${RNG.toString()}`,
      );
      let items = await repos.json();
      dispatch(setArticle(items));
    } catch (err) {
      console.warn(err);
      dispatch(setArticle(offlineItems));
    }
  };
};
const setArticle = items => ({
  type: GET_ARTICLE,
  payload: {items},
});

export const getArticleDetail = index => {
  return dispatch => dispatch(detailDispatch(index));
};
const detailDispatch = (index) => ({
  type: GET_ARTICLE_DETAIL,
  payload: {index},
});
