import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState({});
  const [value, setValue] = useState("");

  function handleChange(Value) {
    setValue(Value);
  }

  const handleSubmit = async () => {
    await fetch(`/requested_amount`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: value }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <label htmlFor="famount"> amount:</label>
      <input
        type="amount"
        id="famount"
        name="famount"
        onChange={(e) => handleChange(e.target.value)}
      />
      <br />
      <button onClick={() => handleSubmit()}>Send</button>

      {data && <div>{data.amount} </div>}
    </div>
  );
}
