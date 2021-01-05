import Blogs from './TemporaryBlogPosts'
const initialState = {
    posts: [],
    post: {},
    writtenComment:'',
    temporary : Blogs
}

const PostsReducer = (state = initialState, action) => {

    switch (action.type) {
        case "MODE":
            return{
                ...state,
                darkMode:!state.darkMode
            }

        case "FETCHED_POSTS":
            return{
                ...state,
                posts: action.posts
            }

        case "FETCHED_POST":
            return{
                ...state,
                post: action.post
            }

        case "WRITTEN_COMMENT":
            return{
                ...state,
                writtenComment: action.comment
            }

        case "VIEWED_BLOG":

            return{
                ...state,

        }

        default: return state;
    }
}

export default PostsReducer;
