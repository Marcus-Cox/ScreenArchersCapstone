import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Posts } from '/home/marcus/workspace/screenarchers/src/components/posts/Posts.js';
import { getAllPosts, getPostById, deletePost } from '/home/marcus/workspace/screenarchers/src/modules/PostsManager.js';

export const PostList = () => {
    // The initial state is an empty array
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
                onClick={() => {navigate("/create")}}>
                New Post
            </button>
          </section>
          <div className="container-cards">
            {posts.map(post =>
              <Posts 
              key={post.id} 
              post={post}
              handleDeletePost={handleDeletePost} />
            )}
          </div>
        </>
      );
    };