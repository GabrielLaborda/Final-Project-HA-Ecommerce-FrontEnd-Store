import React from "react";
import CarouselHome from "./CarouselHome";
import FeaturedHome from "./FeaturedHome";
import CategoryHome from "./CategoryHome";
import VideoHome from "./VideoHome";
function Home() {
  return (
    <>
      <VideoHome />
      {/* <CarouselHome /> */}
      <FeaturedHome />
      <CategoryHome />
    </>
  );
}

export default Home;
