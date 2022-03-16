const remoteURL = "http://localhost:8088"

export const getPostById = (postId) => {
    return fetch(`${remoteURL}/${postId}?_expand=user`)
    .then(res => res.jsopn())
}

export const getAllPosts = () => {
    return fetch(`${remoteURL}/`)
    .then(res => res.json())
  }
  
  export const deletePost = (id) => {
    return fetch(`${remoteURL}/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
  
  export const addPost = (newPost) => {
    return fetch(`${remoteURL}/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    }).then(response => response.json())
  }
