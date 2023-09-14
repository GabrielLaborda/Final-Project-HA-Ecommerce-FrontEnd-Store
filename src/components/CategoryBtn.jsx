import React from "react";
import "./CategoryBtn.css";
import { NavLink } from "react-router-dom";

function CategoryBtn({ href }) {
  return (
    <NavLink to={href}>
      <div className="categoryBtn rounded-0 fs-4 mt-5 justify-content-center">
        <div className="example_f">
          <span>SHOP</span>
        </div>
      </div>
    </NavLink>
  );
}

export default CategoryBtn;
