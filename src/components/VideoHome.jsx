import React from "react";
import "./Video.css";

function VideoHome() {
  return (
    <>
      <div className="container-banner ">
        <video autoPlay loop playsInline muted className="videoBlock">
          <source src="./VideoHome/wheels2.mp4" />
        </video>
      </div>
    </>
  );
}

export default VideoHome;
