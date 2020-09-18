import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

const VideoFooter = () => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@surajsly</h3>
        <p>this is some text</p>
        <div classname="VideoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;
