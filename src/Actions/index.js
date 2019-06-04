export const changePage = (value) => {
    return {
        type: 'CHANGE_PAGE',
        payload: value
    };
};

export const addSamples = () => {
    let time = new Date().toString();
    let index = time.indexOf(":")+6;
    let date = time.slice(0,index);
    return {
        type: 'ADD_SAMPLES',
        date: date
    }
}

export const addComment = (value, date) => {
    return {
        type: 'ADD_COMMENT',
        content: value,
        date: date
    };
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

export const makeDetail = (value) => {
    return {
        type: 'MAKE_DETAIL',
        payload: value
    }
}

export const deletePost = (index) => {
    return {
        type: 'DELETE_POST',
        payload: index
    }
}