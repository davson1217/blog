import React,{useEffect} from 'react';
import '../../Styles/PostCard.css'
import {connect} from "react-redux";
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types'
import "react-image-gallery/styles/css/image-gallery.css";
import {NavLink} from "react-router-dom";

const PostCardPreview = ({theme,post}) => {

    useEffect(()=>{
        // console.log(post)
    },[])

    const classes = `card ${theme}`;
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    return (
            <div className={classes}>
                <div className="card-body">
                    <h4 className="card-title">{post.title}</h4>
                    <p className="card-text">{post.body.substring(0, 500)}...</p>
                    <div className="post-media">
                        {/*<ImageGallery items={images} />*/}
                    </div>
                        <NavLink to={`/blog/${post.id}`} className="card-link">Continue reading...</NavLink>
                    <hr/>
                    <div>
                        <img src={"view.svg"} alt="views" width={25}/> <span>{post.id * Math.floor(Math.random() * (10 - 1) ) + 1}</span>
                    </div>
                </div>
            </div>
    )
}

PostCardPreview.propTypes = {
    theme: PropTypes.string,
    // post: PropTypes.object,
    // FetchPosts: PropTypes.func,
}

const MapDispatch = dispatch =>{
    return {
        //FetchPosts : () => dispatch(Actions.FetchPosts()),
    }
}

export default connect(null, MapDispatch)(PostCardPreview);
