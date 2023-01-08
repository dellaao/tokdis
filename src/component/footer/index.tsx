import React from 'react'
import './styles.css'
import "@fontsource/inter"; 
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className='footer-bg'>
      <div className="footer-container">
        <div className="footer-cn">
          <div className={"logo-footer-container"}>
            <img
              className="tokdis-logo-footer"
              src={require("../../assets/images/tokodistributor-logo.png")}
              alt="toko-distributor"
            />
          </div>
          <p className="footer-content">Unduh Aplikasi Tokodistributor</p>
          <img
            className="gp-logo"
            src={require("../../assets/images/gp.png")}
            alt="google-play"
          />
          <div className="social-media">
            <img
              className="sc-logo"
              src={require("../../assets/images/ig.png")}
              alt="logo-ig"
            />
            <img
              className="sc-logo"
              src={require("../../assets/images/yt.png")}
              alt="logo-yt"
            />
            <img
              className="sc-logo"
              src={require("../../assets/images/li.png")}
              alt="logo-li"
            />
            <img
              className="sc-logo"
              src={require("../../assets/images/fb.png")}
              alt="logo-fb"
            />
          </div>
        </div>
        {isTabletOrMobile ? (
          <img
            className="wa-logo"
            src={require("../../assets/images/button-wa-768.png")}
            alt="whatsapp"
          />
        ) : (
          <img
            className="wa-logo"
            src={require("../../assets/images/button-wa.png")}
            alt="whatsapp"
          />
        )}
      </div>
    </div>
  );
}

export default Footer