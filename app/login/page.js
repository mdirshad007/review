"use client";
import React, { useEffect, useState } from "react";
import { auth, provider } from "./Config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";

export default function Page() {
  const [value, setValue] = useState({});
  const handelLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data.user);
      setValue(data.user);
      localStorage.setItem("email", data.user.email);
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
