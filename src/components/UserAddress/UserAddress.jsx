import React, { useState, useCallback, useRef, useEffect } from "react";
import Header from "../../components/header/Header";
import { useStateValue } from "../../Providers/StateProvider";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function UserAddress() {
  const [selectedLoc, setSelectedLoc] = useState([]);
  const [{ lng, lat }] = useStateValue();

  useEffect(() => {
    const getLngLat = async () => {
      setSelectedLoc({
        lat: lat,
        lng: lng,
      });
    };
    getLngLat();
  }, []);

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
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
    libraries,
  });
  const center = {
    lat: lat,
    lng: lng,
  };

  if (loadError) return "There is an error when loading maps";
  if (!isLoaded) return "Loading Maps";

  console.log("selected loc", selectedLoc);
  return (
    <div>
      <Header />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
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
