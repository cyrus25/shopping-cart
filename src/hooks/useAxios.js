import React from "react";
import axios from "axios";
const useAxios = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = async () => {
    try {
      const source = axios.CancelToken.source();
      const result = await axios.get("https://fakestoreapi.com/products", {
        cancelToken: source.token,
      });
      setData(result.data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return { loading, error, data };
};

export default useAxios;
