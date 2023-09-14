import "./ProductDetail.css";
import ProductDetailMain from "./ProductDetailMain";
import ProductDetailNav from "./ProductDetailNav";
import FeaturedHome from "./FeaturedHome";
import UserReviewSwiper from "./UserReviewSwiper";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const params = useParams();
  const slug = params.productSlug;
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [product, setProduct] = useState(null);
  const getProduct = async () => {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/products/${slug}`,
    });
    setProduct(response.data);
  };

  useEffect(() => {
    getProduct();
  }, [slug]);

  const firstExample = {
    size: 30,
    value: 2.5,
    edit: false,
  };

  return (
    <>
      {product && (
        <>
          <ProductDetailNav />
          <ProductDetailMain product={product} />
          <FeaturedHome />
          <div className="mb-5">
            <UserReviewSwiper />
          </div>
        </>
      )}
    </>
  );
}

export default ProductDetail;
