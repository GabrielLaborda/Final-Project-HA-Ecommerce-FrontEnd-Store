import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './AccountOrders.css';
import { toast } from 'react-toastify';

function AccountOrders() {
  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state.user);
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const notifyError = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    useEffect(() => {
  const getUser = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `${baseURL}/users/${user.id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      return setOrders(response.data.orders);
    } catch (err) {
      console.log(err.response.data.msg);
      return notifyError(err.response.data.msg);
      }
    };
      getUser();
    }, []);

  return (
    <div>
      {orders.length === 0 && <p className="account-data-p">You haven't placed any orders yet.</p>}
      {orders.length > 0 && (   
        <div>
            <table>
                <thead>
                    <tr>
                        <th >Order Id</th>
                        <th className='hide-on-responsive'>Date</th>
                        <th className='hide-on-responsive'>Total</th>
                        <th className='hide-on-responsive'>Status</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                    <tr key={order._id}>
                        <td>{order._id}</td>
                        <td className='hide-on-responsive'>{new Date(order.updatedAt).toLocaleDateString()}</td>
                        <td className='hide-on-responsive'> USD {order.subtotal.toFixed(2)}</td>
                        <td className='hide-on-responsive'>{order.status.status}</td>
                        <td><NavLink to={`/orders/${order._id}`}>View Order</NavLink></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      )}
    </div>
  );
}

export default AccountOrders;
