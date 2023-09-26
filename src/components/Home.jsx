import React from 'react';
import FeaturedHome from './FeaturedHome';
import CategoryHome from './CategoryHome';
import AboutHome from './AboutHome';
import VideoHome from './VideoHome';

function Home() {
  return (
    <>
      <VideoHome />
      <FeaturedHome />
      <CategoryHome />
      <AboutHome />
    </>
  );
}

export default Home;
