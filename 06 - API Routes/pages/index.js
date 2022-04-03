import React, { useRef, useState } from "react";

const HomePage = () => {
  const [entries, setEntries] = useState([]);
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const reqBody = {
      email: emailRef.current.value,
    };

    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleGet = () => {
    fetch("/api/email")
      .then((res) => res.json())
      .then((data) => setEntries(data));
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />
        <button onClick={handleSubmit}>Send</button>
      </form>
      <br />
      <button onClick={handleGet}>Get all entries</button>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>{entry.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
