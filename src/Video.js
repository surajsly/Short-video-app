import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    //if video is planing stop it....
    //if its not planing play it .....
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src={url}
      ></video>

      <VideoFooter
        channel="surajsingh"
        description="clone"
        song="this is a song"
      />
      <VideoSidebar likes={101} shares={222} messages={333} />
      {/*video sideBar */}
    </div>
  );
}

export default Video;
