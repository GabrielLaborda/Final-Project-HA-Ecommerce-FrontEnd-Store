import { useState } from "react";

function Quantity() {
    const [quantity, setQuantity] = useState(1)
    const handleAddone = () => setQuantity(quantity+1);
    const handleSubstractOne = () => {
      if(quantity>=2) setQuantity(quantity-1)};

  return (
    <div>
      <label>Quantity</label>
      <div className="mt-2 buttonsQuantity">
        <div className="d-flex">
        <input
          type="number"
          name="quantity"
          id="quantity"
          className="form-control w-25 rounded-0"
          value={quantity}
        />
        <button
          onClick={handleSubstractOne}
          className="ms-2 btn btn-outline-dark rounded-0"
        >
          <i className="bi bi-dash-circle"></i>
        </button>
        <button
          onClick={handleAddone}
          className="ms-2 btn btn-outline-dark rounded-0"
        >
          <i className="bi bi-plus-circle"></i>
        </button>
        </div>
        <button className="mt-3 btn btn-dark rounded-0 w-100">Add to cart</button>
      </div>
    </div>
  );
}

export default Quantity;
