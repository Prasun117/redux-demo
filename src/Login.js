import React from "react";

export const Login = (props) => {
  const { handleLogin } = props;
  return (
    <div>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
