import React from 'react'

function CategoryHome() {
  return (
    <div className="container">
        <div className='row d-flex justify-content-center'>
            <h3 className='text-center text-white my-5'>CATEGORY</h3>
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
  )
}

export default CategoryHome