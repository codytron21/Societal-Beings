import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/posts/3.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="assets/persons/1.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="ProfileInfoName"> My name</h4>
              <span className="profileInfoDesc">Hello Friends.</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar Profile />
          </div>
        </div>
      </div>
    </>
  );
}
