import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Jerry </b> and <b> 3 other friends</b> have birthday today.
          </span>
        </div>
        <img src="/assets/Ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarfriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/persons/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Fugga</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
