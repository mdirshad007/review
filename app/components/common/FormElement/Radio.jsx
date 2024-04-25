import React from "react";

export default function Radio({ mainClassName, labelName,radioData }) {
  const a=[1,2,3];
  return (
    <div className={mainClassName}>
      <p className="mb-4">{labelName}</p>
      <div className="flex items-center mb-4">
        <div className="flex gap-x-6">
          

          {radioData?.map((item, id) => (
            <div className="flex" key={item.id}>
            <input
              type="radio"
              name="hs-radio-group"
              className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              id={`radio-id-`+id}
              value={item}
            />
            <label htmlFor={`radio-id-`+id} className="text-sm text-gray-500 ms-2 cursor-pointer">
            {item}
            </label>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
