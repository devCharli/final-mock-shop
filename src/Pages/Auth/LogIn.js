import "./auth.css";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { ItemContext } from "../../ContextProvider/ContextProvider";

const LogIn = () => {
  const [email, setEmail] = useState(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      return savedEmail;
    } else {
      return "";
    }
  });
  const [password, setPassword] = useState("");

  const history = useHistory();
  const { setIsLoggedIn } = useContext(ItemContext);

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Enter your information");
    }

    setIsLoggedIn(true);
    localStorage.setItem("login", true);
    history.push("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-control">
          <h2>Sign in to your account</h2>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
