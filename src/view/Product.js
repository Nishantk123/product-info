import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../component/Header";

const Product = () => {
  const [Product, setproduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  console.log(Product);
  return (
    <div>
      <Header />
      <h6 className="text-center my-3">All Product</h6>
      <div className="container">
        <div className="row  justify-content-center">
          {Product.map((data, array) => {
            return (
              <div className=" col-xs-12 col-sm-6 col-md-4 col-lg-4 mb-5" key={array}>
                <div className="card">
                  <div className="card-body">
                    <img className="mt-3" src={data.image} />
                    <div className="text-center">{data.title}</div>
                    <div className="text-center">{data.price}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;