import React from "react";
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
    googleMapsApiKey: ,
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

  console.log("isloaded", isLoaded);
  console.log("ready ", ready);
  return (
    <div>
      <Combobox onSelect={(address) => console.log(address)}>
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Search Your Address"
        />
        <ComboboxPopover>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
