import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../modules/PostsManager';

export const PostForm = () => {
//things to change later: 'ismodded' to a boolean , change catagory into a drop down
	const [post, setPost] = useState({
		userId: 0,
        title:"",
        imageurl:"",
        capturetools: "",
        editingtools: "",
        ismooded: "",
        comments: "",
        category: "",
        dateTime: ""
	});

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
		
		const newPost = { ...post }

		let selectedVal = event.target.value
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}

		newPost[event.target.id] = selectedVal
		setPost(newPost)
	};

    const handleClickSavePost = (event) => {
        event.preventDefault() 
    
        const user = JSON.parse(sessionStorage.getItem("screenarcher_user"))
    
        const newPost = { ...post }
        newPost.userId = user.id
            newPost.dateTime = new Date().toLocaleString();
            addPost(newPost)
            .then(() => navigate("/"))
        }
//things to change later: 'ismodded' to a boolean , change catagory into a drop down

    return (
		<form className="postForm">
			<h2 className="postForm__title">New Post</h2>

			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Post Title:</label>
					<input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter title here" value={post.title} />
				</div>
			</fieldset>

            <fieldset>
				<div className="form-group">
					<label htmlFor="imageurl">Image Source:</label>
					<input type="text" id="imageurl" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter Image URL here" value={post.imageurl} />
				</div>
			</fieldset>

            <fieldset>
				<div className="form-group">
					<label htmlFor="capturetools">Image Capture Tools:</label>
					<input type="text" id="capturetools" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="How did you capture the Image?" value={post.capturetools} />
				</div>
			</fieldset>

            <fieldset>
				<div className="form-group">
					<label htmlFor="editingtools">URL:</label>
					<input type="text" id="editingtools" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="What did you use to edit the ScreenShot?" value={post.editingtools} />
				</div>
			</fieldset>

            <fieldset>
				<div className="form-group">
					<label htmlFor="ismooded">Any Mods?:</label>
					<input type="text" id="ismooded" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Use any Mods for the Screenshot?" value={post.ismooded} />
				</div>
			</fieldset>

            <fieldset>
				<div className="form-group">
					<label htmlFor="comments">Comments:</label>
					<input type="text" id="comments" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Put your thoughts and commentary on your ScreenShot here!" value={post.comments} />
				</div>
			</fieldset>

            <fieldset>
				<div className="form-group">
					<label htmlFor="category">Category:</label>
					<input type="text" id="category" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="What's the ~Vibe~ of this screenshot?" value={post.category} />
				</div>
			</fieldset>

            <button className="btn btn-primary"
				onClick={handleClickSavePost}>
				Save Post
          </button>
		</form>
	)
};

            