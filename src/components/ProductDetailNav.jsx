function ProductDetailNav() {
    return (
        <div className="ms-5 me-5">
        <div className="d-flex mt-3 p-3 boldTexts">
            <p className="yellowTexts">Home</p>
            <p className="ms-3">/</p>
            <p className="ms-3 yellowTexts">Categories</p>
            <p className="ms-3">/</p>
            <p className="ms-3 yellowTexts">Completes</p>
            <p className="ms-3">/</p>
            <p className="ms-3">SNAPPER HIDEOUT</p>
        </div>
        <div className="d-flex justify-content-between p-3">
            <div className="d-flex">
                <i class="bi bi-arrow-left"></i>
                <p className="ms-1">Previous Item</p>
            </div>
            <div className="d-flex">
                <p>Next Item</p>
                <i class="bi bi-arrow-right"></i>
            </div>
        </div>
        </div>
    )
}

export default ProductDetailNav;