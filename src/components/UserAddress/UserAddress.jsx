import React from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

export default function UserAddress() {
  const libraries = ["places"];
  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
    libraries,
  });
  const center = {
    lat: 38,
    lng: -97,
  };

  if (loadError) return "There is an error when loading maps";
  if (!isLoaded) return "Loading Maps";
  return (
    <div>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={5} center={center}>
        {" "}
      </GoogleMap>
    </div>
  );
}
