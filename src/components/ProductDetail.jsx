import "./ProductDetail.css";
import ProductDetailMain from "./ProductDetailMain";
import ProductDetailNav from "./ProductDetailNav";
import FeaturedHome from "./FeaturedHome";
import UserReviewSwiper from "./UserReviewSwiper";

function ProductDetail() {

    const firstExample = {
        size: 30,
        value: 2.5,
        edit: false
      };

  return (
    <div>
        <ProductDetailNav/>
        <ProductDetailMain/>
        <FeaturedHome/>
        <div className="mb-5">
          <UserReviewSwiper/>
        </div>
    </div>
  );
}

export default ProductDetail;
