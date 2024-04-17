import React from "react";

export default function Textarea({labelName="Label",className}) {
  return (
    <div className="mt-5">
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
