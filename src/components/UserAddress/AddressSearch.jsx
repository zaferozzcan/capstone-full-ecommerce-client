import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateValue } from "../../Providers/StateProvider";
import "dotenv";
// import "../../style/AddressSearch";
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

// // // // // // // // referenced from https://www.npmjs.com/package/use-places-autocomplete
const libraries = ["places", "geocoding"];
export default function AddressSearch() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
    libraries,
  });
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutoComplete({
    requestOptions: {
      location: { lat: () => 42.2413, lng: () => -71.01809 },
      radius: 100 * 1000,
    },
  });

  const [{ address, user }, dispatch] = useStateValue();
  // console.log("isloaded", isLoaded);
  // console.log("ready ", ready);
  console.log("address", address);
  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          try {
            setValue(address, false);
            clearSuggestions();
            const results = await getGeocode({ address });
            let { lat, lng } = await getLatLng(results[0]);
            dispatch({
              type: "ADD_CURRENT_LOCATION",
              address: address,
              lng: lng,
              lat: lat,
            });

            setValue("");
          } catch (err) {
            console.log(err);
          }
          try {
            axios({
              method: "put",
              url: "http://localhost:5000/order",
              data: {
                user_email: user.email,
                user_addres: address,
              },
            });
          } catch (err) {
            console.log(err.message);
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Search Your Address"
        />
        <ComboboxPopover style={{ backgroundColor: "skyblue" }}>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
