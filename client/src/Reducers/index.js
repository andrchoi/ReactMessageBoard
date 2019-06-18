import { combineReducers } from 'redux';

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

        }
    }
    if (action.type === 'UPDATE_POSTS') {
        let newPosts = action.posts;
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

const isLoading = (status = false, action) => {
    if (action.type === 'LOADING_POSTS') {
        status = true;
    } else {
        status = false;
    }
    return status;
}

export default combineReducers (
    {
        comments: modifyPosts,
        text: formUpdate,
        page: changePage,
        detail: makeDetail,
        status: isLoading
    }
);