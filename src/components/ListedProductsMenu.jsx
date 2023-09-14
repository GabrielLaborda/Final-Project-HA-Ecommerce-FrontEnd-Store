import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./ListedProductsMenu.css";

function ListedProductsMenu() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#121212" : "gray",
      fontSize: isActive ? "1.1em" : "1em",
    };
  };

  return (
    <div className="col-3 d-flex justify-content-start">
      <div className="w-100">
        <ul className="ps-0">
          <li className="fw-bold fs-3 p-0 text-black">SHOP</li>
          <hr className="p-0 my-2" />
          <li className="p-0 m-0">
            <NavLink
              className={"text-decoration-none"}
              to={"/products"}
              end
              style={navLinkStyles}
            >
              ALL PRODUCTS
            </NavLink>
          </li>
          <li className="p-0 m-0">
            <NavLink
              className={"text-decoration-none"}
              to={"/products/completes"}
              style={navLinkStyles}
            >
              COMPLETES
            </NavLink>
          </li>
          <li className="p-0 m-0">
            <NavLink
              className={"text-decoration-none"}
              to={"/products/decks"}
              style={navLinkStyles}
            >
              DECKS
            </NavLink>
          </li>
          <li className="p-0 m-0">
            <NavLink
              className={"text-decoration-none"}
              to={"/products/trucks"}
              style={navLinkStyles}
            >
              TRUCKS
            </NavLink>
          </li>
          <li className="p-0 m-0">
            <NavLink
              className={"text-decoration-none"}
              to={"/products/wheels"}
              style={navLinkStyles}
            >
              WHEELS
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ListedProductsMenu;
