import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthService from "./services/auth.service";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import { Footer } from "./Footer";
import { Home } from "./Home";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-nav mr-auto">
          <a className="nav-item">
            <Link to={"/home"} className="nav-link">
              <img
                align="center"
                alt="logo"
                className="nav-logo"
                src="src\components\Images\Logopit_icon4.png"
              />
            </Link>
          </a>

          {currentUser && (
            <button className="nav-item">
              <Link to={"/home/post"} className="nav-link">
                Posts
              </Link>
            </button>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav mr-auto">
            <button className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                Logout
              </a>
            </button>
          </div>
        ) : (
          <div className="navbar-nav mr-auto">
            <button
              className="nav-item"
              onClick={() => navigate("/authenticate")}
            >
              LOGIN
            </button>
            <button className="nav-item"
            onClick={() => navigate("/register")}>
                SIGN UP
            </button>
          </div>
        )}
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/authenticate" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      {/* {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )} */}
      <Footer />
    </div>
  );
}

export default App;
