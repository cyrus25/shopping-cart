import React from "react";
import AppContext from "../context/AppContext";

const Cart = () => {
  const { cartList, editCart, addToCart, deleteFromCart } = React.useContext(
    AppContext
  );

  return (
    <div className="grid grid-cols-3 py-10 gap-x-3 gap-y-5">
      {cartList.map((product, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col justify-between space-y-2 bg-gray-100"
          >
            <header>
              <img
                className="w-20 h-20"
                src={product.image}
                alt={product.title}
              />
            </header>
            <section>
              <div className="font-semibold">{product.title}</div>
              <main className="text-sm ">
                {product.description}
                <div></div>
              </main>
            </section>
            <footer className="flex justify-center space-x-3">
              <input
                onChange={(e) => {
                  console.log(e.target.value);
                  // editCart(product.id, e.target.value);
                }}
                type="number"
              ></input>
            </footer>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
