import React, { useState } from "react";
import Img from "./Img";
import ImgMenu from "./ImgMenu";
import "./ImgStyle.css";

export default function ImgParent(props) {
  // Show/Hide menu when image is clicked on
  const [showMenu, setMenu] = useState(false);

  // Default image properties
  const DEFAULT_WIDTH = 500;
  const DEFAULT_IMG =
    "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9";

  const defaultImg = {
    url: DEFAULT_IMG,
    width: DEFAULT_WIDTH,
    unit: "px",
    class: "img-default",
  };

  // Set image properties
  const [imgUrl, setUrl] = useState(defaultImg.url);
  const [imgWidth, setWidth] = useState(defaultImg.width);

  const img = { ...defaultImg, ...{ url: imgUrl, width: imgWidth } };

  // Menu controls
  const menuControls = [
    {
      label: "Image url",
      control: setUrl,
      default: imgUrl,
      type: "text",
    },
    {
      label: `Size in ${defaultImg.unit}`,
      control: setWidth,
      default: imgWidth,
      type: "number",
      state: true,
    },
  ];

  return (
    <div className="img-controls-container">
      {showMenu ? (
        <ImgMenu controls={menuControls} width={DEFAULT_WIDTH} />
      ) : null}

      <div className="img-container">
        <Img img={img} setMenu={setMenu} />
      </div>
    </div>
  );
}
