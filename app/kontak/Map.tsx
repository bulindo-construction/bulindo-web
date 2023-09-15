"use client";

import React, { useMemo, useState, useCallback } from "react";
import {
  GoogleMap,
  InfoWindow,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";

type Coordinates = {
  lat: number;
  lng: number;
};

const ZOOM_COUNT = 8;
const COORDINATES = { lat: -6.892294202219886, lng: 107.61265631349268 };
const MAP_URL =
  "https://www.google.com/maps/dir//Two+Hands+Full,+Jl.+Ir.+H.+Juanda+No.113,+Lebak+Siliwangi,+Coblong,+Bandung+City,+West+Java+40132/@-6.8924806,107.6126885,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x2e68e68ca3e607d3:0x1ad911ec6c6ccf0b!2m2!1d107.6126892!2d-6.8924807!3e0?entry=ttu";

const containerStyle = {
  width: "100vw",
  height: window.innerWidth < 768 ? "70vh" : "50vh",
};

function Map() {
  const center = useMemo(() => COORDINATES, []);
  const [selectedMarker, setSelectedMarker] = useState<Coordinates | null>(
    null
  );

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GMAPS_API_KEY || "",
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={ZOOM_COUNT}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerF
        position={center}
        onClick={() => {
          setSelectedMarker(center);
        }}
      >
        {selectedMarker && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedMarker(null);
            }}
            position={center}
          >
            <a
              href={MAP_URL}
              target="_blank"
              aria-label="open link to directions to Bulindo office"
              className="underline hover:text-blue-750"
            >
              Directions
            </a>
          </InfoWindow>
        )}
      </MarkerF>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
