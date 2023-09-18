import React from 'react';
import { Parallax } from 'react-parallax';
import './CategoryHome.css';
import CategoryBtn from './CategoryBtn';
import { Link } from 'react-router-dom';

function CategoryHome() {
  const storageURL = import.meta.env.VITE_API_SUPABASE_URL;
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 d-none d-xl-flex bg-black  flex-column justify-content-around align-items-start">
            <div className="categoryText">
              <h2 className="categoryH2">COMPLETES</h2>
              <CategoryBtn href={'/products/completes'} />
            </div>
            <div className="categoryText">
              <h2 className="categoryH2">DECKS</h2>
              <CategoryBtn href={'/products/decks'} />
            </div>
            <div className="categoryText">
              <h2 className="categoryH2">TRUCKS</h2>
              <CategoryBtn href={'/products/trucks'} />
            </div>
            <div className="categoryText">
              <h2 className="categoryH2">WHEELS</h2>
              <CategoryBtn href={'/products/wheels'} />
            </div>
          </div>

          <div className="col-6 d-none d-xl-flex flex-column justify-content-center align-items-center p-0 m-0">
            <Parallax
              strength={200}
              bgImage={`${storageURL}/ImgCategoryCompletes.png`}
              className="w-100 p-0 m-0"
            >
              <div className="content"></div>
            </Parallax>
            <Parallax
              strength={200}
              bgImage={`${storageURL}/ImgCategoryDecks.png`}
              className="w-100 p-0 m-0"
            >
              <div className="content"></div>
            </Parallax>
            <Parallax
              strength={200}
              bgImage={`${storageURL}/ImgCategoryTrucks.png`}
              className="w-100 p-0 m-0"
            >
              <div className="content"></div>
            </Parallax>
            <Parallax
              strength={200}
              bgImage={`${storageURL}/ImgCategoryWheels.png`}
              className="w-100 p-0 m-0"
            >
              <div className="content"></div>
            </Parallax>
          </div>

          {/* Responsive!!! */}

          <div className="col d-xl-none d-flex flex-column justify-content-center align-items-center p-0 m-0">
            <Parallax
              strength={200}
              bgImage={`${storageURL}/ImgCategoryCompletes.png`}
              className="w-100 p-0 m-0"
            >
              <div className="contentResponsive  d-flex flex-column text-center justify-content-center">
                <div>
                  <h2 className="categoryH2">COMPLETES</h2>
                  <Link to={'/products/completes'} className="categoryBtnResponsive text-center ">
                    Shop
                  </Link>
                </div>
              </div>
            </Parallax>
            <Parallax
              strength={200}
              bgImage={`${storageURL}/ImgCategoryDecks.png`}
              className="w-100 p-0 m-0"
            >
              <div className="contentResponsive d-flex flex-column text-center justify-content-center ">
                <div>
                  <h2 className="categoryH2">DECKS</h2>
                  <Link to={'/products/decks'} className="categoryBtnResponsive text-center ">
                    Shop
                  </Link>
                </div>
              </div>
            </Parallax>
            <Parallax
              strength={200}
              bgImage={`${storageURL}/ImgCategoryTrucks.png`}
              className="w-100 p-0 m-0"
            >
              <div className="contentResponsive d-flex flex-column text-center justify-content-center ">
                <div>
                  <h2 className="categoryH2">TRUCKS</h2>
                  <Link to={'/products/trucks'} className="categoryBtnResponsive text-center ">
                    Shop
                  </Link>
                </div>
              </div>
            </Parallax>
            <Parallax
              strength={200}
              bgImage={`${storageURL}/ImgCategoryWheels.png`}
              className="w-100 p-0 m-0"
            >
              <div className="contentResponsive d-flex flex-column text-center justify-content-center ">
                <div>
                  <h2 className="categoryH2">WHEELS</h2>
                  <Link to={'/products/wheels'} className="categoryBtnResponsive text-center ">
                    Shop
                  </Link>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryHome;
