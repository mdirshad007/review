import React, { useState } from "react";

export default function Radio({ mainClassName, labelName, radioData, key, sendDataToParent,radioCallBack }) {
  const [selectedValue, setSelectedValue] = useState(null);
  const radioName = Math.floor((Math.random() * 100000000) + 1);

  const handleChange = (event) => {
    const value = event.target.value === "Yes";
    setSelectedValue(value);
    radioCallBack(value);
  };

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
                  id={`radio-id-${radioName}-${id}`}
                  value={item}
                  checked={selectedValue === (item === "Yes")}
                  onChange={handleChange}
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
