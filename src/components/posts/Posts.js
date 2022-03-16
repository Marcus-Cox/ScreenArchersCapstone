import React from "react"

export const Posts = ({ post, handleDeletePost }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h1>Title: <span className="card-posttitle">
          {post.title}
        </span></h1>
        <h2>Posted by: {post.user.name}</h2>
        <p>Image: {post.imageurl}</p>
        <p>capturetools: {post.capturetools}</p>
        <p>editingtools: {post.editingtools}</p>
        <p>ismooded: {post.ismooded}</p>
        <p>comments: {post.comments}</p>
        <p>category: {post.category}</p>
        <p>Timestamp: {post.dateTime}</p>
        <button type="button" onClick={() => handleDeletePost(post.id)}>Delete post</button>
      </div>
    </div>
  );
}