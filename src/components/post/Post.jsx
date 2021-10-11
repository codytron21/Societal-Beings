import "./post.css";
import { MoreVert } from "@material-ui/icons";
export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/persons/2.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Rohan Roy</span>
            <div className="postDate">5 min ago</div>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Its my first text.</span>
          <img src="/assets/posts/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="likeCounter">430 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">1k Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
