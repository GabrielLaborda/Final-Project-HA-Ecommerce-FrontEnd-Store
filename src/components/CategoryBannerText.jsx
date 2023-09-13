import './CategoryBannerText.css';

function CategoryBannerText({ bold, normal }) {
  return (
    <div className="col-12">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-6 d-flex justify-content-center">
          <p className="section-headerBanner">
            <span id="boldBanner">{bold}</span>
            <span id="normalBanner">{normal}</span>
          </p>
        </div>
        <div className="col-6">
          <div className="p-5">
            <p id="smallText">Where the streets are your playground</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBannerText;
