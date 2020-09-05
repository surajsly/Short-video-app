import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
      </div>
      {/* <video /> */}
    </div>
  );
}

export default App;
