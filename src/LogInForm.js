import React from "react";

export const LoginForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        UserName:
        <input type="text" />
        Password:
        <input type="text" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
