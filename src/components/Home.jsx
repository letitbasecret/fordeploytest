// import React from 'react'
import { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    alert(`The name you entered was: ${name}`);
  };
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    let Data = await fetch("http://127.0.0.1:8000/api/show");
    let response = await Data.json();
    console.log(response);
  }
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
