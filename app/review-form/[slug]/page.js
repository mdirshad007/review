"use client"
import Button from "@/app/components/common/Button/Button";
import InputFields from "@/app/components/common/FormElement/InputFields";
import Radio from "@/app/components/common/FormElement/Radio";
import StarRating from "@/app/components/common/FormElement/StarRating";
import Textarea from "@/app/components/common/FormElement/Textarea";
import { useEffect, useState } from "react";

export default function page({params}) {
  const radioData=["Yes","No"]
  const [storeData,setStoreData]=useState([]);
  async function fetchData() {
    try {
      let path = params.slug;
      const response = await fetch(`https://review-reflection.vercel.app/store/test?slug=${path}`);
      const data = await response.json();
      setStoreData(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [storeData]);


  return (
    <section>
     
      <div className="max-w-[1140px] mx-auto py-10 px-5">
      <h1 className="text-4xl mb-3 capitalize">Welcome to {storeData?.brain?.store_name}</h1>
      <p className="mb-5">
        {storeData?.brain?.tag_line}
      </p>
        <form method="post" action="">
            <InputFields labelName="Name" placeholder="Enter Your Name" id="name" />
            <div className="flex gap-4 md:flex-row flex-col flex-wrap">
              {
                storeData?.brain?.questions.map((item,id)=>(
                 item.answer_type==="single integer"?<StarRating labelName={item.question_text} className="mt-3 mb-3 text-base" mainClassName="w-[49%]" />:""
                ))
              }
            </div>
            {
                storeData?.brain?.questions.map((item,id)=>(
                 item.answer_type==="Boolean"?<Radio mainClassName="mt-6 mb-3" labelName={item.question_text} radioData={radioData}/>:""
                ))
              }
            {
                storeData?.brain?.questions.map((item,id)=>(
                 item.answer_type==="string"?<Textarea labelName={item.question_text}/>:""
                ))
              }
            
            <Button>Send</Button>
        </form>
        </div>
    </section>
  )
}
