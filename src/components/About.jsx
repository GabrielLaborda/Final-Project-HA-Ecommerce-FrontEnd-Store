import NavbarCart from './NavbarCart';
import Footer from './Footer';
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
import userAvatar from '/public/User-avatar.png';
import './About.css';

function About() {
  return (
    <>
      <NavbarCart />
      <div className="vw-100 about-container white-text">
        <div className="container">
          <div className="row pt-5">
            <div className="col-12 col-md-6">
              <h3>Project Summary: UrbanRush E-Commerce</h3>
              <p>
                UrbanRush is a dynamic e-commerce platform born out of an intensive, integrative
                project undertaken during the Coding Bootcamp at Hack Academy. Over a span of three
                months, our team invested more than 600 hours to bring this innovative concept to
                life. Our primary challenge was to create a fully functional e-commerce website
                within a tight three-week timeframe.
              </p>
              <p>
                For our product selection, we opted to cater to the burgeoning demand for longboard
                skates and accessories, aligning with the urban lifestyle. To ensure the success of
                UrbanRush, we drew inspiration from the well-established websites of industry
                leaders such as Orangatang, Sector9, and Loaded.
              </p>
              <p>
                UrbanRush is architecturally structured to provide a seamless and engaging user
                experience. It comprises three key components:
              </p>
              <ol>
                <li>
                  <strong>Front-End Store:</strong> UrbanRush boasts a dynamic front-end store built
                  using React, transforming it into a Single Page Application (SPA). This
                  cutting-edge design enhances user interaction and navigation.
                </li>
                <li>
                  <strong>Front-End Administration and Management:</strong> In addition to the
                  customer-facing store, we've created an efficient front-end for administration and
                  management. This admin interface empowers administrators with the tolis they need
                  to streamline operations.
                </li>
                <li>
                  <strong>Back-End Server and Database Connectivity:</strong> To facilitate robust
                  functionality, our back-end server orchestrates interactions between the front-end
                  and a powerful MongoDB database. This server is developed using Node.js and
                  leverages the Axios library for seamless data exchange. The MongoDB database is
                  accessed through the Mongoose Object Data Modeling (ODM) framework, enabling
                  efficient storage and retrieval of crucial information.
                </li>
              </ol>
            </div>
            <div className="col-12 col-md-6">
              <p>
                Our database is a comprehensive repository of user profiles, administrator
                credentials, product listings, product categories, and order details. It supports
                essential CRUD (Create, Read, Update, Delete) operations on products, user data,
                administrator privileges, product categories, and orders, ensuring data accuracy and
                integrity.
              </p>
              <p>
                To ensure the project's accessibility and scalability, we adopted a variety of
                robust technologies. UrbanRush is hosted on Vercel, ensuring swift and reliable
                performance. Image storage is efficiently managed using Supabase, and our database
                infrastructure is securely hosted on MongoDB Atlas.
              </p>
              <p>
                We invite you to explore UrbanRush's platform and rigorously test its
                functionalities. UrbanRush represents the culmination of extensive training,
                dedication, and innovation. Discover our platform, explore our user interface, and
                immerse yourself in the world of UrbanRush. Your feedback and insights are
                invaluable as we continue to refine and improve this exciting project
              </p>

              <h3>Tech Stack</h3>
              <div className="d-flex justify-content-between">
                <div className="text-center">
                  <BiLogoHtml5 size={70} />
                  <p>HTML</p>
                </div>
                <div className="text-center">
                  <DiCss3 size={70} />
                  <p>CSS</p>
                </div>
                <div className="text-center">
                  <BiLogoJavascript size={70} />
                  <p>JavaScript</p>
                </div>
                <div className="text-center">
                  <FaBootstrap size={70} />
                  <p>Bootstrap</p>
                </div>
                <div className="text-center">
                  <FaNodeJs size={70} />
                  <p>Node</p>
                </div>
                <div className="text-center">
                  <SiExpress size={70} />
                  <p>Express</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="text-center">
                  <BiLogoReact size={70} />
                  <p>React</p>
                </div>
                <div className="text-center">
                  <SiRedux size={70} />
                  <p>Redux</p>
                </div>
                <div className="text-center">
                  <BiLogoMongodb size={70} />
                  <p>MongoDB</p>
                </div>
                <div className="text-center">
                  <SiMongoose size={70} />
                  <p>Mongoose</p>
                </div>
                <div className="text-center">
                  <BiLogoGit size={70} />
                  <p>Git</p>
                </div>
                <div className="text-center">
                  <DiScrum size={70} />
                  <p>Scrum</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Our Team</h3>
              <div className="d-flex justify-content-between flex-wrap py-4">
                <div className="user-card text-center m-auto">
                  <img src={userAvatar} alt="user-avatar" className="img-fluid" />
                  <p className="mt-2 mb-0 fw-bold">Andres Amorin</p>
                  <p className="mb-1 mt-0">Full Stack Developer</p>
                  <div>
                    <a className="white-text" href="http://">
                      <BiLogoGithub size={35} />
                    </a>
                    <a className="white-text" href="http://">
                      <BiLogoLinkedinSquare size={35} />
                    </a>
                  </div>
                </div>
                <div className="user-card text-center m-auto">
                  <img src={userAvatar} alt="user-avatar" className="img-fluid" />
                  <p className="mt-2 mb-0 fw-bold">Gabriel Laborda</p>
                  <p className="mb-1 mt-0">Full Stack Developer</p>
                  <div>
                    <a className="white-text" href="http://">
                      <BiLogoGithub size={35} />
                    </a>
                    <a className="white-text" href="http://">
                      <BiLogoLinkedinSquare size={35} />
                    </a>
                  </div>
                </div>
                <div className="user-card text-center m-auto">
                  <img src={userAvatar} alt="user-avatar" className="img-fluid" />
                  <p className="mt-2 mb-0 fw-bold">Gonzalo Cuello</p>
                  <p className="mb-1 mt-0">Full Stack Developer</p>
                  <div>
                    <a className="white-text" href="http://">
                      <BiLogoGithub size={35} />
                    </a>
                    <a className="white-text" href="http://">
                      <BiLogoLinkedinSquare size={35} />
                    </a>
                  </div>
                </div>
                <div className="user-card text-center m-auto">
                  <img src={userAvatar} alt="user-avatar" className="img-fluid" />
                  <p className="mt-2 mb-0 fw-bold">José Pedro Lavaggi</p>
                  <p className="mb-1 mt-0">Full Stack Developer</p>
                  <div>
                    <a className="white-text" href="http://">
                      <BiLogoGithub size={35} />
                    </a>
                    <a className="white-text" href="http://">
                      <BiLogoLinkedinSquare size={35} />
                    </a>
                  </div>
                </div>
                <div className="user-card text-center m-auto">
                  <img src={userAvatar} alt="user-avatar" className="img-fluid" />
                  <p className="mt-2 mb-0 fw-bold">Pedro de Souza</p>
                  <p className="mb-1 mt-0">Full Stack Developer</p>
                  <div>
                    <a className="white-text" href="http://">
                      <BiLogoGithub size={35} />
                    </a>
                    <a className="white-text" href="http://">
                      <BiLogoLinkedinSquare size={35} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
