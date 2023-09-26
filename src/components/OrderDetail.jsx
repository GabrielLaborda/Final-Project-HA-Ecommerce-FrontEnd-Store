import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./OrderDetail.css";

function OrderDetail() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const params = useParams();
  const navigate = useNavigate();
  const orderId = params.id;
  const user = useSelector((state) => state.user);
  const [order, setOrder] = useState(null);
  const notifyError = (message) =>
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const getOrder = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${baseURL}/orders/${orderId}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      return setOrder(response.data);
    } catch (err) {
      console.log(err.response.data.msg);
      return notifyError("Oops! Something went wrong, try again");
    }
  }

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-lg-6 left-container d-flex flex-column justify-content-center align-items-center">
        <h1 className="account-h1">Order Detail</h1>
        </div>

        <div className="col-sm-12 col-lg-6">
          {order && (
            <div className="right-section vh-100 d-flex flex-column justify-content-center">
              <div className="order-prods-container flex-column d-flex p-3">
              <div className='d-flex back' onClick={() => navigate(-1)}>
              <i className="bi bi-arrow-left"></i>
              <p className='ms-2'>Back</p>
              </div>
                <h3 className="mb-5">Order Status: {order.status.status}</h3>
                <h4>Order ID: {order._id}</h4>
                <h6>
                  Order Date: {new Date(order.createdAt).toLocaleDateString()}
                </h6>
                <table className=" tableOrder" border="1">
                  <thead>
                    <tr className="tableOrderThTd">
                      <th className="tableOrderThTd">Product</th>
                      <th className="tableOrderThTd">Quantity</th>
                      <th className="tableOrderThTd">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.products.map((item) => (
                      <tr key={item.name} className="tableOrderThTd">
                        <td className="tableOrderThTd">{item.name}</td>
                        <td className="tableOrderThTd">{item.quantity}</td>
                        <td className="tableOrderThTd">USD {item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="me-auto mt-2">
                  <p className="mb-0 pb-0">
                    <span className="fs-5 fw-light">Total: </span>
                    {order && (
                      <span className="fw-bold">
                        USD{" "}
                        {Math.round(
                          order.products.reduce(
                            (total, item) => total + item.quantity * item.price, 0) * 100) / 100}
                      </span>
                    )}
                  </p>
                  <p className="small-text mt-0">Shipping & taxes included</p>
                </div>
              </div>
              {/* <textarea
              className="w-75 mx-auto border-0 bg-secondary-subtle fs-5 fw-light mt-5 p-3 mb-5"
              name="orderComment"
              id="orderComment"
              rows="2"
              value={comment}
              disabled
            ></textarea> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
