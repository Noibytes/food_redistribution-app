import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleRegister(event) {
    event.preventDefault();

    // 1. check if the username is already taken
    fetch("http://localhost:3001/users?username=" + encodeURIComponent(username))
      .then((response) => response.json())
      .then((existing) => {
        if (existing.length > 0) {
          setError("Username already exists");
          return;
        }

        // 2. save the new user to the server
        return fetch("http://localhost:3001/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: username, password: password }),
        }).then(() => {
          navigate("/login");
        });
      })
      .catch(() => {
        setError("Server is not running. Start json-server first.");
      });
  }

  return (
    <div>
      <div className="page-header text-center">
        <h1 className="fw-bold">Register</h1>
        <p className="mb-0">Create an account to donate food</p>
      </div>

      <div className="container mt-4" style={{ maxWidth: "450px" }}>
        <div className="card info-card p-4">
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" required
                value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" required
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            {error !== "" && <div className="alert alert-danger">{error}</div>}

            <button type="submit" className="btn btn-brand w-100 rounded-pill py-2">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;