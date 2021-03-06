import { axiosInstance } from "../../config.js";
import { useState, useEffect } from "react";
import "./chatOnline.css";

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  useEffect(() => {
    const getFriends = async () => {
      const res = await axiosInstance.get("/users/friends/" + currentId);
      setFriends(res.data);
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const handleClick = async (user) => {
    try {
      const res = await axiosInstance.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="chatOnline">
      {onlineFriends.map((o, k) => (
        <div
          className="chatOnlineFriend"
          key={k}
          onClick={() => handleClick(o)}
        >
          <div className="chatOnlineImgContainer">
            <img
              src={
                o?.profilePicture
                  ? PF + o.profilePicture
                  : PF + "persons/noAvatar.png"
              }
              alt=""
              className="chatOnlineImg"
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o?.username}</span>
        </div>
      ))}
    </div>
  );
}
