import React, { useState } from "react";
import Img from "./Img";
import ImgMenu from "./ImgMenu";
import "./ImgStyle.css";

export default function ImgParent(imgObj = {}) {
  const [showMenu, setMenu] = useState(false);

  const defaultImg = {
    url: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
    height: 100,
    width: 200,
    unit: "px",
    class: "img-default",
  };

  const img = { ...defaultImg, ...imgObj };

  return (
    <div className="img-container">
      <Img img={img} setMenu={setMenu} />
      {showMenu ? <ImgMenu /> : null}
    </div>
  );
}
