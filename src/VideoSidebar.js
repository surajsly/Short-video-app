import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
function VideoSidebar({ likes, shares, messages }) {
  const [liked, setliked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontsize="large" onClick={(e) => setliked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontsize="large"
            onClick={(e) => setliked(true)}
          />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontsize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontsize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
