import React from "react";
import useAxios from "../hooks/useAxios";
import AppContext from "../context/AppContext";
import ProductList from "./ProductList";
const Home = () => {
  const { data: products, loading, error } = useAxios();

  //  const { products, addToCart } = React.useContext(AppContext);

  return (
    <div className="min-h-screen px-5 py-5 bg-gray-100">
      {error && <div>Error</div>}
      {loading && <div className="">Loading...</div>}
      {products && <ProductList products={products} />}
    </div>
  );
};

export default Home;
