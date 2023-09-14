import React from "react";
import "./CategoryBtn.css";
import { NavLink } from "react-router-dom";

function CategoryBtn({ href }) {
  return (
    <NavLink to={href}>
      <div className="categoryBtn rounded-0 fs-4 mt-5 justify-content-center">
        <a className="example_f" rel="nofollow">
          <span>SHOP</span>
        </a>
      </div>
    </NavLink>
  );
}

export default CategoryBtn;
