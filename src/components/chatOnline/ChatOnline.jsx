import "./chatOnline.css";

export default function chatOnline() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img src={`${PF}/persons/1.jpeg`} alt="" className="chatOnlineImg" />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">rohan</span>
      </div>
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img src={`${PF}/persons/1.jpeg`} alt="" className="chatOnlineImg" />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">rohan</span>
      </div>
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img src={`${PF}/persons/1.jpeg`} alt="" className="chatOnlineImg" />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">rohan</span>
      </div>
    </div>
  );
}
