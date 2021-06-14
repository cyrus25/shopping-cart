import React from "react";
import AppContext from "../context/AppContext";
const ProductList = ({ products }) => {
  const { cartList, addToCart, deleteFromCart } = React.useContext(AppContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  console.log(cartList);
  const handleDeleteFromCart = (product) => {
    deleteFromCart(product);
  };

  return (
    <div className="grid grid-cols-3 gap-x-3 gap-y-5">
      {products.map((product, idx) => {
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
            <footer className="flex space-x-3">
              <button
                onClick={() => {
                  handleAddToCart(product);
                }}
                className="px-10 py-2 text-white bg-green-500 rounded-lg"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  handleDeleteFromCart(product);
                }}
                className="px-5 py-2 text-white bg-red-500 rounded-lg"
              >
                Delete from Cart
              </button>
            </footer>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
