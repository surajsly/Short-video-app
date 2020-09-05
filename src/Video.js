import React from "react";
import "./Video.css";
function Video() {
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        src="http://www.exit109.com/~dnn/clips/RW20seconds_2.mp4"
      ></video>

      {/*video footer*/}
      {/*video sideBar */}
    </div>
  );
}

export default Video;
