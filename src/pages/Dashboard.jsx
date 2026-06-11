import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <div className="dashboard">

      <nav className="navbar">
        <h2>My Dashboard</h2>

        <button onClick={logout}>
          Logout
        </button>
      </nav>

      <div className="content">

        <div className="card">
          <h3>Total Users</h3>
          <p>1250</p>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <p>$25,000</p>
        </div>

        <div className="card">
          <h3>Orders</h3>
          <p>356</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;