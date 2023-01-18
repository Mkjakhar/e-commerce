import React, { useContext, useState } from "react";
import { CartContext } from "../context/Context";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const { settoggleLogin, loginData, setuserDeatil, setafterLogin } =
    useContext(CartContext);
  const [reLogin, setreLogin] = useState({
    UserName: "",
    Password: "",
  });
  const openSignUp = () => {
    settoggleLogin(false);
  };
  const loginSubmit = () => {
    loginData.find((curElem) => {
      if (
        curElem.Email === reLogin.UserName &&
        curElem.Password === reLogin.Password
      ) {
        return history.push("/"), setuserDeatil(curElem), setafterLogin(false);
      } else {
        // return alert("wrong");
      }
    });
    setreLogin({ UserName: "", Password: "" });
  };
  const handleLogin = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setreLogin({ ...reLogin, [name]: value });
  };
  return (
    <>
      <div className="form_box">
        <form
          onSubmit={(e) => {
            e.preventDefault(loginSubmit());
          }}
          action=""
          className="w-100"
        >
          <div className="d-flex flex-column">
            <label htmlFor="Username">Username</label>
            <input
              required
              className="rounded-2 border border-2 p-1"
              id="Username"
              type="text"
              name="UserName"
              value={reLogin.UserName}
              onChange={handleLogin}
            />
          </div>
          <div className="d-flex flex-column mt-3">
            <label htmlFor="password">Password</label>
            <input
              required
              className="rounded-2 border border-2 p-1"
              id="password"
              type="password"
              name="Password"
              value={reLogin.Password}
              onChange={handleLogin}
            />
          </div>
          <div className="d-flex justify-content-between gap-3 align-items-center mt-5">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <span>or</span>
            <button onClick={() => openSignUp()} className="btn btn-primary">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
