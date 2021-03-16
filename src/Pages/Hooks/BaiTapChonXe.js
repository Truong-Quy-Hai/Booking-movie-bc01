import React, { useState } from "react";

const colors = {
  black: "./assets/images/car/icons/icon-black.jpg",
  red: "./assets/images/car/icons/icon-red.jpg",
  silver: "./assets/images/car/icons/icon-silver.jpg",
  steel: "./assets/images/car/icons/icon-steel.jpg",
};

export default function BaiTapChonXe() {
  const [car, setCar] = useState("./assets/images/car/products/black-car.jpg");
  const handleClick = (color) => {
    setCar(`./assets/images/car/products/${color}-car.jpg`);
  };
  return (
    <div className="container">
      <h1>Bài tập chọn màu xe</h1>
      <div className="row">
        <div className="col-6">
          <img src={car} alt="" width="100%" />
        </div>
        <div className="col-4">
          <h2>Màu</h2>
          <img
            onClick={() => handleClick("black")}
            src={colors.black}
            width="20px"
            alt=""
            style={{ marginRight: 10 }}
          />
          <img
            onClick={() => handleClick("red")}
            src={colors.red}
            width="20px"
            alt=""
            style={{ marginRight: 10 }}
          />
          <img
            onClick={() => handleClick("silver")}
            src={colors.silver}
            width="20px"
            alt=""
            style={{ marginRight: 10 }}
          />
          <img
            onClick={() => handleClick("steel")}
            src={colors.steel}
            width="20px"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
