import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { AuthContext } from "../../context/AuthContext";
import { useState, useEffect, useContext } from "react";
import { axiosInstance } from "../../config";
export default function Feed({ username }) {
  const [posts, setPosts] = useState([]); //initial state will be empty array.
  const { user } = useContext(AuthContext);

  //to render the feed:
  //we can not use async with arrow function of useEffect so we create a function inside and apply async.
  // if we dont use async and await,it will return promises instead of data.
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axiosInstance.get("/posts/profile/" + username)
        : await axiosInstance.get("/posts/timeline/" + user._id); //it will return a object as response,so storing it in res... this object contain our data as key "data" so we access data by ("(the returned object).data") res.data.
      // setPosts(res.data); this gives post in unsorted way.
      // sorting posts according to latest posts.
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]); //here giving empty array, acts as dependecy - useEffect runs only once when feed renderes.

  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* if username in the params is equal to current username than show "share" component. */}
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
