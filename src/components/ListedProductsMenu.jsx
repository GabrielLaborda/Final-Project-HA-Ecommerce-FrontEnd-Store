import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ListedProductsMenu.css';
import axios from 'axios';

function ListedProductsMenu() {
  const [categories, setCategories] = useState([]);
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? '#121212' : 'gray',
      fontSize: isActive ? '1.1em' : '1em',
    };
  };

  const getCategories = async () => {
    const response = await axios({
      method: 'GET',
      url: `${baseURL}/categories`,
    });
    setCategories(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="w-100">
      {categories.length > 0 && (
        <ul className="px-0">
          <li className="fw-bold fs-3 p-0 text-black">SHOP</li>
          <hr className="p-0 my-2" />
          <li className="p-0 m-0">
            <NavLink className={'text-decoration-none'} to={'/products/'} end style={navLinkStyles}>
              ALL PRODUCTS
            </NavLink>
          </li>
          {categories.map((category) => (
            <li className="p-0 m-0" key={category._id}>
              <NavLink
                className={'text-decoration-none'}
                to={`/products/${category.slug}`}
                style={navLinkStyles}
              >
                {category.name.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListedProductsMenu;
