import React from "react";
import CarouselHome from "./CarouselHome";
import FeaturesHome from "./FeaturesHome";
import Footer from "./Footer";
import CategoryHome from "./CategoryHome";
import VideoHome from "./VideoHome";
function Home() {
  return (
    <>
      <NavbarCart />
      <CarouselHome />
      <FeaturesHome />
      <CategoryHome />
    </>
  );
}

export default Home;
