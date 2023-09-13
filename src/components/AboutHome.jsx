import './AboutHome.css'
import SectionHeader from './sectionHeader'
function AboutHome() {
  return (
        <div className="container-fluid bg-white">
            <div className="row m-0 m-5">
                <div className="col-7"><h2 className='aboutTitle'><span className="aboutTitleBold">URBAN</span>RUSH</h2></div>
                <div className="col-5 aboutTagline w-25">where the streets are your playground</div>
            </div>
            <div className="row mx-5 mb-5">
                <div className="col-8"><img className="aboutImg img-fluid w-100" src="./ImgHome/AboutHome.png" alt="" /></div>
                <div className="col-4"></div>
            </div>
            <div className="row mb-5">
                <div className="col-7"></div>
                <div className="col-5">
                <h2 className='aboutTitle'><span className="aboutTitleBold">ABOUT</span> THIS</h2>
                <h2 className='aboutTitle'>PROJECT</h2></div>
            </div>
        </div>
  )
}

export default AboutHome