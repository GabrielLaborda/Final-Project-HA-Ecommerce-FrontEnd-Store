import React from "react";
import CarouselHome from "./CarouselHome";
import FeaturedHome from "./FeaturedHome";
import CategoryHome from "./CategoryHome";
import AboutHome from "./AboutHome";
import VideoHome from "./VideoHome";
function Home() {
  return (
    <>
      <VideoHome />
      {/* <CarouselHome /> */}
      <FeaturedHome />
      <CategoryHome />
      <AboutHome />
    </>
  );
}

export default Home;
