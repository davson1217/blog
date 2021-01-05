import React, {useEffect} from 'react';
import Navigation from "./Navigation";
import Posts from "./posts/Posts";
import * as PostActions from "../redux/actions/PostActions";
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

const Blog = (props) =>{

    useEffect(()=>{
        setTimeout(props.FetchPosts,200)
    },[])
    const theme = props.Page.darkMode ? 'dark' : 'light';
    return (
            <div className="container page">
                <Posts posts={props.StaticPosts} theme={theme}/>
            </div>
    )
}

const MapState = state =>{
    return {
        Page : state.Page,
        Posts : state.PostReducer.posts,
        StaticPosts : state.PostReducer.temporary //Array of static posts. Used in lieu of a DB #Temporary
    }
}

const MapDispatch = dispatch =>{
    return {
        FetchPosts : () => dispatch(PostActions.FetchPosts()),
    }
}

export default connect(MapState,MapDispatch)(withRouter(Blog));
