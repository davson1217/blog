import React, {useEffect} from 'react'
import {withRouter} from "react-router-dom";
import '../../Styles/PostCard.css';
import * as PostActions from '../../redux/actions/PostActions';
import {connect} from "react-redux";
// import ImageGallery from "react-image-gallery";
import PostCard from "./PostCard";

const Post = (props) =>{
    const postId = parseInt(props.match.params.id);
    useEffect(()=>{
        props.FetchPost(postId)
    },[])

    //select post to view from array of static posts
    let tempPost =  props.StaticPosts.filter((post)=>post.id === postId);

    return (
       <div className={"container"}>

           <button className="m-2 btn btn-secondary" onClick={props.history.goBack}>Go back</button>
           {
               props.Post ? <PostCard type={'view'} post={tempPost[0]}/> : <p>loading...</p>
           }
       </div>
    )
}

const MapState = state => {
    return {
        Post : state.PostReducer.post, //post to read
        Theme : state.Page.darkMode,
        StaticPosts : state.PostReducer.temporary //Array of static posts. Used in lieu of a DB #Temporary
    }
}

const MapDispatch = dispatch =>{
    return {
        FetchPost : (id) => dispatch(PostActions.FetchPost(id))
    }
}

export default connect(MapState, MapDispatch)(withRouter(Post));
