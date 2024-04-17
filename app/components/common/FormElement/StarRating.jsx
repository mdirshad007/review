"use client"
import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

export default function StarRating({mainClassName, labelName, className}) {
    const [rating, setRating] = useState(0);

    const ratingChanged = (newRating) => {
        setRating(newRating);
        return rating;
    };
    const getColor = (rating) => {
      if (rating <= 1) return '#FF6347'; // red
      if (rating === 2) return '#FF4500'; // orange red
      if (rating === 3) return '#FFA500'; // yellow
      if (rating === 4) return '#9ACD32'; // yellow green
      return '#32CD32'; // green
  };
    const ratingLabel = {
        0: "",
        1: "Poor",
        2: "Bad",
        3: "Average",
        4: "Good",
        5: "Excellent",
    };

    return (
      <div className={mainClassName}>
        <p className={className}>{labelName}</p>
        <div className='flex gap-3 font-bold text-lg'>
            <ReactStars
                size={20}
                count={5}
                color="#F29F02"
                activeColor="#F29F02"
                value={rating}
                a11y={true}
                edit={true}
                onChange={ratingChanged}
                emptyIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M18.7689 14.3178C18.5102 14.5684 18.3914 14.931 18.4503 15.2865L19.3381 20.2C19.413 20.6164 19.2373 21.0379 18.8887 21.2785C18.5472 21.5282 18.0928 21.5582 17.7203 21.3584L13.2971 19.0515C13.1433 18.9696 12.9726 18.9257 12.7978 18.9207H12.5272C12.4333 18.9346 12.3414 18.9646 12.2575 19.0105L7.83339 21.3285C7.61468 21.4383 7.367 21.4773 7.12433 21.4383C6.53311 21.3265 6.13863 20.7632 6.23551 20.169L7.12433 15.2555C7.18325 14.897 7.06441 14.5325 6.80575 14.2778L3.19953 10.7825C2.89793 10.4898 2.79307 10.0504 2.93089 9.65395C3.06471 9.25848 3.40626 8.96986 3.81871 8.90495L8.78213 8.1849C9.15963 8.14595 9.49119 7.91626 9.66096 7.57671L11.8481 3.09266C11.9 2.99279 11.9669 2.90091 12.0478 2.82302L12.1377 2.75311C12.1846 2.70118 12.2385 2.65824 12.2985 2.62328L12.4073 2.58333L12.5771 2.51343H12.9975C13.373 2.55238 13.7036 2.77708 13.8764 3.11263L16.0924 7.57671C16.2522 7.90328 16.5628 8.12998 16.9213 8.1849L21.8847 8.90495C22.3042 8.96487 22.6547 9.25448 22.7935 9.65395C22.9244 10.0544 22.8115 10.4938 22.5039 10.7825L18.7689 14.3178Z"
                        fill="#C6C6C6"
                      />
                    </svg>
                  }
                  halfIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M18.8001 14.3175C18.5415 14.5682 18.4226 14.9307 18.4815 15.2862L19.3694 20.1997C19.4443 20.6162 19.2685 21.0376 18.92 21.2783C18.5784 21.528 18.124 21.5579 17.7515 21.3582L13.3284 19.0512C13.1746 18.9693 13.0038 18.9254 12.829 18.9204H12.5584C12.4645 18.9344 12.3727 18.9644 12.2888 19.0103L7.86464 21.3282C7.64593 21.4381 7.39825 21.477 7.15558 21.4381C6.56436 21.3262 6.16988 20.763 6.26676 20.1688L7.15558 15.2553C7.2145 14.8968 7.09566 14.5322 6.837 14.2776L3.23078 10.7822C2.92918 10.4896 2.82432 10.0502 2.96214 9.65371C3.09596 9.25823 3.43751 8.96962 3.84996 8.9047L8.81338 8.18466C9.19088 8.14571 9.52244 7.91602 9.69221 7.57647L11.8793 3.09242C11.9312 2.99255 11.9982 2.90067 12.079 2.82277L12.1689 2.75287C12.2159 2.70093 12.2698 2.65799 12.3297 2.62304L12.4386 2.58309L12.6083 2.51318H13.0288C13.4043 2.55213 13.7348 2.77683 13.9076 3.11239L16.1237 7.57647C16.2835 7.90303 16.5941 8.12973 16.9526 8.18466L21.916 8.9047C22.3354 8.96462 22.686 9.25424 22.8248 9.65371C22.9556 10.0542 22.8428 10.4936 22.5352 10.7822L18.8001 14.3175Z"
                        fill="#C6C6C6"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.5584 18.9204H13L13.0288 2.51318H12.6083L12.4386 2.58309L12.3297 2.62304C12.2698 2.65799 12.2159 2.70093 12.1689 2.75287L12.079 2.82277C11.9982 2.90067 11.9312 2.99255 11.8793 3.09242L9.69221 7.57647C9.52244 7.91602 9.19088 8.14571 8.81338 8.18466L3.84996 8.9047C3.43751 8.96962 3.09596 9.25823 2.96214 9.65371C2.82432 10.0502 2.92918 10.4896 3.23078 10.7822L6.837 14.2776C7.09566 14.5322 7.2145 14.8968 7.15558 15.2553L6.26676 20.1688C6.16988 20.763 6.56436 21.3262 7.15558 21.4381C7.39825 21.477 7.64593 21.4381 7.86464 21.3282L12.2888 19.0103C12.3727 18.9644 12.4645 18.9344 12.5584 18.9204Z"
                        fill="#F29F02"
                      />
                    </svg>
                  }
                  filledIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M18.8314 14.3175C18.5727 14.5682 18.4539 14.9307 18.5128 15.2862L19.4006 20.1997C19.4755 20.6162 19.2998 21.0376 18.9512 21.2783C18.6097 21.528 18.1553 21.5579 17.7828 21.3582L13.3596 19.0512C13.2058 18.9693 13.0351 18.9254 12.8603 18.9204H12.5897C12.4958 18.9344 12.4039 18.9644 12.32 19.0103L7.89589 21.3282C7.67718 21.4381 7.4295 21.477 7.18683 21.4381C6.59561 21.3262 6.20113 20.763 6.29801 20.1688L7.18683 15.2553C7.24575 14.8968 7.12691 14.5322 6.86825 14.2776L3.26203 10.7822C2.96043 10.4896 2.85557 10.0502 2.99339 9.65371C3.12721 9.25823 3.46876 8.96962 3.88121 8.9047L8.84463 8.18466C9.22213 8.14571 9.55369 7.91602 9.72346 7.57647L11.9106 3.09242C11.9625 2.99255 12.0294 2.90067 12.1103 2.82277L12.2002 2.75287C12.2471 2.70093 12.301 2.65799 12.361 2.62304L12.4698 2.58309L12.6396 2.51318H13.06C13.4355 2.55213 13.7661 2.77683 13.9389 3.11239L16.1549 7.57647C16.3147 7.90303 16.6253 8.12973 16.9838 8.18466L21.9472 8.9047C22.3667 8.96462 22.7172 9.25424 22.856 9.65371C22.9869 10.0542 22.874 10.4936 22.5664 10.7822L18.8314 14.3175Z"
                        fill="#F29F02"
                      />
                    </svg>
                  
                  }
            />
         <div className=''>
         <span style={{ color: getColor(rating) }}>
          {ratingLabel[rating]}
          </span>
            </div>
        </div>
      </div>
    );
}
