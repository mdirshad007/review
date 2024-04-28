"use client"
import React from "react";

export default function Radio({ mainClassName, labelName,radioData,key }) {
  const a=[1,2,3];
  let radioName=Math.floor((Math.random() * 100000000) + 1);
  return (
    <div className={mainClassName} key={key}>
      <p className="mb-4">{labelName}</p>
      <div className="flex items-center mb-4">
        <div className="flex gap-x-6">
          

          {radioData?.map((item, id) => (
            <div className="flex" key={item.id}>
              <label className="text-sm text-gray-500 ms-2 cursor-pointer">
            <input
              type="radio"
              name={radioName}
              className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              id={`radio-id-`+radioName}
              value={item}
            />
            <span className="ml-2">{item}</span>
            </label>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
