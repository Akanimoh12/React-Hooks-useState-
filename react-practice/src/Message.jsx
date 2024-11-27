import { useState } from "react";
import ReactDOM from "react-dom/client";

function CarName() {
  const [car, setCar] = useState("4Runner");

  return (
    <>
      <h1>My best car is {car}!</h1>
      <button
        type="button"
        onClick={() => setCar("Volvo")}
      >Change to Volvo</button>
    </>
  )
}

export default CarName;

function Message() {
    const name = "Johnson"
    const age = 30;
    return <h1>Hello {name + age}</h1>
}

// export default Message;