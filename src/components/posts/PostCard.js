import React from 'react';
import ImageGallery from "react-image-gallery";
import './../../Styles/PostCard.css'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import Comments from "./Comments";
import * as PostActions from "../../redux/actions/PostActions";
import PropTypes from 'prop-types'

const PostCard = (props) =>{
    // console.log(props.post)
    let card;
    const theme = localStorage.getItem('theme')//props.darkMode ? 'dark' : 'light';
    const classes = `card ${theme}`

    let images = props.post.hasImage ? <ImageGallery items={props.post.images} showPlayButton={false} showFullscreenButton={false}/> : null;

    if (props.type === 'preview'){
      card = (
          <div className={classes}>
              <div className="card-body">
                  <small>{props.post.date}</small>
                  <h4 className="card-title">{props.post.title}</h4>
                  <p className="card-text">{props.post.preview.substring(0, 200)}...</p>
                  <NavLink to={`/blog/${props.post.id}`} className="card-link">Continue reading...</NavLink>
                  <div className="post-media mt-2">  {images} </div>
                  <hr/>

                  <div>
                      <img src={"view.svg"} alt="views" width={25}/> <span>{props.post.views}</span>
                  </div>
              </div>
          </div>
      )
    }
    else {
        card = (
            <div className={"container"}>
                <div className={classes}>
                    <div className="card-body">
                        <small>20/07/2021</small>
                        {/*<small>Norway</small>*/}
                        <h4 className="card-title">{props.post.title}</h4>
                        <p className="card-text">{props.post.body}</p>
                        <div className="post-media mt-2">  {images} </div>
                        <hr/>
                        <div>
                            <img src={"/view.svg"} alt="views" width={25}/> <span>{props.post.views}</span>
                        </div>
                        {/*
                            <h6 className="text-muted">Comments</h6>
                            <Comments writtenComment={props.PostStore.writtenComment} onChangeHandler={e=>props.commentWrite(e)}/>
                        */}
                    </div>
                </div>

            </div>
        )
    }
    return card
}


PostCard.propTypes = {
    post : PropTypes.object
}

const MapState = state =>{
    return {
       darkMode : state.Page.darkMode,
       PostStore : state.PostReducer
    }
}

const MapDispatch = dispatch =>{
    return {
        commentWrite : (event) => dispatch(PostActions.CommentInputHandler(event.target.value))
    }
}

export default connect(MapState,MapDispatch)(PostCard);
