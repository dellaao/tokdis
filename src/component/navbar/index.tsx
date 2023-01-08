import React, { useEffect, useState } from "react";
import "./styles.css";
import Button from "../button";
import { ReactComponent as Logo } from "../../assets/images/tokodistributor.svg";

const Navbar = () => {
    const [navColor, setnavColor] = useState("transparent");
    const [logoColor, setlogoColor] = useState("grayscale(100%)");
    const listenScrollEvent = () => {
      window.scrollY > 10 ? setnavColor("#ffff") : setnavColor("transparent");
      window.scrollY > 10
        ? setlogoColor(
            "invert(56%) sepia(76%) saturate(6345%) hue-rotate(333deg) brightness(89%) contrast(102%)"
          )
        : setlogoColor("grayscale(100%)");
    };
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);

  return (
    <nav
      className={"navbar"}
      style={{
        backgroundColor: navColor,
        transition: "all 1s",
      }}
    >
      <div className={"logo-navbar-container"}>
        <Logo
          className="tokdis-logo"
          style={{
            filter: logoColor,
            transition: "all 1s",
          }}
        />
      </div>
      <div className="button-logo">
        <Button
          border={"none"}
          color={"white"}
          height={"32px"}
          onClick={() => console.log("")}
          radius={"6px"}
          width={"127px"}
          children={"Daftar Sekarang"}
          padding={"8px 16px"}
          fontSize={"12px"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
