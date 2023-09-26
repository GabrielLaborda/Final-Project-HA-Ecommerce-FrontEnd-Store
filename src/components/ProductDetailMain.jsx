import ReactStars from 'react-rating-stars-component';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Quantity from './Quantity';

function ProductDetailMain({ product }) {
  const storageURL = import.meta.env.VITE_API_SUPABASE_URL;
  const firstExample = {
    size: 30,
    value: 4.5,
    isHalf: true,
    edit: true,
  };
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const productImgs = product.picture.map((img, index) => {
    return {
      original: `${storageURL}/${img}`,
      thumbnail: `${storageURL}/${img}`,
    };
  });
  const images = [...productImgs];

  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-sm-12 col-lg-7">
          <div>
            <ImageGallery items={images} showPlayButton={false} thumbnailPosition="left" />
          </div>
        </div>
        <div className="col-sm-12 col-lg-5">
          <h3>{product.name}</h3>
          <div className="d-flex align-items-end starsDiv">
            <ReactStars {...firstExample} />
            <p className="mb-2">8 Reviews</p>
          </div>
          <h4>USD {product.price}</h4>
          <Quantity product={product} />
          <div className="mt-3">
            {product.description.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailMain;
