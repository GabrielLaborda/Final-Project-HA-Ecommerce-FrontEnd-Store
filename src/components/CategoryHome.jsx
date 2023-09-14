import React from 'react';
import { Parallax } from 'react-parallax';
import Completes from '/ImgHome/ImgCategoryCompletes.png';
import Decks from '/ImgHome/ImgCategoryDecks.png';
import Trucks from '/ImgHome/ImgCategoryTrucks.png';
import Wheels from '/ImgHome/ImgCategoryWheels.png';
import './CategoryHome.css';
import CategoryBtn from './CategoryBtn';

function CategoryHome() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 bg-black d-flex flex-column justify-content-around align-items-start">
            <div className='categoryText'>
              <h2 className="categoryH2">COMPLETES</h2>
              <CategoryBtn href={"/products/completes"} />
            </div>
            <div className='categoryText'>
              <h2 className="categoryH2">DECKS</h2>
              <CategoryBtn href={"/products/decks"} />
            </div>
            <div className='categoryText'>
              <h2 className="categoryH2">TRUCKS</h2>
              <CategoryBtn href={"/products/trucks"} />
            </div>
            <div className='categoryText'>
              <h2 className="categoryH2">WHEELS</h2>
              <CategoryBtn href={"/products/wheels"} />
            </div>
          </div>

          <div className="col-6 d-flex flex-column justify-content-center align-items-center p-0 m-0">
            <Parallax strength={500} bgImage={Completes} className="w-100 p-0 m-0">
              <div className="content"></div>
            </Parallax>
            <Parallax strength={500} bgImage={Decks} className="w-100 p-0 m-0">
              <div className="content"></div>
            </Parallax>
            <Parallax strength={500} bgImage={Trucks} className="w-100 p-0 m-0">
              <div className="content"></div>
            </Parallax>
            <Parallax strength={500} bgImage={Wheels} className="w-100 p-0 m-0">
              <div className="content"></div>
            </Parallax>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryHome;
