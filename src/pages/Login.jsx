import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
        setError(""); // Clear old error msg
      localStorage.setItem("loggedIn", true);
      navigate("/dashboard");
    } else {
      //alert("Invalid Credentials");
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Welcome Back 👋</h1>
        <p>Please login to continue</p>

        <form onSubmit={login}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <p className="forgot-password">
  <a href="/forgot-password">Forgot Password?</a>
</p>
            {error && (
            <p className="error-message">
           {error}
             </p>
            )}
          <button type="submit">
            Login
          </button>
        </form>

      </div>
    </div>
  );
}

export default Login;