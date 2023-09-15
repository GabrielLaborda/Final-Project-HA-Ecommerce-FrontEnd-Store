import './AboutHome.css'
function AboutHome() {
  return (
        <div className="container bg-white">
            <div className="row my-5">
            <div className="col-12 col-lg-7">
                <h2 className="aboutTitleBold">URBAN RUSH</h2>
            </div>
            <div className="col-12 col-lg-5">
                <div className="aboutTagline">where the streets are your playground</div>
            </div>
            </div>
            <div className="row mb-5">
            <div className="col-12 col-md-8">
                <img className="aboutImg img-fluid w-100" src="./ImgHome/AboutHome.png" alt="" />
            </div>
            <div className="col-4 d-none d-md-block"></div>
            </div>
            <div className="row mb-5">
            <div className="col-12 col-lg-7"></div>
            <div className="col-12 col-lg-5">
                    <h2 className="aboutTitleBold">ABOUT THIS</h2>
                    <h2 className="aboutTitle">PROJECT</h2>
            </div>
            </div>
        </div>
  )
}

export default AboutHome