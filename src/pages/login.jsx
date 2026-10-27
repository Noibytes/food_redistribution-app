import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    // ask json-server for a user with this username and password
    fetch(
      "http://localhost:3001/users?username=" + encodeURIComponent(username) +
      "&password=" + encodeURIComponent(password)
    )
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        if (users.length === 1) {
          props.setCurrentUser(users[0]);   // save the logged-in user in App
          navigate("/find-food");
        } else {
          setError("Wrong username or password");
        }
      })
      .catch(() => {
        setError("Server is not running. Start json-server first.");
      });
  }

  return (
    <div>
      <div className="page-header text-center">
        <h1 className="fw-bold">Login</h1>
        <p className="mb-0">Login to donate food and see donor contact details</p>
      </div>

      <div className="container mt-4" style={{ maxWidth: "450px" }}>
        <div className="card info-card p-4">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" className="form-control"
                value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" 
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            {error !== "" && <div className="alert alert-danger">{error}</div>}

            <button type="submit" className="btn btn-brand w-100 rounded-pill py-2">Login</button>
          </form>

          <p className="text-center mt-3 mb-0">
            No account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;