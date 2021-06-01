import React from 'react';
import './post.styles.css';
import Location from '../../components/Location/location.component';
const Post = () => {
    return(
    <div className="post">
        <Location/>
        <button className="btn" >Check Story</button>
    </div>
)}

export default Post;