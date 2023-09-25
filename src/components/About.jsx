import {
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoGit,
  BiLogoGithub,
  BiLogoLinkedinSquare,
} from 'react-icons/bi';
import { DiCss3, DiScrum } from 'react-icons/di';
import { FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiRedux, SiMongoose, SiAxios } from 'react-icons/si';

import './About.css';
import SectionHeader from './SectionHeader';
import { NavLink } from 'react-router-dom';
const storageURL = import.meta.env.VITE_API_SUPABASE_URL;

function About() {
  return (
    <>
      <div className="w-100 hero-container">
        <div className="container">
          <div className="pt-5">
            <SectionHeader bold="ABOUT" normal="THIS PROJECT" />
          </div>
        </div>
      </div>

      <div className="w-100 about-container white-text py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <h2 className="green-text">OVERVIEW</h2>
            </div>
            <div className="col-12 col-lg-8">
              <p>
                <span className="green-text">UrbanRush</span> is a dynamic e-commerce platform born
                out of an integrative project undertaken as part of{' '}
                <span className="green-text">Hack Academy's Coding Bootcamp</span>. This Web
                Development Education Program lasted over a span of three months, required more 600
                hours of dedication, and culminated on this{' '}
                <span className="green-text">final project</span> where our challenge was to create
                a <span className="green-text">e-commerce website</span> within a tight{' '}
                <span className="green-text">three-week timeframe</span>.
              </p>
            </div>
          </div>
          <div className="pt-5">
            <div className="row">
              <div className="col-12 col-lg-4">
                <h2 className="purple-text">PRODUCT SELECTION</h2>
                <p>
                  We chose to meet the demand for
                  <span className="purple-text"> longboard skates and accessories</span>, taking
                  inspiration from industry leaders like Orangatang, Sector9, and Loaded for our
                  <span className="purple-text"> UX/UI design</span>.
                </p>
              </div>
              <div className="col-12 col-lg-4">
                <h2 className="acqua-text">AGILE DEVELOPMENT</h2>
                <p>
                  We adopted <span className="acqua-text">Scrum methodology</span>, completed
                  <span className="acqua-text"> three one-week development sprints</span>, and
                  utilized Trello's Kanban board for our
                  <span className="acqua-text"> product backlog</span>.
                </p>
              </div>
              <div className="col-12 col-lg-4">
                <h2 className="salmon-text">REST ARCHITECTURE</h2>
                <p>
                  Our database stores{' '}
                  <span className="salmon-text">
                    {' '}
                    user profiles, administrator credentials, product listings, product categories,
                    and order details
                  </span>
                  . Additionally, we implemented{' '}
                  <span className="salmon-text"> robust CRUD (Create, Read, Update, Delete) </span>
                  functionalities for seamless management of these entities.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <div className="row">
              <div className="col-12">
                <h2 className="mb-4">
                  {' '}
                  <span className="orange-text">TECHNOLOGIES & TOOLS</span>
                </h2>
              </div>
              <div className="col-12">
                <div className="d-flex flex-wrap justify-content-between tech-stack py-1">
                  <div className="text-center">
                    <BiLogoHtml5 size={45} />
                    <p className="mb-0">HTML</p>
                  </div>
                  <div className="text-center">
                    <DiCss3 size={45} />
                    <p className="mb-0">CSS</p>
                  </div>
                  <div className="text-center">
                    <BiLogoJavascript size={45} />
                    <p className="mb-0">JavaScript</p>
                  </div>
                  <div className="text-center">
                    <FaBootstrap size={45} />
                    <p className="mb-0">Bootstrap</p>
                  </div>
                  <div className="text-center">
                    <FaNodeJs size={45} />
                    <p className="mb-0">Node</p>
                  </div>
                  <div className="text-center">
                    <SiExpress size={45} />
                    <p className="mb-0">Express</p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="d-flex flex-wrap justify-content-between tech-stack py-1">
                  <div className="text-center">
                    <BiLogoReact size={45} />
                    <p className="mb-0">React</p>
                  </div>
                  <div className="text-center">
                    <SiRedux size={45} />
                    <p className="mb-0">Redux</p>
                  </div>
                  <div className="text-center">
                    <BiLogoMongodb size={45} />
                    <p className="mb-0">MongoDB</p>
                  </div>
                  <div className="text-center">
                    <SiMongoose size={45} />
                    <p className="mb-0">Mongoose</p>
                  </div>
                  <div className="text-center">
                    <BiLogoGit size={45} />
                    <p className="mb-0">Git</p>
                  </div>
                  <div className="text-center">
                    <DiScrum size={45} />
                    <p className="mb-0">Scrum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 ptscreen-container">
          <div className="container pt-5 mt-5">
            <div className="row">
              <div className="col-12 col-lg-4">
                <h2 className="green-text">APPLICATIONS</h2>
              </div>
              <div className="col-12 col-lg-8">
                <p>
                  This project <span className="green-text">represents</span> the culmination of
                  extensive <span className="green-text">training, dedication, and innovation</span>
                  . We <span className="green-text">invite</span> you to explore our{' '}
                  <span className="green-text">dynamic e-commerce store</span> and our{' '}
                  <span className="green-text">admin panel platform</span> and rigorously{' '}
                  <span className="green-text">test its functionalities</span>.
                </p>
              </div>
            </div>

            <div className="pt-3">
              <div className="row">
                <div className="col-12">
                  <div className="prints-container text-start w-100">
                    <NavLink to={'/login'}>
                      <img
                        className="img-fluid mb-4"
                        src={`${storageURL}/PrintScreenStore.png`}
                        alt="Home Print Screen"
                      />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="prints-container w-100">
                    <a href="https://urbanrush-admin.vercel.app" target="_blank">
                      <img
                        className="img-fluid mb-4 m-auto"
                        src={`${storageURL}/PrintScreenAdmin.png`}
                        alt="Home Print Screen"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-container py-5 w-100">
        <div className="container ">
          <div className="row">
            <SectionHeader bold={'MEET'} normal={'THE TEAM'} />
          </div>

          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between flex-wrap">
                <div className="user-card text-center m-xl-0 m-auto py-3">
                  <img
                    src={`${storageURL}/Andres-Amorin.png`}
                    alt="user-avatar"
                    className="img-fluid user-avatar"
                  />
                  <p className="mt-2 mb-0 fw-bold">Andres Amorin</p>
                  <p className="mb-1 mt-0">Full Stack Developer</p>
                  <div>
                    <a
                      className="text-dark"
                      href="https://github.com/Andres19881500"
                      target="_blank"
                    >
                      <BiLogoGithub size={35} />
                    </a>
                    <a
                      className="text-dark"
                      href="https://www.linkedin.com/in/andres-amorin-fullstack-developer-javascript-reactjs-html5-css3-nodejs/"
                      target="_blank"
                    >
                      <BiLogoLinkedinSquare size={35} />
                    </a>
                  </div>
                </div>
                <div className="user-card text-center m-xl-0 m-auto py-3">
                  <img
                    src={`${storageURL}/Gabriel-Laborda.png`}
                    alt="user-avatar"
                    className="img-fluid user-avatar"
                  />
                  <p className="mt-2 mb-0 fw-bold">Gabriel Laborda</p>
                  <p className="mb-1 mt-0">Full Stack Developer</p>
                  <div>
                    <a
                      className="text-dark"
                      href="https://github.com/GabrielLaborda"
                      target="_blank"
                    >
                      <BiLogoGithub size={35} />
                    </a>
                    <a
                      className="text-dark"
                      href="https://www.linkedin.com/in/laborda-gabriel/"
                      target="_blank"
                    >
                      <BiLogoLinkedinSquare size={35} />
                    </a>
                  </div>
                </div>
                <div className="user-card text-center m-xl-0 m-auto py-3">
                  <img
                    src={`${storageURL}/gonzaloCuello.png`}
                    alt="user-avatar"
                    className="img-fluid user-avatar"
                  />
                  <p className="mt-2 mb-0 fw-bold">Gonzalo Cuello</p>
                  <p className="mb-1 mt-0">Full Stack Developer</p>
                  <div>
                    <a
                      className="text-dark"
                      href="https://github.com/GonzaloCuello01"
                      target="_blank"
                    >
                      <BiLogoGithub size={35} />
                    </a>
                    <a
                      className="text-dark"
                      href="https://www.linkedin.com/in/gonzalo-cuello-de-los-santos/"
                      target="_blank"
                    >
                      <BiLogoLinkedinSquare size={35} />
                    </a>
                  </div>
                </div>
                <div className="user-card text-center m-xl-0 m-auto py-3">
                  <img
                    src={`${storageURL}/Jose-Pedro-lavaggi.png`}
                    alt="user-avatar"
                    className="img-fluid user-avatar"
                  />
                  <p className="mt-2 mb-0 fw-bold">José Pedro Lavaggi</p>
                  <p className="mb-1 mt-0">Full Stack Developer</p>
                  <div>
                    <a
                      className="text-dark"
                      href="https://github.com/JosePedroLavaggi"
                      target="_blank"
                    >
                      <BiLogoGithub size={35} />
                    </a>
                    <a
                      className="text-dark"
                      href="https://www.linkedin.com/in/jose-pedro-lavaggi/"
                      target="_blank"
                    >
                      <BiLogoLinkedinSquare size={35} />
                    </a>
                  </div>
                </div>
                <div className="user-card text-center m-xl-0 m-auto py-3">
                  <img
                    src={`${storageURL}/pedro-de-souza.jpg`}
                    alt="user-avatar"
                    className="img-fluid user-avatar"
                  />
                  <p className="mt-2 mb-0 fw-bold">Pedro de Souza</p>
                  <p className="mb-1 mt-0">Full Stack Developer</p>
                  <div>
                    <a className="text-dark" href="https://github.com/soloSouza" target="_blank">
                      <BiLogoGithub size={35} />
                    </a>
                    <a
                      className="text-dark"
                      href="https://www.linkedin.com/in/desouzap/"
                      target="_blank"
                    >
                      <BiLogoLinkedinSquare size={35} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
