"use client";
import Button from "@/app/components/common/Button/Button";
import InputFields from "@/app/components/common/FormElement/InputFields";
import Radio from "@/app/components/common/FormElement/Radio";
import StarRating from "@/app/components/common/FormElement/StarRating";
import Textarea from "@/app/components/common/FormElement/Textarea";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const baseUrl = "https://rev-ref.s3.amazonaws.com/";
  const [storeData, setStoreData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const path = params.slug;
  let radioData = ["Yes", "No"];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://review-reflection.vercel.app/store/feedback/${path}`
        );
        const data = await response.json();
        if(!data.statusCode){
          setStoreData(data);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setNotFound(true);
      }
    }

    fetchData();
  }, [path]);

  useEffect(() => {
    if (notFound) {
      // Redirect to not-found page
      window.location.href = '/not-found';
    }
  }, [notFound]);

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
              <InputFields
                labelName="Name"
                placeholder="Enter Your Name"
                id="name"
              />
              <div className="flex gap-4 md:flex-row flex-col flex-wrap">
                {
                  <div className="flex gap-4 md:flex-row flex-col flex-wrap">
                    {storeData?.questions.map((item, id) =>
                      item.answer_type === "single integer" ? (
                        <StarRating
                          labelName={item?.question_text}
                          key={id}
                          className="mt-3 mb-3 text-base"
                          mainClassName="w-[49%] relative pb-[25px]"
                        />
                      ) : (
                        ""
                      )
                    )}
                  </div>
                }
              </div>
              {storeData?.questions.map((item, id) =>
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
              {storeData?.questions.map((item, id) =>
                item.answer_type === "string" ? (
                  <Textarea labelName={item.question_text} key={id} />
                ) : (
                  ""
                )
              )}
              <Button>Send</Button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
