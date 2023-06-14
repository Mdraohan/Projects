import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

            
const Load  = () => {
    return(
      <>
      loading....
      </>
    )
  };
  const ShowProd = () => {
    return (
     <>
     
     </>
    );
  };
  return (
    <>
    <div className="container">
        <div className="row">
          {
            loading ? <Load/> : <ShowProd/>
          }
        </div>
        </div>
    </>
  );
}

export default Product;
