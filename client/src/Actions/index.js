const axios = require('axios');
const port = process.env.PORT;

export const changePage = (value) => {
    return {
        type: 'CHANGE_PAGE',
        payload: value
    };
};

function getServerResult(url) {
    return axios.get(url).then(response => {
      return response.data;
    })
}

function addPostToServer(date, value) {
    return axios.post(port+'/posts', {
        date: date,
        content: value
    }).then(response => {
        return response.data;
    })
}

export const addComment = (value, date) => {
    return dispatch => {
        dispatch({type:'LOADING_POSTS'})
        if (value !== '') {
            addPostToServer(date, value).then(function () {
                getServerResult(port+'/posts').then(function (posts) {
                    dispatch({
                        type: 'UPDATE_POSTS',
                        posts: posts
                    })
                })
            })
        }
    }
};

export const updateTextArea = (text) => {
    return {
        type: 'FORM_UPDATE',
        payload: text
    }
}

export const clearForm = () => {
    return {
        type: 'CLEAR_FORM'
    }
}

export const makeDetail = (index) => {
    return dispatch => {
        dispatch({type:'LOADING_POSTS'})
        getServerResult(port+'/posts/'+index).then(function (post) {
            dispatch({
                type:'MAKE_DETAIL',
                payload: post
            })
        })
    }
}

function serverDelete(id) {
    return axios.delete(port+'/posts/'+id).then(response => {
        return response.data;
    })
}

export const deletePost = (index) => {
    return dispatch => {
        dispatch({type:'LOADING_POSTS'})
        serverDelete(index).then(function () {
            getServerResult(port+'/posts').then(function (posts) {
                dispatch({
                    type: 'UPDATE_POSTS',
                    posts: posts
                })
            })
        })
    }
}

export const updatePost = () => {
    return dispatch => {
        dispatch({type:'LOADING_POSTS'});
        getServerResult(port+'/posts').then(posts => {
            dispatch({
                type: 'UPDATE_POSTS',
                posts: posts
            })
        })
    }
}