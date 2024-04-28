"use client"
import React from "react";

export default function Textarea({labelName="Label",className,key}) {
  return (
    <div className="mt-5" key={key}>
      <label
        htmlFor={`textarea`}
        className="block mb-4"
      >
        {labelName}
      </label>
      <textarea
        id="message"
        rows="4"
        className={`appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 focus:border-green-700 placeholder:text-sm rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${className}`}
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
}
