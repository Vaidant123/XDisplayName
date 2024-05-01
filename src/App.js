import React, { useState } from "react";
import "./App.css";

function FullNameDisplay() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [formError, setFormError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName.trim() === "" || lastName.trim() === "") {
      setFormError(true);
    } else {
      setFullName(`${firstName} ${lastName}`);
      setFormError(false);
    }
  };

  return (
    <div className="container">
      <h2>Full Name Display</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && !formError && (
        <div className="fullname-display">
          <p> Full Name: {fullName}</p>
        </div>
      )}
    </div>
  );
}

export default FullNameDisplay;
