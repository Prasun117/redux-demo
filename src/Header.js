import React from "react";
import { Login } from "./Login";
import { LogOut } from "./Logout";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store/store";

export const Header = (props) => {
  const isAuthenticted = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(authActions.logIn());
  };
  const handleLogout = () => {
    dispatch(authActions.logOut());
  };
  return (
    <div className="top-header">
      <div className="heading">Welocome to Demo</div>
      {!isAuthenticted && <Login handleLogin={handleLogin} />}
      {isAuthenticted && <LogOut handleLogout={handleLogout} />}
    </div>
  );
};
