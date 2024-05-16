"use client"
import React, { useEffect, useState } from 'react';
import MapIfram from '../components/MapIfram/MapIfram';
import InputText from '../components/common/FormElement/InputText';
import GetLocationByAddress from '../components/GetLocationByAddress/GetLocationByAddress';

export default function Page() {
  const [locationData, setLocationData] = useState({});
  const [latitude,setLatitude]=useState("")
  const [longitude,setLongitude]=useState("")

  const getLocation = async () => {
    let data = await fetch("https://api.geoapify.com/v1/ipinfo?&apiKey=e1fa2452c3f7418da65e99cfa8691ccc");
    data = await data.json();
    console.log(data);
    return data;
  };

  
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await getLocation();
        setLocationData(fetchedData);
      } catch (error) {
        console.log("Error fetching location data: ", error);
      }
    }
    fetchData();
  }, []);

  const handelClickToSearch=()=>{
    console.log(locationData)
    setLatitude(locationData.location.latitude)
    setLongitude(locationData.location.longitude)
    
  }



  return (
    <div>
     <button className='px-3 py-2 bg-green-700 text-white' onClick={handelClickToSearch}>Seatch My Location</button>
     <MapIfram latitude={latitude} longitude={longitude}/>
     <div className='mt-5 max-w-[960px] mx-auto'>
     <GetLocationByAddress/>
     </div>
    </div>
  );
}
