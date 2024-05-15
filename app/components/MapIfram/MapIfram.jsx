import React from "react";

export default function MapIfram({ latitude = "", longitude = "" }) {
  return (
    <iframe
      id="iframeId"
      height="500px"
      width="100%"
      src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`}
      allowFullScreen
    />
  );
}
