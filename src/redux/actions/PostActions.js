
export const FetchPosts = () => {
    return async dispatch => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        dispatch({type:"FETCHED_POSTS",posts:data})
    }
}

export const FetchPost = id =>{
    return async dispatch =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.json();
        dispatch({type:"FETCHED_POST",post:data})
    }
}


/**  Comment Actions **/

export const CommentInputHandler = comment => {
    return dispatch => {
        dispatch({type:"WRITTEN_COMMENT", comment})
    }
}
