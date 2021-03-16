import React, { useState } from "react";

export default function UseStateHook() {
  // tuple: mảng hỗn hợp
  const [state, setState] = useState({
    number: 1,
  }); // useState là hàm trả về 1 mảng gồm 2 giá trị là state và phương thức setState
  const [number, setNumber] = useState(0);
  console.log("rendered");
  return (
    <div>
      <h1>
        {state.number} - {number}
      </h1>
      <button
        onClick={() => {
          setState({ number: state.number + 1 });
          setNumber(number + 1);
        }}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
}
