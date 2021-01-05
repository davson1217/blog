import React from 'react'
import PostCardPreview from "./PostPreviewCard";
import PostCard from "./PostCard";

const Posts = ({ posts }) =>{

    return (
        <div>
            { posts && posts.map((post,index)=> <PostCard type={'preview'} post={post} key={index}/> )}
        </div>
    )
}

export default  Posts;
