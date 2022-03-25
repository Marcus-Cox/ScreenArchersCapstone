import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { getPostById, deletePost, } from "/home/marcus/workspace/screenarchers/src/modules/PostsManager.js";
export const Posts = () => {
  const [post, setPost] = useState({
    name: "",
    title: "",
    imageurl: "",
    capturetools: "",
    editingtools: "",
    ismooded: "",
    comments: "",
    category: "",
    dateTime: ""
  });
  const [isLoading, setIsLoading] = useState(true);

  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect", postId)
    getPostById(postId)
      .then(post => {
        setPost(post);
        setIsLoading(false);
      });
  }, [postId]);

  const handleDelete = () => {
    setIsLoading(true);
    deletePost(postId).then(() =>
      navigate("/posts")
    );
  }
  return (
    <div className="card">
      <div className="card-content">
        <h1>Title: <span className="card-posttitle">
          {post.title}
        </span></h1>
        <h2 className="post_username">Posted by: {post.user?.name}</h2>
        <div>Image:
          <img className="post-actual" src={post.imageurl} />
        </div>
        <p>Capturetools: {post.capturetools}</p>
        <p>Editingtools: {post.editingtools}</p>
        <p>Ismooded: {post.ismooded}</p>
        <p>Comments: {post.comments}</p>
        <p>Category: {post.category}</p>
        <p>Timestamp: {post.dateTime}</p>
        <button type="button" disabled={isLoading} onClick={() => handleDelete(post.id)}>Delete post</button>
      </div>
    </div>
  );
}