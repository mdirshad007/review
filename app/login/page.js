"use client";
import React, { useEffect, useState } from "react";
import { auth, provider } from "./Config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";

export default function Page() {
  const [value, setValue] = useState({});
  const handelLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.reloadUserInfo);
      // console.log(data.user.reloadUserInfo);
      localStorage.setItem("User", data.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);
  return (
    <div>
      {value ? (
        <Home userDetails={value} />
      ) : (
        <button onClick={handelLogin}>Sign In With Google</button>
      )}
    </div>
  );
}
