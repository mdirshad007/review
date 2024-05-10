"use client"
import { useEffect, useState } from "react";
import Button from "@/app/components/common/Button/Button";
import Radio from "@/app/components/common/FormElement/Radio";
import StarRating from "@/app/components/common/FormElement/StarRating";
import Textarea from "@/app/components/common/FormElement/Textarea";
import Tt from "@/app/components/common/FormElement/Tt";
import InputText from "@/app/components/common/FormElement/InputText";




export default function Page({ params }) {
  const baseUrl = "https://rev-ref.s3.amazonaws.com/";
  const [storeData,setStoreData]=useState(null)
  const [rating,setRating]=useState([])
  const [stringText,setStringText]=useState([])
  const path = params.slug;
  let radioData = ["Yes", "No"];
  
  async function getStoreData(path){
    let sData=await fetch(`https://review-reflection.vercel.app/store/feedback/${path}`);
    sData= await sData.json();
    return sData;
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStoreData(path);
        setStoreData(data);
      } catch (error) {
        console.error("Error fetching store data:", error);
      }
    }
    fetchData();
  }, []);

 
  const handelRatingValue=(ratingData)=>{
    setRating(ratingData)
    console.log(ratingData)
  }
  const handelTextString=(stringData)=>{
    console.log(stringData)
  }

  return (
    <section>
      <div className="max-w-[1140px] mx-auto py-10 px-5">
        {storeData && (
          <>
            <img
              width={200}
              height={200}
              className="w-40 h-40"
              src={baseUrl + storeData.bg_img}
              alt={storeData.store_name}
            />
            <h1 className="text-4xl mb-3 capitalize">
              Welcome to {storeData.store_name}
            </h1>
            <p className="mb-5">{storeData.tag_line}</p>
            <form method="post" action="">
              
                {
                  <div className="flex gap-4 md:flex-row flex-col flex-wrap w-full">

                    {storeData?.questions?.map((item, id) =>
                      item.answer_type === "single integer" ? (
                        <StarRating
                          labelName={item?.question_text}
                          key={id}
                          className="mt-3 mb-3 text-base"
                          mainClassName="w-[49%] relative pb-[25px]"
                          ratingCallBack={handelRatingValue}
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>
                }
              {storeData?.questions?.map((item, id) =>
                item.answer_type === "Boolean" ? (
                  <Radio
                    mainClassName="mt-6 mb-3"
                    labelName={item.question_text}
                    key={id}
                    radioData={radioData}
                  />
                ) : (
                  ""
                )
              )}
              {storeData?.questions?.map((item, id) =>
                item.answer_type === "string" ? (
              //     <InputFields
              //     labelName={item.question_text} key={id}
              //     aaa={handelTextString}
              // />
              <InputText
              labelName={item.question_text} key={id}
              sendDataToParent={handelTextString}
              />
                ) : (
                  ""
                )
              )}
              {storeData?.questions?.map((item, id) =>
                item.answer_type === "paragraph" ? (
                  <Textarea labelName={item.question_text} key={id} />
                ) : (
                  ""
                )
              )}
              {/* <Dropdown/> */}
              <Button>Send</Button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

// export function generateMetadata({params}){
//   function convertHyphenToSpaceAndCapitalize(text) {
//     // Split the text based on hyphens
//     var words = text.split('-');
    
//     // Capitalize the first letter of each word
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
    
//     // Join the words back together with spaces
//     return words.join(' ');
// }
//   return{
//     title:`Review Store Form ${convertHyphenToSpaceAndCapitalize(params.slug)}`
//   }
// }