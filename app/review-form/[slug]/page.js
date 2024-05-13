"use client"
import { useEffect, useState } from "react";
import Button from "@/app/components/common/Button/Button";
import Radio from "@/app/components/common/FormElement/Radio";
import StarRating from "@/app/components/common/FormElement/StarRating";
import Textarea from "@/app/components/common/FormElement/Textarea";
import InputText from "@/app/components/common/FormElement/InputText";

export default function Page({ params }) {
  const baseUrl = "https://rev-ref.s3.amazonaws.com/";
  const [storeData, setStoreData] = useState(null);
  const [ratings, setRatings] = useState({});
  const [textInputs, setTextInputs] = useState({});
  const [radioSelections, setRadioSelections] = useState({});
  // const [postData,setPostData]=useState({})

  const path = params.slug;
  let radioData = ["Yes", "No"];

  async function getStoreData(path) {
    let sData = await fetch(`https://review-reflection.vercel.app/store/feedback/${path}`);
    sData = await sData.json();
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

  const handleRatingValue = (questionId, ratingData) => {
    if(!questionId){
      console.log(questionId," ",ratingData) 
    }
    setRatings((prevRatings) => ({ ...prevRatings, [questionId]: ratingData }));
  };

  const handleTextValue = (questionId, textData) => {
    if(!questionId){
      console.log(questionId," ",textData) 
    }
    setTextInputs((prevTextInputs) => ({ ...prevTextInputs, [questionId]: textData }));
  };

  const handleRadioValue = (questionId, radioData) => {
    if(!questionId){
      console.log(questionId," ",radioData) 
    }
    setRadioSelections((prevRadioSelections) => ({ ...prevRadioSelections, [questionId]: radioData }));
  };

  const handleSendFeedback = () => {
    // Combine all the data
  const feedbackData = {
    user_id: 4, // or whichever user ID you want to include
    answer: {
      ...ratings,
      ...radioSelections,
      ...textInputs
    }
  };
 
    // Send the feedback data to your API or perform further actions   
    console.log(feedbackData);
    postFeedback(feedbackData)
    return feedbackData
  };

  const  postFeedback=async (feedbackData)=>{
    let response=await fetch("https://review-reflection.vercel.app/store/feedback",{
        method:"Post",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials":true,
          "Access-Control-Allow-Origin":"*",
          "Access-Control-Allow-Methods":"GET,DELETE,PATCH,POST,PUT",
          "Access-Control-Allow-Headers":"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
      },
        body:JSON.stringify(feedbackData)
    }
    );
    response= await response.json()
    console.log(response);
}

  // useEffect(() => {
  //   const postData = handleSendFeedback();
  //   setPostData(postData);
  // }, [ratings, radioSelections, textInputs]); // Watching for changes in these states
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };
  
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
            <h1 className="text-4xl mb-3 capitalize">Welcome to {storeData.store_name}</h1>
            <p className="mb-5">{storeData.tag_line}</p>
            <form onSubmit={onSubmit}>
            {storeData?.questions?.map((item, id) => {
              switch (item.answer_type) {
                case "single integer":
                  return (
                    <StarRating
                      labelName={item?.question_text}
                      key={id}
                      className="mt-3 mb-3 text-base"
                      mainClassName="w-[49%] relative pb-[25px]"
                      ratingCallBack={(ratingData) => handleRatingValue(item.question_store_id, ratingData)}
                    />
                  );
                case "Boolean":
                  return (
                    <Radio
                      mainClassName="mt-6 mb-3"
                      labelName={item.question_text}
                      key={id}
                      radioData={radioData}
                      radioCallBack={(radioData) => handleRadioValue(item.question_store_id, radioData)}
                    />
                  );
                case "string":
                  return (
                    <InputText
                      labelName={item.question_text}
                      key={id}
                      sendDataToParent={(textData) => handleTextValue(item.question_store_id, textData)}
                    />
                  );
                case "paragraph":
                  return <Textarea labelName={item.question_text} key={item.question_store_id} />;
                default:
                  return null;
              }
            })}
            <Button onClick={handleSendFeedback}>Send</Button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
