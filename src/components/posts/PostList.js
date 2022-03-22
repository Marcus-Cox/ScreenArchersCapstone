import React, { useState, useEffect } from 'react';
import { PostPreview } from './PostPreview';
import { getAllPosts, deletePost } from '/home/marcus/workspace/screenarchers/src/modules/PostsManager.js';
import { useNavigate } from 'react-router-dom';


export const PostList = () => {

    const [posts, setPosts] = useState([]);
  
    const navigate = useNavigate();
    const getPosts = () => {
        return getAllPosts().then(postsFromAPI => {
            setPosts(postsFromAPI)
        });
      };

      useEffect(() => {
        getPosts();
      }, []);

      const handleDeletePost = id => {
        deletePost(id)
        .then(() => getAllPosts().then(setPosts));
      };

      return(
        <>
          <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {navigate("/post/create")}}>
                New Post
            </button>
          </section>
          <div className="container-cards">
            {posts.map(post =>
              <PostPreview 
              key={post.id} 
              post={post}
              handleDeletePost={handleDeletePost} />
            )}
          </div>
        </>
      );
    };