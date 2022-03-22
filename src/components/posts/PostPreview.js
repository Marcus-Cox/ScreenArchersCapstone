import React from "react"
import { Link } from "react-router-dom";

export const PostPreview = ({ post }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>{post.title} <span className="card-postpreviewtitle"></span></h3>
                    <Link to={`/posts/${post.id}`}>
                        <div>Here should be a thumbnail of the post</div>
                    <button>Post Details</button>
                    </Link>
                    <Link to={`/posts/${post.id}/edit`}>
                        <button>Edit</button>
                    </Link>
            </div>
        </div>
            
    )
}