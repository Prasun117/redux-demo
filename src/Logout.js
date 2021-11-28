import React from "react";

export const LogOut = (props) => {
  const { handleLogout } = props;
  return (
    <div>
      <button className="button-logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
