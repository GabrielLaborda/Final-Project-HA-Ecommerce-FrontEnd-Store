import React from "react";
import CarouselHome from "./CarouselHome";
import FeaturedHome from "./FeaturedHome";
import Footer from "./Footer";
import CategoryHome from "./CategoryHome";
import NavbarCart from "./NavbarCart";
function Home() {
  return (
    <>
      <NavbarCart />
      <CarouselHome />
      <FeaturedHome />
      <CategoryHome />
      <Footer />
    </>
  );
}

export default Home;
