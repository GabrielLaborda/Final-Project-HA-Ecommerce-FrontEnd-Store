import "./ProductDetail.css";
import OtherProducts from "./OtherProducts";
import ProductDetailMain from "./ProductDetailMain";
import ProductDetailNav from "./ProductDetailNav";
import UserReview from "./UserReview";

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
        <OtherProducts/>
        <UserReview/>
        <UserReview/>
        <UserReview/>
        <UserReview/>
    </div>
  );
}

export default ProductDetail;
