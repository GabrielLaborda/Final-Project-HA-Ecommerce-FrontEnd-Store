import './CategoryBannerText.css';

function CategoryBannerText({ bold, normal }) {
  return (
      <div className="container">
        <div className="row">
            <div className="col-12 d-flex justify-content-start">
            <p className="section-headerBanner">
            <span id="boldBanner">{bold}</span>
            <span id="normalBanner">{normal}</span>
            </p>
            </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p id="smallText">Where the streets are your playground</p>
          </div>
        </div>
      </div>
  );
}

export default CategoryBannerText;
