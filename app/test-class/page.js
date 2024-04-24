"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function page() {
    // let buttonName="My Button";
    const [buttonNewName,setbuttonNewName]=useState(0);
    const onHandelNameChange=()=>{
        setbuttonNewName(buttonNewName+1);
        // console.log("This is use state--",buttonNewName);
    }
    useEffect(()=>{
        console.log("This is use effect",buttonNewName);
        let setTime=setTimeout(() => {
            console.log("This is set time out",buttonNewName)
        }, 5000);

        return ()=>{
            clearTimeout(setTime);
        }

    },[buttonNewName]);

    useEffect(()=>{
        console.log("Mounted");
        return ()=>{
            console.log("Unmounted")
        }
    },[]);

  return (
  <div>
    <button onClick={onHandelNameChange}>{buttonNewName}</button>

    <Link  href="/review-form/brain-tech1"><button className='bg-red-500 text-white p-5'>go to form</button></Link>
  </div>
  )
}
