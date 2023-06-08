import { Link } from "react-router-dom";
import AuthService from "./services/auth.service";

export const Navigation = () => { 

    const [currentUser, setCurrentUser] = useState(undefined);
  
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
    return(
    <nav className="navbar navbar-expand navbar-dark bg-dark">
    <div className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to={"/home"} className="nav-link">
          <img
            align="center"
            alt="logo"
            className="logo"
            src="src\components\Images\Logopit_cover2.png"
          />
        </Link>
      </li>

      {currentUser && (
        <li className="nav-item">
          <Link to={"/home/post"} className="nav-link">
            Posts
          </Link>
        </li>
      )}
    </div>

    {currentUser ? (
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <a href="/login" className="nav-link" onClick={logOut}>
            Logout
          </a>
        </li>
      </div>
    ) : (
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/authenticate"} className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/register"} className="nav-link">
            Sign Up
          </Link>
        </li>
      </div>
    )}
  </nav>

);}
