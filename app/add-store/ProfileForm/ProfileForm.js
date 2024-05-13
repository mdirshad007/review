"use client";
import React, { useEffect, useState } from "react";
import InputText from "@/app/components/common/FormElement/InputText";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import ImageUploading from "react-images-uploading";

export default function ProfileForm() {
  const [storeName, setStoreName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [foundingYear, setFoundingYear] = useState(null);
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onImageChange = (imageList, addUpdateIndex) => {
    // data for submit
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
    // Here you can submit the form data, e.g., send it to an API
    // You can access storeName, tagLine, and value here for submission
  };

  const handelSubmitStore = () => {
    console.log(
      "Store profile data: Name",
      storeName,
      " tag Line:",
      tagLine,
      " Founding Year:",
      foundingYear,
      "Image : ",
      images[0].data_url
    );
    let allDataStore={
        "store_name":storeName,
        "tag_line":tagLine,
        "founding_year":foundingYear,
        "file":images[0].data_url,
        "user_id":4
    }
    
    postStore(allDataStore)
    console.log(allDataStore)
  };

  const postStore = async (storeData) => {
    try {
        const response = await fetch("https://review-reflection.vercel.app/store/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials":true,
                "Access-Control-Allow-Origin":"*",
                "Access-Control-Allow-Methods":"GET,DELETE,PATCH,POST,PUT",
                "Access-Control-Allow-Headers":"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
            },
            body: JSON.stringify(storeData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
        // Handle error (e.g., display error message to user)
    }
};
  useEffect(() => {
    if (dateValue instanceof Date) {
      setFoundingYear(dateValue.getFullYear()); // Extract year from dateValue
    }
  }, [dateValue]);

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
          className={`appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 focus:border-green-700 placeholder:text-sm rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        />

        {/* Upload image code */}
        <ImageUploading
          // multiple
          value={images}
          onChange={onImageChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                className="border border-gray-400 p-2 rounded-md"
              >
                Click or Drop here
              </button>
              &nbsp;
              {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
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
          submit
        </button>
      </form>
    </div>
  );
}
