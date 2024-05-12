"use client"
import React, { useEffect, useState } from 'react';
import InputText from '@/app/components/common/FormElement/InputText';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

export default function ProfileForm() {
    const [storeName, setStoreName] = useState('');
    const [tagLine, setTagLine] = useState('');
    const [foundingYear, setFoundingYear] = useState(null);

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
        console.log("Store profile data: Name", storeName, " tag Line:", tagLine, " Founding Year:", foundingYear);
    }

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
                <p className='my-3'>Select Your Year</p>
                <DatePicker
                    onChange={onChange}
                    value={dateValue}
                    maxDate={maxDate}
                    className={`appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 focus:border-green-700 placeholder:text-sm rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                />
                <br />
                <button onClick={handelSubmitStore} type="submit" className={`bg-green-700 text-white font-bold text-base flex justify-center items-center h-14 px-5 gap-3 rounded-lg mt-5`}>submit</button>
            </form>
        </div>
    );
}