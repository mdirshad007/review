"use client"
import React, { useEffect, useState } from "react";
import InputText from "@/app/components/common/FormElement/InputText";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import ImageUploading from "react-images-uploading";
// import 'react-select-search/style.css'
import SelectSearch from 'react-select-search';

export default function ProfileForm() {
  const [storeName, setStoreName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [foundingYear, setFoundingYear] = useState(null);
  const [images, setImages] = useState([]);
  const [dropdownOption, setDropdownOption] = useState([]);
  const maxNumber = 69;

  const onImageChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleStoreName = (inputData) => {
    setStoreName(inputData);
  };

  const handleTagLine = (inputData) => {
    setTagLine(inputData);
  };

  const [dateValue, onChange] = useState(new Date());

  const maxDate = new Date(); // Current date

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };

  const handelSubmitStore = () => {
    const formData = new FormData();
    formData.append("store_name", storeName);
    formData.append("tag_line", tagLine);
    formData.append("founding_year", foundingYear);
    formData.append("file", images[0].file);
    formData.append("user_id", "4");

    postStore(formData);
    console.log(formData);
  };

  const postStore = async (formData) => {
    try {
      const response = await fetch(
        "https://review-reflection.vercel.app/store/profile",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (dateValue instanceof Date) {
      setFoundingYear(dateValue.getFullYear());
    }
  }, [dateValue]);

  const fetchDropdown = async () => {
    try {
      const dropdownData = await fetch('https://review-reflection.vercel.app/data/store-category');
      const dropdown = await dropdownData.json();
      return dropdown.map(item => ({
        name: item.store_category_name,
        value: item.id // Assuming "id" is the unique identifier for each category
      }));
    } catch (error) {
      console.error("Error fetching store data:", error);
      return [];
    }
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDropdown();
      setDropdownOption(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputText
          labelName="Enter Your Store Name"
          sendDataToParent={handleStoreName}
        />
        <InputText
          labelName="Enter Your Tag Line"
          sendDataToParent={handleTagLine}
        />
        <p className="my-3">Select Your Year</p>
        <DatePicker
          onChange={onChange}
          value={dateValue}
          maxDate={maxDate}
          className={`z-50 appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 focus:border-green-700 placeholder:text-sm rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        />

<div className="mb-5">
          <p className="my-3">Select Store Category</p>
          <SelectSearch
            options={dropdownOption}
            search
            placeholder="Select category..." // Placeholder text
            onChange={(value) => console.log(value)} // Handle selected option
          />
        </div>


        {/* Upload image code */}
        <ImageUploading
          value={images}
          onChange={onImageChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({ imageList, onImageUpload, isDragging, dragProps }) => (
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                className="border border-gray-400 p-2 rounded-md"
              >
                Click or Drop here your Logo
              </button>
              &nbsp;
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                </div>
              ))}
            </div>
          )}
        </ImageUploading>

        
        <br />
       
        <button
          onClick={handelSubmitStore}
          type="submit"
          className={`bg-green-700 text-white font-bold text-base flex justify-center items-center h-14 px-5 gap-3 rounded-lg mt-5`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
