import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function AccountOrders() {
  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state.user);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const getUser = async () => {
    const response = await axios({
      method: 'GET',
      url: `${baseURL}/users/${user.id}`,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setOrders(response.data.orders);
    console.log(response.data.orders);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    orders && (
      <div>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <tbody>
              <tr>
                <td>{order._id}</td>
                <td>{order.updatedAt}</td>
                <td>{order.subtotal}</td>
                <td>{order.status}</td>
                <td>View Order</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    )
  );
}

export default AccountOrders;
