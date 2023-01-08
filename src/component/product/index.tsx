import React from 'react';
import './styles.css';
import "@fontsource/inter"; 

export const Product = () => {
  return (
    <>
      <div className="product-container">
        <div>
          <p className="title-product">Harga lebih murah hingga 60%+</p>
          <p className="content-product">
            Dapatkan harga khusus Reseller Premium yang lebih murah hingga 60%+
            dari harga normal. Dengan harga lebih murah tentunya margin kamu
            bisa lebih besar, dong!
          </p>
        </div>
        <img
          className="harga"
          src={require("../../assets/images/harga.png")}
          alt="harga"
        />
      </div>
    </>
  );
}

export default Product
