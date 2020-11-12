import React from 'react';
import { Map, TileLayer, Marker, Tooltip } from "react-leaflet";
import AntPath from "react-leaflet-ant-path";

class Question8 extends React.Component {
  render(){
    const geolocationLat = 25;
    const geolocationLong = 5;
    return (
      <main>
        <Map  bounds={[[geolocationLat-0.01, geolocationLong-0.01],[geolocationLat+0.01, geolocationLong+0.01]]}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        </Map>
      </main>
    );
  }
}

export default Question8;