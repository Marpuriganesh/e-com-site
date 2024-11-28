import "./css/Login.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "./context";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLogined } = useContext(myContext);
  const navigate = useNavigate();
  const handleSudmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setIsLogined(true);
      navigate("/dasboard");
    }
  };

  return (
    <>
      <div className="login_container">
        <h1>login</h1>
        <form onSubmit={handleSudmit}>
          <input
            type="text"
            placeholder="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button type="submit">login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
