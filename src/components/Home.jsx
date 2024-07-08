// import React from 'react'
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    alert(`The name you entered was: ${name}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-contol"
          name="email"
          placeholder="Enter your Email"
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn btn-dark">
          Submits
        </button>
      </form>
    </div>
  );
}
