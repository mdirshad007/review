import React from "react";

export default function MapIfram({ latitude="20.7573478", longitude="72.1103371",className}) {
  return (
    <iframe
      id="iframeId"
      height="500px"
      width="100%"
      className={className}
      src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`}
      allowFullScreen
    />
  );
}
