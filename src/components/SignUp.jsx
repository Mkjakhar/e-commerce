import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/Context";

const SignUp = () => {
  const { handleInput, settoggleLogin, loginDetail, SignUpSubmit } =
    useContext(CartContext);

  return (
    <>
      <div className="form_box">
        <form onSubmit={SignUpSubmit} className="w-100">
          <div className="d-flex flex-column">
            <label htmlFor="Username">Username</label>
            <input
              required
              onChange={handleInput}
              className="rounded-2 border border-2 p-1"
              id="Username"
              type="text"
              name="UserName"
              value={loginDetail.UserName}
            />
          </div>
          <div className="d-flex flex-column mt-3">
            <label htmlFor="E-mail">E-mail</label>
            <input
              required
              onChange={handleInput}
              className="rounded-2 border border-2 p-1"
              id="E-mail"
              type="email"
              name="Email"
              value={loginDetail.Email}
            />
          </div>
          <div className="d-flex flex-column mt-3">
            <label htmlFor="password">Password</label>
            <input
              required
              onChange={handleInput}
              className="rounded-2 border border-2 p-1"
              id="password"
              type="password"
              name="Password"
              value={loginDetail.Password}
            />
          </div>
          <div className="d-flex justify-content-between gap-3 align-items-center mt-5">
            <button
              onClick={() => settoggleLogin(true)}
              type="submit"
              className="btn btn-primary"
            >
              Login
            </button>
            <span>or</span>
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </form>
      </div>
      {/* <div className="box"></div> */}
    </>
  );
};

export default SignUp;
