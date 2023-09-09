import React from "react";
import CarouselHome from "./CarouselHome";
import FeaturesHome from "./FeaturesHome";
import Footer from "./Footer";
import CategoryHome from "./CategoryHome";
import NavbarCart from "./NavbarCart";
function Home() {
  return (
    <>
      <NavbarCart />
      <CarouselHome />
      <FeaturesHome />
      <CategoryHome />
      <Footer />
    </>
  );
}

export default Home;
