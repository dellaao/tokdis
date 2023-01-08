/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Button from '../button';
import "./styles.css";
import "@fontsource/inter"; 
import { useMediaQuery } from "react-responsive";

const LandingPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className='lp-bg-bottom'>
      <div className="lp-bg">
        <div className="landing-page-container">
          <div className="lp-container">
            <p className="title-lp">
              Reselling lebih Untung dengan Penghasilan Lebih dari 10jt/ bulan
            </p>
            <p className="content-lp">
              Dapatkan harga khusus premium yang lebih murah hingga 60%+ dengan
              menjadi Reseller Premium
            </p>

            {isTabletOrMobile ? (
              <Button
                border={"none"}
                color={"white"}
                height={"46px"}
                onClick={() => console.log("daftar")}
                radius={"10px"}
                width={"272px"}
                children={"Daftar Sekarang >"}
                padding={"12px 24px"}
                fontSize={"16px"}
              />
            ) : (
              <Button
                border={"none"}
                color={"white"}
                height={"46px"}
                onClick={() => console.log("daftar")}
                radius={"10px"}
                width={"202px"}
                children={"Daftar Sekarang >"}
                padding={"12px 24px"}
                fontSize={"16px"}
              />
            )}
          </div>
          <img
            className="woman-picture"
            src={require("../../assets/images/woman.png")}
            alt="picture"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage