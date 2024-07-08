import "./App.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name });
    alert(`The name you entered was: ${name}`);
  };
  return (
    <>
      <div>
        Hi..!
        <div className="container">
          <form
            onSubmit={handleSubmit}
            style={{ background: "white", width: "150%", height: "20vh" }}
          >
            <h2 className="text-center">Welcome to our website</h2>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control "
            />
            <button type="Submit" className="btn btn-dark offset-4 pt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
