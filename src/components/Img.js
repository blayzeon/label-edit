import React from "react";

export default function Img(props) {
  const img = props.img;

  const toggleMenu = () => {
    props.setMenu((prevState) => {
      return !prevState;
    });
  };

  return (
    <img
      src={img.url}
      width={img.width}
      className={img.class}
      onClick={toggleMenu}
    />
  );
}
