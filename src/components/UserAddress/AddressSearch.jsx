import React from "react";
import { useStateValue } from "../../Providers/StateProvider";
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
const libraries = ["places"];
export default function AddressSearch() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
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

  const [{ address }, dispatch] = useStateValue();
  console.log("isloaded", isLoaded);
  console.log("ready ", ready);
  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          try {
            setValue(address, false);
            clearSuggestions();
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            console.log(lat, lng);
            dispatch({
              type: "ADD_CURRENT_LOCATION",
              address: value,
            });
          } catch (err) {
            console.log(err);
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
