import ReactStars from "react-rating-stars-component";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Quantity from "./Quantity";

function ProductDetailMain() {
  const firstExample = {
    size: 30,
    value: 4.5,
    isHalf: true,
    edit: true,
  };

  const images = [
    {
      original:
        "CASCADE-NINETY-FIVE_43c0200a-1b12-40fd-bc61-f240ae6ed229_2048x.webp",
      thumbnail:
        "CASCADE-NINETY-FIVE_43c0200a-1b12-40fd-bc61-f240ae6ed229_2048x.webp",
    },
    {
      original: "CASCADE-NINETY-FIVE-DET-01_2048x.webp",
      thumbnail: "CASCADE-NINETY-FIVE-DET-01_2048x.webp",
    },
    {
      original: "CASCADE-NINETY-FIVE-DET-02_2048x.webp",
      thumbnail: "CASCADE-NINETY-FIVE-DET-02_2048x.webp",
    },
    {
      original: "CASCADE-NINETY-FIVE-DET-03_2048x.webp",
      thumbnail: "CASCADE-NINETY-FIVE-DET-03_2048x.webp",
    },
    {
      original: "CASCADE-NINETY-FIVE-DET-04_1200x.webp",
      thumbnail: "CASCADE-NINETY-FIVE-DET-04_1200x.webp",
    },
  ];

  return (
    <div>
      <div className="row d-flex p-5">
        <div className="col-sm-12 col-lg-7">
          <div>
            <ImageGallery
              items={images}
              showPlayButton={false}
              thumbnailPosition='left'
            />
          </div>
        </div>
        <div className="col-sm-12 col-lg-5 p-5">
          <h3>SNAPPER HIDEOUT</h3>
          <div className="d-flex align-items-end starsDiv">
            <ReactStars {...firstExample} />
            <p className="mb-2">8 Reviews</p>
          </div>
          <h4>$158.95</h4>
          <Quantity />
          <div className="mt-3">
            <p>PARADISE BAMBOO COLLECTION</p>
            <p>
              Nothing says Sector 9 Bamboo quite like colorful, island vibes. We
              wanted to revive some of our Bamboo roots (get it?... ‘cause it’s
              a weed) and thought someone living the island lifestyle would be
              ideal for creating this collection. With that in mind, we’ve once
              again collaborated with waterman and artist Kenny Vidinich, head
              of OneVibe Creative Studios, which is located on the waters of
              Maunalua Bay in east Honolulu, O'ahu. Taking inspiration from the
              local flora, fauna, and more importantly waves, Kenny created some
              amazingly detailed and colorful illustrations of some epic surf
              spots. We’re super stoked to bring his island paradise back on
              full display with a returning classic shape in the Snapper, as
              well as perennial heavy hitters in the Striker and Maverick
            </p>
            <p>RIDING STYLE</p>
            <p>Carving Cruiser\nCruiser</p>
            <p>DIMENSIONS</p>
            <p>Length: 34.0”\n Width: 8.75”\n Wheelbase: 21.0”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailMain;