import React from 'react';
import './Video.css';

function VideoHome() {
  const storageURL = import.meta.env.VITE_API_SUPABASE_URL;
  return (
    <>
      <div className="container-banner ">
        <video autoPlay loop playsInline muted className="videoBlock">
          <source src={`${storageURL}/wheels2.mp4`} />
        </video>
      </div>
      <div></div>
    </>
  );
}

export default VideoHome;
