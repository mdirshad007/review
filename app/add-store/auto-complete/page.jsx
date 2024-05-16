"use client"
import React, { useEffect } from 'react';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'


function Page() {
    function onPlaceSelect(value) {
        console.log(value);
      }
     
      function onSuggectionChange(value) {
        console.log(value);
      }

  return (
    <GeoapifyContext apiKey="e1fa2452c3f7418da65e99cfa8691ccc">
    <GeoapifyGeocoderAutocomplete placeholder="Enter address here"
      type="street"
      lang="en"
    //   position={position}
      countryCodes="IN"
    //   limit={limit}
    //   value={displayValue}
      placeSelect={onPlaceSelect}
      suggestionsChange={onSuggectionChange}
      />
  </GeoapifyContext>
  )
}

export default Page;
