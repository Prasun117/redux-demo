import React from "react";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/store";
export const Header = (props) => {
  const isAuthenticted = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(authActions.loginIn());
    console.log(isAuthenticted);
  };
  const handleLogout = () => {
    dispatch(authActions.logOut());
  };
  return (
    <div className="top-header">
      <div className="heading">Welocome to Demo</div>
      {!isAuthenticted && (
        <div>
          <Login handleLogin={handleLogin} />
        </div>
      )}
      {isAuthenticted && (
        <div>
          <Logout handleLogout={handleLogout} />{" "}
        </div>
      )}
      <div>Welocome to Demo</div>
    </div>
  );
};
