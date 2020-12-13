import React, { useState, useCallback, useRef } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function UserAddress() {
  const [selectedLoc, setSelectedLoc] = useState([]);
  const clickOnMap = useCallback((e) => {
    setSelectedLoc({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  }, []);

  const mapRef = useRef();
  const LoadOnMap = useCallback((map) => {
    mapRef.current = map;
  }, []);

  // map props
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

  //   console.log(selectedLoc);
  return (
    <div>
      {/* <Seach /> */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={5}
        center={center}
        onClick={clickOnMap}
        onLoad={LoadOnMap}
      >
        {" "}
        {selectedLoc && (
          <Marker position={{ lat: selectedLoc.lat, lng: selectedLoc.lng }} />
        )}
      </GoogleMap>
    </div>
  );
}

// function Seach() {
//   const { ready } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => 42.2413, lng: () => -71.01809 },
//       radius: 100 * 1000,
//     },
//   });
//   console.log("ready in maps", ready);
//   return <div>The search bar</div>;
// }
