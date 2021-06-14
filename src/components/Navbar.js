import React from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
export default function Navbar() {
  const { cartList } = React.useContext(AppContext);

  return (
    <div className="flex items-center justify-between px-5 text-white bg-blue-300 h-14">
      <Link to="/home" className="font-bold">
        Home
      </Link>
      <div className="flex space-x-3">
        <Link to="/cart">
          Cart{" "}
          {cartList.length > 0 ? (
            <sub className="text-gray-200">{cartList.length}</sub>
          ) : (
            ""
          )}
        </Link>
        <button>Logout</button>
      </div>
    </div>
  );
}
