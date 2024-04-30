import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CreateGrid() {
  const GridCol1 = [];
  const GridCol2 = [];
  const GridCol3 = [];

  for (let i = 1; i < 4; i++) {
    GridCol1.push(
      <div
        key={i}
        className={`col button${i}`}
        onClick={() => console.log(i)}
      ></div>
    );
  }

  for (let i = 4; i < 7; i++) {
    GridCol2.push(
      <div
        key={i}
        className={`col button${i}`}
        onClick={() => console.log(i)}
      ></div>
    );
  }

  for (let i = 7; i < 10; i++) {
    GridCol3.push(
      <div
        key={i}
        className={`col button${i}`}
        onClick={() => console.log(i)}
      ></div>
    );
  }

  return (
    <div className="container-max-width">
      <div className="container">
        <div className="row">{GridCol1}</div>
        <div className="row">{GridCol2}</div>
        <div className="row">{GridCol3}</div>
      </div>
    </div>
  );
}

export default CreateGrid;
