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
import SectionHeader from './sectionHeader';

function About() {
  return (
    <>
      <div className="vw-100 hero-container">
        <div className="row g-0">
          <SectionHeader bold="ABOUT" normal="THIS PROJECT" />
          <div className="col-12 col-md-8">
            <img src="./about-project.png" alt="hero image" className="hero-image w-100" />
          </div>
        </div>
      </div>
      <div className="vw-100 about-container white-text py-5">
        <div className="container-fluid">
          <div className="row g-0">
            <div className="col-12 col-md-4">
              <h3 className="mx-5 green-text">OVERVIEW</h3>
            </div>
            <div className="col-12 col-md-8">
              <div className="mx-5">
                <p>
                  UrbanRush is a dynamic e-commerce platform born out of an integrative project
                  undertaken as part of Hack Academy's Coding Bootcamp. This Web Development
                  Education Program lasted over a span of three months, required more 600 hours of
                  dedication, and culminated on this final project where our challenge was to create
                  a e-commerce website within a tight three-week timeframe.
                </p>
                <p>
                  Our development process followed the Scrum methodology where we had 3 one-week
                  development sprints and used a trello Kanban board as our product backlog.
                </p>
                <p>
                  For our product selection, we opted to cater to the demand for longboard skates
                  and accessories and we drew inspiration from the well-established websites of
                  industry leaders such as Orangatang, Sector9, and Loaded for our ux/ui design.
                </p>
                <p>
                  Our database stores user profiles, administrator credentials, product listings,
                  product categories, and order details. Furthermore, it supports essential CRUD
                  (Create, Read, Update, Delete) operations on those entities.
                </p>
              </div>
              <div className="mx-5 d-flex flex-row justify-content-between flex-wrap mt-4">
                <div className="text-center">
                  <BiLogoHtml5 size={30} />
                  <p className="mb-0">HTML</p>
                </div>
                <div className="text-center">
                  <DiCss3 size={30} />
                  <p className="mb-0">CSS</p>
                </div>
                <div className="text-center">
                  <BiLogoJavascript size={30} />
                  <p className="mb-0">JavaScript</p>
                </div>
                <div className="text-center">
                  <FaBootstrap size={30} />
                  <p className="mb-0">Bootstrap</p>
                </div>
                <div className="text-center">
                  <FaNodeJs size={30} />
                  <p className="mb-0">Node</p>
                </div>
                <div className="text-center">
                  <SiExpress size={30} />
                  <p className="mb-0">Express</p>
                </div>
                <div className="text-center">
                  <BiLogoReact size={30} />
                  <p className="mb-0">React</p>
                </div>
                <div className="text-center">
                  <SiRedux size={30} />
                  <p className="mb-0">Redux</p>
                </div>
                <div className="text-center">
                  <BiLogoMongodb size={30} />
                  <p className="mb-0">MongoDB</p>
                </div>
                <div className="text-center">
                  <SiMongoose size={30} />
                  <p className="mb-0">Mongoose</p>
                </div>
                <div className="text-center">
                  <BiLogoGit size={30} />
                  <p className="mb-0">Git</p>
                </div>
                <div className="text-center">
                  <DiScrum size={30} />
                  <p className="mb-0">Scrum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vw-100 ptscreen-container">
          <div className="container-fluid">
            <div className="row g-0">
              <div className="col-12">
                <div className="mx-5 py-5">
                  <h3 className="green-text">
                    UrbanRush represents the culmination of extensive training, dedication, and
                    innovation.
                  </h3>
                  <h5>
                    We invite you to explore our platform and rigorously test its functionalities.
                  </h5>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mx-5">
                  <div className="ptsc-container">
                    <img className="img-fluid mb-4" src="./HOME-SCRN.png" alt="Home Print Screen" />

                    <p className="m-0">Test User Credentials</p>
                    <p className="m-0">user: user@example.com</p>
                    <p className="m-0">password: 123456</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mx-5">
                  <div className="ptsc-container">
                    <img
                      className="img-fluid mb-4"
                      src="./ADMIN-SCRN.png"
                      alt="Home Print Screen"
                    />
                    <p className="m-0">Test Admin Credentials</p>
                    <p className="m-0">user: admin@example.com</p>
                    <p className="m-0">password: 123456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-container py-5 vw-100">
        <div className="container-fluid ">
          <div className="row g-0">
            <SectionHeader bold={'MEET'} normal={'THE TEAM'} />
            <div className="col-12 col-md-8">
              <div className="d-flex w-100 justify-content-between flex-wrap me-5">
                <div className="user-card text-center m-auto py-3">
                  <img
                    src="./User-avatar.png"
                    alt="user-avatar"
                    className="img-fluid user-avatar"
                  />
                  <p className="mt-2 mb-0 fw-bold">Andres Amorin</p>
                  <p className="mb-1 mt-0">Full Stack Developer</p>
                  <div>
                    <a className="text-dark" href="http://">
                      <BiLogoGithub size={35} />
                    </a>
                    <a className="text-dark" href="http://">
                      <BiLogoLinkedinSquare size={35} />
                    </a>
                  </div>
                </div>
                <div className="user-card text-center m-auto py-3">
                  <img
                    src="./User-avatar.png"
                    alt="user-avatar"
                    className="img-fluid user-avatar"
                  />
                  <p className="mt-2 mb-0 fw-bold">Gabriel Laborda</p>
                  <p className="mb-1 mt-0">Full Stack Developer</p>
                  <div>
                    <a className="text-dark" href="http://">
                      <BiLogoGithub size={35} />
                    </a>
                    <a className="text-dark" href="http://">
                      <BiLogoLinkedinSquare size={35} />
                    </a>
                  </div>
                </div>
                <div className="user-card text-center m-auto py-3">
                  <img
                    src="./User-avatar.png"
                    alt="user-avatar"
                    className="img-fluid user-avatar"
                  />
                  <p className="mt-2 mb-0 fw-bold">Gonzalo Cuello</p>
                  <p className="mb-1 mt-0">Full Stack Developer</p>
                  <div>
                    <a className="text-dark" href="http://">
                      <BiLogoGithub size={35} />
                    </a>
                    <a className="text-dark" href="http://">
                      <BiLogoLinkedinSquare size={35} />
                    </a>
                  </div>
                </div>
                <div className="user-card text-center m-auto py-3">
                  <img
                    src="./User-avatar.png"
                    alt="user-avatar"
                    className="img-fluid user-avatar"
                  />
                  <p className="mt-2 mb-0 fw-bold">José Pedro Lavaggi</p>
                  <p className="mb-1 mt-0">Full Stack Developer</p>
                  <div>
                    <a className="text-dark" href="http://">
                      <BiLogoGithub size={35} />
                    </a>
                    <a className="text-dark" href="http://">
                      <BiLogoLinkedinSquare size={35} />
                    </a>
                  </div>
                </div>
                <div className="user-card text-center m-auto py-3">
                  <img
                    src="./User-avatar.png"
                    alt="user-avatar"
                    className="img-fluid user-avatar"
                  />
                  <p className="mt-2 mb-0 fw-bold">Pedro de Souza</p>
                  <p className="mb-1 mt-0">Full Stack Developer</p>
                  <div>
                    <a className="text-dark" href="http://">
                      <BiLogoGithub size={35} />
                    </a>
                    <a className="text-dark" href="http://">
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
