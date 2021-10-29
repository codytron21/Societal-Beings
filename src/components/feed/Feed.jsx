import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Feed() {
  const [posts, setPosts] = useState([]); //initial state will be empty array.

  //to render the feed:
  //we can not use async with arrow function of useEffect so we create a function inside and apply async.
  // if we dont use async and await,it will return promises instead of data.
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/616baf484afebd3fee06ac44"); //it will return a object as response,so storing it in res... this object contain our data as key "data" so we access data by ("(the returned object).data") res.data.
      setPosts(res.data);
    };
    fetchPosts();
  }, []); //here giving empty array, acts as dependecy - useEffect runs only once when feed renderes.

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
