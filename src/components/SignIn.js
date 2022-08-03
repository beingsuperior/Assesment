import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/SignIn.css";
import { useCreateAuthDispatchContext } from "../authprovider/AuthProvider";

function SignIn() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { handleAuthChange } = useCreateAuthDispatchContext();

  const Navigate = useNavigate();
  const handleOnClick = () => {
    if (userName !== "admin" && userPassword !== "admin123") {
      return;
    }
    handleAuthChange(true);
    Navigate("/cart");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={userPassword}
        onChange={(e) => {
          setUserPassword(e.target.value);
        }}
      />

      <button onClick={handleOnClick}>Login</button>
    </div>
  );
}

export default SignIn;
