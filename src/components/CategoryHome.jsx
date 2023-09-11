import React from 'react'
import "./CategoryHome.css"

function CategoryHome() {
  return (
        <div className="container-fluid">
          <div className='row '>
            <div className="col-6 bg-black d-flex flex-column justify-content-center align-items-center ">
              <h2 className='categoryH2'>COMPLETES</h2>
              <button className='btn btn-warning text-black fs-4 mt-5 rounded-0'> SHOP</button>
            </div>
            <div className="col-6 p-0">
              <img className='img-fluid w-100' src="./ImgHome/ImgCategoryCompletes.png" alt="" />
            </div>
          </div> 

          <div className='row '>
            <div className="col-6 bg-black d-flex flex-column justify-content-center align-items-center ">
              <h2 className='categoryH2'>DECKS</h2>
              <button className='btn btn-warning text-black fs-4 mt-5 rounded-0'> SHOP</button>
            </div>
            <div className="col-6 p-0">
              <img className='img-fluid w-100' src="./ImgHome/ImgCategoryDecks.png" alt="" />
            </div>
          </div> 

          <div className='row '>
            <div className="col-6 bg-black d-flex flex-column justify-content-center align-items-center ">
              <h2 className='categoryH2'>TRUCKS</h2>
              <button className='btn btn-warning text-black fs-4 mt-5 rounded-0'> SHOP</button>
            </div>
            <div className="col-6 p-0">
              <img className='img-fluid w-100' src="./ImgHome/ImgCategoryTrucks.png" alt="" />
            </div>
          </div> 

          <div className='row '>
            <div className="col-6 bg-black d-flex flex-column justify-content-center align-items-center ">
              <h2 className='categoryH2'>WHEELS</h2>
              <button className='btn btn-warning text-black fs-4 mt-5 rounded-0'> SHOP</button>
            </div>
            <div className="col-6 p-0">
              <img className='img-fluid w-100' src="./ImgHome/ImgCategoryWheels.png" alt="" />
            </div>
          </div> 
               
        </div>
)}

export default CategoryHome