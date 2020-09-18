import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video url="http://www.exit109.com/~dnn/clips/RW20seconds_2.mp4" />
        <Video url="http://www.exit109.com/~dnn/clips/RW20seconds_2.mp4" />
        <Video url="http://www.exit109.com/~dnn/clips/RW20seconds_2.mp4" />
      </div>
      {/* <video /> */}
    </div>
  );
}

export default App;
