import { useState, useEffect } from 'react';

let base_url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1e99ea087bdb4ab38f184cb675d02834";



export const Func = () => {
   const [posts, setPosts] = useState([]);
  let count = 0;

  useEffect(() => {
      fetch(`${base_url}`)
          .then(response => response.json())
          .then(data => {
              const postArray = Object.values(data);
              setPosts(postArray[2]);

          })
          .catch(err => console.log(err))
  }, []);

// console.log(posts);


  return (
      <div className="posts-container">
          {posts.map((post) => {
              return (
                  <div className="post-card" key={++count}>
                      <h2 className="post-title">{post?.title ?? "missing"}</h2>
                      
                      <p className="post-body">author: {post?.author ?? "missing"}</p>
                      <div className="button">
                      </div>
                  </div>
              );
          })}
      </div>
  );

}






const AllPosts = () => {
  return (
    <div className="allPosts">
      <h2>Find the one you want to continue reading:</h2>
      <Func/>
      </div>
  )
}

export default AllPosts;