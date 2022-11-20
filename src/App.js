import React, { useState } from "react";
import ImgParent from "./components/ImgParent";
import { v4 as uuid } from "uuid";

function App() {
  const [imgs, setImgs] = useState([]);
  function handlePrint() {
    window.print();
  }

  const addImg = () => {
    setImgs((imgs) => {
      return [...imgs, uuid()];
    });
  };

  return (
    <div className="App">
      <div id="printable">
        {imgs.length > 0
          ? imgs.map((key) => {
              return (
                <div key={key}>
                  <ImgParent />
                </div>
              );
            })
          : null}
      </div>
      <button type="button" onClick={addImg}>
        Add Image
      </button>
    </div>
  );
}

export default App;
