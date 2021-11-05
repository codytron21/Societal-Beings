import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { useContext, useRef, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const { user } = useContext(AuthContext);
  // useEffect(() => {
  //   () => {};
  // }, [input]);
  const [file, setFile] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    //if there is file we will first upload data to our storage,then post it.
    if (file) {
      const data = new FormData();
      //to avoid conflict in due to same name of files by different user
      // we add some date related number in the filenames so each file stay unique in its name.
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "persons/noAvatar.png"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            placeholder={"What's up " + user.username + " ?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or video</span>

              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                // {/* we want to allow only one file at a time so we are using" files[0]" for multiple file we use only  "files" */}
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
