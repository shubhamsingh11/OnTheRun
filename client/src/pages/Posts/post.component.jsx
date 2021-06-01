import React from 'react';
import './post.styles.css';
import Location from '../../components/Location/location.component';
import Button from "../../components/button/button.component";
const Post = () => {
    return(
    <div className="post">
        <Location/>
        <Button/>
    </div>
)}

export default Post;