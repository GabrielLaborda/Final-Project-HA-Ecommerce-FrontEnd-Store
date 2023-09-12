import React from 'react'
import { Parallax } from "react-parallax";
import Completes from "/ImgHome/ImgCategoryCompletes.png"
import Decks from "/ImgHome/ImgCategoryDecks.png"
import Trucks from "/ImgHome/ImgCategoryTrucks.png"
import Wheels from "/ImgHome/ImgCategoryWheels.png"
import "./CategoryHome.css";


function CategoryHome() {
  return (
    <>
      <div className="container-fluid">
          <div className='row'>
          <div className="col-6 bg-black d-flex flex-column justify-content-around align-items-center m-0 p-0">
            <div>
              <h2 className='categoryH2'>COMPLETES</h2>
              <button className='btn btn-warning text-black fs-4 mt-5 rounded-0'> SHOP</button>
            </div>
            <div>
              <h2 className='categoryH2'>DECKS</h2>
              <button className='btn btn-warning text-black fs-4 mt-5 rounded-0'> SHOP</button>
            </div>
            <div>
              <h2 className='categoryH2'>TRUCKS</h2>
              <button className='btn btn-warning text-black fs-4 mt-5 rounded-0'> SHOP</button>
            </div>
            <div> 
              <h2 className='categoryH2'>WHEELS</h2>
              <button className='btn btn-warning text-black fs-4 mt-5 rounded-0'> SHOP</button>
              </div>
            </div>
        
            <div className="col-6 d-flex flex-column justify-content-center align-items-center p-0 m-0">
              <Parallax strength={600} bgImage={Completes} className='w-100 p-0 m-0' >
              <div className='content'>
                </div>
              </Parallax>
              <Parallax strength={600} bgImage={Decks} className='w-100 p-0 m-0' >
                  <div className='content'>
                  </div>
              </Parallax>
              <Parallax strength={600} bgImage={Trucks} className='w-100 p-0 m-0' >
                  <div className='content' >
                  </div>
              </Parallax>
              <Parallax strength={600} bgImage={Wheels} className='w-100 p-0 m-0' >
                  <div className='content' >
                  </div>
                </Parallax>
              </div>
          </div>
      </div>
  </>
  )
}

export default CategoryHome;