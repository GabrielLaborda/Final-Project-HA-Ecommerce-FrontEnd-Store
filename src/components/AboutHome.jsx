import './AboutHome.css';
import { NavLink } from 'react-router-dom';
import { TbHandClick } from 'react-icons/tb';

function AboutHome() {
  return (
    <div className="container bg-white">
      <NavLink to={'/about'} className="text-decoration-none text-black">
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
            <img className="aboutImg img-fluid w-100" src={`/AboutHome.png`} alt="section-img" />
          </div>
          <div className="col-4 d-none d-md-block"></div>
        </div>
        <div className="row mb-5">
          <div className="col-12 col-lg-7"></div>

          <div className="col-12 col-lg-5 callToAction text-black about-hover">
            <h2 className="aboutTitleBold2">ABOUT THIS</h2>
            <h2 className="aboutTitle d-inline">PROJECT</h2>
            <TbHandClick size={100} className="ms-5 aboutTitle" />
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default AboutHome;
