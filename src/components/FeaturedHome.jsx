import React from 'react'
import "./FeaturedHome.css"

function FeaturedHome() {
  return (
    <>
        <div className="container-fluid feacturedContainer ">
            <h3 className='feacturedH3 text-center text-white mb-4 pt-5'>FEATURED</h3>
            <div className="row">
                <div className="col-3 w-25 d-flex flex-column align-items-center">
                    <img className='img-fluid' src="./ImgHome/Features_1.webp" alt="" />
                    <h6 className='my-3 text-white'>BAMBINO SKIPPER</h6>
                    <p className='text-white mb-4'>USD 118.95</p>
                </div>
                <div className="col-3 w-25 d-flex flex-column align-items-center">
                    <img className='img-fluid' src="./ImgHome/Features_2.webp" alt="" />
                    <h6 className='my-3 text-white'>BAMBINO SHOREBREAK</h6>
                    <p className='text-white mb-4'>USD 118.95</p>
                </div>
                <div className="col-3 w-25 d-flex flex-column align-items-center">
                    <img className='img-fluid' src="./ImgHome/Features_3.webp" alt="" />
                    <h6 className='my-3 text-white'>BAMBINO BIVY</h6>
                    <p className='text-white mb-4'>USD 118.95</p>
                </div>
                <div className="col-3 w-25 d-flex flex-column align-items-center">
                    <img className='img-fluid' src="./ImgHome/Features_4.webp" alt="" />
                    <h6 className='my-3 text-white'>STRANDSQUAL</h6>
                    <p className='text-white mb-5'>USD 118.95</p>
                </div>
            </div> 
        </div>
    </>
  )
}

export default FeaturedHome