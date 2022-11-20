import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ImgMenu(props) {
  const [imgSize, setSize] = useState(props.width);
  const menuOptions = props.controls
    ? props.controls
    : [
        {
          label: "No Options Provided",
          control: function () {
            console.log("No Function Provided");
          },
          default: "No Function Provided",
        },
      ];

  return (
    <div className={"img-input-container"} style={{ width: `${imgSize}px` }}>
      {menuOptions.map((option) => {
        const id = uuid();
        const handleChange = (e) => {
          const newValue = e.target.value;
          if (option.state === true) {
            if (isNaN(newValue)) {
              // not a number
              return;
            } else {
              setSize(newValue);
            }
          }
          console.log(newValue);
          option.control(newValue);
        };
        return (
          <div key={id} className={"img-input"}>
            <label htmlFor={id}>{option.label + ": "}</label>
            <input
              type={option.type ? option.type : "text"}
              onChange={handleChange}
              defaultValue={option.default}
              id={id}
            />
          </div>
        );
      })}
    </div>
  );
}
