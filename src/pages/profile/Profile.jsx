import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username; //we have passed username as params in app.js for calling profile
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`); //it will return a object as response,so storing it in res... this object contain our data as key "data" so we access data by ("(the returned object).data") res.data.
      setUser(res.data);
    };
    fetchUser();
  }, [username]); // we passing username as dependency as it is changeable.
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "persons/nocover.png"
                }
                alt=""
                className="profileCoverImg"
              />
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "persons/noAvatar.png"
                }
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="ProfileInfoName"> {user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
