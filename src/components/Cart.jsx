import ModalCart from "./ModalCart.jsx";
import "./Cart.css";

function Cart(props) {
  return (
    <>
      <div className="cart bg-warning rounded-5 text-center ps-2">
        {["end"].map((placement, i) => (
          <ModalCart className="text-black" key={i} placement={placement} />
        ))}
      </div>
    </>
  );
}

export default Cart;
