import React, { useEffect, useState } from 'react'
import InputText from '../common/FormElement/InputText';
import MapIfram from '../MapIfram/MapIfram';

export default function GetLocationByAddress() {
    const [locationData, setLocationData] = useState({});
  const [latitude,setLatitude]=useState("")
  const [longitude,setLongitude]=useState("")
  const [searchLocation,setSearchLocation]=useState("")
  const [addressRestult,setAddressResult]=useState(null)

  const handelClickToSearch=()=>{
    getLocation();
  }

  const getLocation = async () => {
    let data = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${searchLocation}&filter=countrycode:in&format=json&apiKey=e1fa2452c3f7418da65e99cfa8691ccc`);
    data = await data.json();
    
    console.log("new data==============>",data);
    setLatitude(data.results[0].lat)
    setLongitude(data.results[0].lon)
    setAddressResult(data.results[0].formatted)
    setLocationData(data)
    return data;
  };

  
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const fetchedData = await getLocation();
//         setLocationData(fetchedData);
//       } catch (error) {
//         console.log("Error fetching location data: ", error);
//       }
//     }
//     fetchData()
//   }, [handelClickToSearch]);

 


  const handelInputValue=(text)=>{
    setSearchLocation(text)
  }
  return (
    <div>
          <InputText
          labelName="Enter Your Full Address"
          sendDataToParent={handelInputValue}
          className=''
          mainDivClassName=""
        />
        <button className='px-3 py-2 bg-green-700 text-white' onClick={handelClickToSearch}>Search My Address</button>
{
    addressRestult &&
    <p className='mt-10'> Result:{addressRestult}</p>
}

        <MapIfram latitude={latitude} longitude={longitude} className="mt-10"/>
    </div>
  )
}
