import { combineReducers } from 'redux';

const samples = [
    {content: "Hello World"},
    {content: "Sup"}
];

const modifyPosts = (posts = [], action) => {
    if (action.content !== ''){
        if (action.type === 'ADD_COMMENT') {
            let p = {
                content: action.content,
                date: action.date
            };
            let newPosts = posts.slice();
            newPosts.splice(posts.length, 0, p);
            return newPosts;

        } else if (action.type === 'ADD_SAMPLES') {
            let newPosts = posts.slice();
            samples.forEach(
                function (m) {
                    m.date = action.date;
                    newPosts.splice(newPosts.length, 0, m);
                }
            )
            return newPosts; 
        }
    }
    if (action.type === 'DELETE_POST') {
        let newPosts = posts.slice();
        newPosts.splice(action.payload, 1);
        return newPosts;
    }
    return posts;
}

const formUpdate = (text = '', action) => {
    if (action.type === 'FORM_UPDATE') {
        return action.payload;
    } 
    else if (action.type === 'CLEAR_FORM') {
        return '';
    }
    return text;
}

const changePage = (page = 'body', action) => {
    if (action.type === 'CHANGE_PAGE') {
        return action.payload;
    }
    return page;
}

const makeDetail = (post = {}, action) => {
    if (action.type === 'MAKE_DETAIL') {
        return action.payload;
    }
    return post;
}

export default combineReducers (
    {
        comments: modifyPosts,
        text: formUpdate,
        page: changePage,
        detail: makeDetail
    }
);