const remoteURL = "http://localhost:8088"

export const getPostById = (postId) => {
    return fetch(`${remoteURL}/posts/${postId}`)
    .then(res => res.json())
}

export const updatePost = (editedPost) => {
    return fetch(`${remoteURL}/posts/${editedPost.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedPost)
    }).then(data => data.json());
  }

export const getAllPosts = () => {
    return fetch(`${remoteURL}/posts`)
    .then(res => res.json())
  }
  
  export const deletePost = (id) => {
    return fetch(`${remoteURL}/posts/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
  
  export const addPost = (newPost) => {
    return fetch(`${remoteURL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    }).then(response => response.json())
  }
