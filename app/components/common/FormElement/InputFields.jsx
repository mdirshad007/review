"use client"
import React from "react";

export default function InputFields({
    labelName="Label Name",
    className="",
    labelClassName="",
    mainDivClassName="",
    placeholder="",
    type="text",
    id="",
    error="Please fill out this field.",
    required

}) {
  return (
    <div className={`w-full mb-6 md:mb-0 ${mainDivClassName}`}>
      <label
        className={`block tracking-wide text-gray-700 text-base mb-2 ${labelClassName}`}
        htmlFor={id}
      ><span>{required}</span>
        {labelName}
      </label>
      <input
        className={`appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 focus:border-green-700 placeholder:text-sm rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${className}`}
        id={{id}}
        type={type}
        placeholder={placeholder}
      />
      <p className="text-red-500 text-xs italic">{error}</p>
    </div>
  );
}
