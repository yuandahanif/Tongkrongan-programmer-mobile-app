import {GET_ARTICLE, GET_ARTICLE_DETAIL, GET_USER } from '../actions/Types';
const initialState = {
    articleData: [],
    articleDetail: {},
    user: {},
}

export const articleReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_ARTICLE:
            // !FETCH API nya di action
            const {items} = action.payload;
            const articleData = state.articleData.concat(items);
            return {...state, articleData}
        case GET_ARTICLE_DETAIL:
            const {index} = action.payload;
            const articleDetail = state.articleData[index];
            return {...state, articleDetail}
        case GET_USER:
            const {indexUser} = action.payload;
            const artileAuthor = state.artileAuthor[indexUser].owner;
            return {...state, artileAuthor}
        default:
            return state;
    }
} 