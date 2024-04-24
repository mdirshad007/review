"use client"
import React, { useState } from 'react'

export default function page() {
    let bgColor=["bg-green-400","bg-blue-700","bg-black"]
    const [indexValue,setIndexvalue]=useState(0);


  const onHandelChangeBG=()=>{
    // if(indexValue!=2){
    //     setIndexvalue(indexValue+1);
    // }
    // else{
    //     setIndexvalue(0);
    // }
    setIndexvalue(indexValue+1);
    console.log(indexValue%3);
  }
    return (
    <section className={bgColor[indexValue%3]}>
        <button className='bg-red-600 text-white p-5' onClick={onHandelChangeBG}>
            Change BG
        </button>
    </section>
  )
}
