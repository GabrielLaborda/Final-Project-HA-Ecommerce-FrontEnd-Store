import React from 'react'

function Features() {
  return (
    <>
        <div className="container">
            <h3 className='text-center my-5'>FEATURES</h3>
            <div className="row">
                <div className="col-3 w-25 d-flex flex-column align-items-center">
                    <img className='img-fluid' src="./ImgHome/Features_1.webp" alt="" />
                    <h6 className='my-3'>BAMBINO SKIPPER</h6>
                    <p>USD 118.95</p>
                </div>
                <div className="col-3 w-25 d-flex flex-column align-items-center">
                    <img className='img-fluid' src="./ImgHome/Features_2.webp" alt="" />
                    <h6 className='my-3'>BAMBINO SHOREBREAK</h6>
                    <p>USD 118.95</p>
                </div>
                <div className="col-3 w-25 d-flex flex-column align-items-center">
                    <img className='img-fluid' src="./ImgHome/Features_3.webp" alt="" />
                    <h6 className='my-3'>BAMBINO BIVY</h6>
                    <p>USD 118.95</p>
                </div>
                <div className="col-3 w-25 d-flex flex-column align-items-center">
                    <img className='img-fluid' src="./ImgHome/Features_4.webp" alt="" />
                    <h6 className='my-3'>STRANDSQUAL</h6>
                    <p>USD 118.95</p>
                </div>
            </div>
                
            <div className='row d-flex justify-content-center '>
                <h3 className='text-center my-5'>CATEGORY</h3>
                <div className="col-6">
                    <img className='img-fluid mb-4' src="./ImgHome/category-completes-home-picture.webp" alt="" />
                    <img className='img-fluid' src="./ImgHome/category-decks-home-picture.webp" alt="" />
                </div>
                <div className="col-6">
                    <img className='img-fluid mb-4' src="./ImgHome/category-trucks-home-picture.webp" alt="" />
                    <img className='img-fluid' src="./ImgHome/category-wheels-home-picture.webp" alt="" />
                </div>
                
                
                
            </div>
        </div>
    </>
  )
}

export default Features