import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      "If an account exists with this email, a password reset link has been sent."
    );
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Forgot Password</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">
            Send Reset Link
          </button>

          {message && (
            <p className="success-message">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;