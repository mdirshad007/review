"use client"
import React, { useEffect, useState } from 'react';

export default function Page({ params }) {
  const [dataStore, setDataStore] = useState([]);
  let name="irshad";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://review-reflection.vercel.app/store/feedback/brain-tech");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        if (!Array.isArray(data)) {
          throw new Error('Data is not an array');
        }
        setDataStore(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
  
    fetchData();
  }, []);

  return (
    <section>
      <div className="max-w-[1140px] mx-auto py-10 px-5">
        <p>Data:</p>
        <div>
          {/* {dataStore.map((item, index) => (
            <h3 key={index}>{item.store_name}</h3>
          ))} */}
        </div>
      </div>
    </section>
  );
}
