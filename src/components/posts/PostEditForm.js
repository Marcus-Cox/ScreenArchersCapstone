import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import { getPostById, updatePost } from "../../modules/PostsManager";

export const PostEditForm = () => {
  const [post, setPost] = useState({
    title:"",
  imageurl:"",
  capturetools: "",
  editingtools: "",
  ismooded: "",
  comments: "",
  category: "",
  dateTime: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {postId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...post };
    stateToChange[evt.target.id] = evt.target.value;
    setPost(stateToChange);
  };

  const updateExistingPost = evt => {
    evt.preventDefault()
    setIsLoading(true);
    
    const editedPost = {
      id: postId,
      title: post.title,
      imageurl: post.imageurl,
      capturetools: post.capturetools,
      editingtools: post.editingtools,
      ismooded: post.ismooded,
      comments: post.comments,
      category: post.category,
    };

  updatePost(editedPost)
    .then(() => navigate("/posts")
    )
  }

  useEffect(() => {
    getPostById(postId)
      .then(post => {
        setPost(post);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">

        <label htmlFor="title">Post Title:</label>
        <input type="text"
        className="form-control"
        onChange={handleFieldChange}
        required autoFocus
        id="title"
        placeholder="Update title here"
        value={post.title} />

  <label htmlFor="imageurl">Image Source:</label>
    <input
        type="text"
        required
        className="form-control"
        onChange={handleFieldChange}
        id="imageurl"
        value={post.imageurl} />
  
<label htmlFor="capturetools">Image Capture Tools:</label>
        <input
        type="text"
        required
        className="form-control"
        onChange={handleFieldChange}
        id="capturetools"
        value={post.capturetools}
        />

<label htmlFor="editingtools">Editing Tools:</label>
        <input
        type="text"
        required
        className="form-control"
        onChange={handleFieldChange}
        id="editingtools"
        value={post.editingtools}
        />

<label htmlFor="ismooded">Any Mods?:</label>
        <input
        type="text"
        required
        className="form-control"
        onChange={handleFieldChange}
        id="ismooded"
        value={post.ismooded}
        />

<label htmlFor="comments">Comments:</label>
        <input
        type="text"
        required
        className="form-control"
        onChange={handleFieldChange}
        id="comments"
        value={post.comments}
        />

<label htmlFor="comments">Category(Last):</label>
        <input
        type="text"
        required
        className="form-control"
        onChange={handleFieldChange}
        id="category"
        value={post.category}
        />
        
          </div>

          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingPost}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}