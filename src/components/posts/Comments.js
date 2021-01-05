import React from 'react';
import '../../Styles/Comments.css'
import Comment from "./Comment";
import PropTypes from 'prop-types'

const Comments = (props) =>{
    return (
        <div>
            <div className="write-comment">
                <form action="">
                    <textarea placeholder={"Write a comment here..."} value={props.writtenComment} onChange={props.onChangeHandler}/>
                    <div className="text-right">
                        <button className="btn btn-secondary">submit</button>
                    </div>
                </form>
            </div>
            <div className="comments mt-4">
                <ul><Comment/> </ul>
            </div>
        </div>
    )
}

Comments.propTypes = {
    writtenComment: PropTypes.string,
    onChangeHandler: PropTypes.func
}

export default Comments;
