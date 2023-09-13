import ModalCart from "./ModalCart.jsx";
import "./Cart.css";

function Cart(props) {
  return (
    <>
      <div className="d-flex justify-content-end me-3 cart">
        {["end"].map((placement, i) => (
          <ModalCart key={i} placement={placement} />
        ))}
      </div>
    </>
  );
}

export default Cart;
