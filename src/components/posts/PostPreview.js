import React from "react"
import { Link } from "react-router-dom";
export const PostPreview = ({ post }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>{post.title} <span className="card-postpreviewtitle"></span></h3>
                <Link to={`/posts/${post.id}`}>
                    <img className="post-preview" src={post.imageurl} />
                    <button className="btn">Post Details</button>
                </Link>
                <Link to={`/posts/${post.id}/edit`}>

                    <button className="btn">Edit</button>

                </Link>
            </div>
        </div>

    )
}