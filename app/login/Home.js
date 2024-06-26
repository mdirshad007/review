import React from "react";

export default function Home({ userDetails }) {
  console.log(userDetails);
  return (
    <div className="text-center p-[100px]">
      <img src={userDetails.photoURL} className="mx-auto rounded-full mb-5" />
      <h1 className="text-2xl">Welcome to {userDetails.displayName}</h1>
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  );
}
