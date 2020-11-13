import React from 'react';
import { Map, TileLayer, Marker, Tooltip } from "react-leaflet";
import AntPath from "react-leaflet-ant-path";
import url from './../constantes/url';
import {colorList} from "./../constantes/colorList.js";

class Question8 extends React.Component {

  constructor(props){
    super(props)
    this.state = {
     markerList : [],
     routeList : []
    }
  }

  componentDidMount(){
    fetch(url + "origin_to_dest_gps_data")
    .then(res => res.json())
    .then(data => {
      const lga = data.result.filter(travel => travel.origin === "LGA");
      const jfk = data.result.filter(travel => travel.origin === "JFK");
      const ewr = data.result.filter(travel => travel.origin === "EWR");

      const coordList = data.result.map(city => {
        return {name : city.dest_airport_name, coord : [city.dest_airport_lat , city.dest_airport_lon ]}
      });
      coordList.push({name : lga[0].origin_airport_name, coord :[lga[0].origin_airport_lat, lga[0].origin_airport_lon]});
      coordList.push({name : jfk[0].origin_airport_name, coord :[jfk[0].origin_airport_lat, jfk[0].origin_airport_lon]});
      coordList.push({name : ewr[0].origin_airport_name, coord :[ewr[0].origin_airport_lat, ewr[0].origin_airport_lon]});

      this.setState({
        markerList : coordList,
        jfk,
        ewr,
        lga,
      })
    })
  }


  createAntPathConfig = (color) => {
    return (
      {
        "delay": 1000,
        "dashArray": [
          10,
          20
        ],
        "weight": 6,
        "color": color,
        "pulseColor": "#FFFFFF",
        "paused": false,
        "reverse": false,
        "hardwareAccelerated": true
      }
    )
  }
  
  diplayRoute = (e) => {
    if(e.target.value === "John F Kennedy"){
      const routeListUJfk = this.state.jfk.map((routeTmp => {
        return [[routeTmp.origin_airport_lat, routeTmp.origin_airport_lon],[routeTmp.dest_airport_lat, routeTmp.dest_airport_lon]]
      }))
      this.setState({routeList : [routeListUJfk]})
    }
    if(e.target.value === "La Guardia"){
      const routeListUJfk = this.state.lga.map((routeTmp => {
        return [[routeTmp.origin_airport_lat, routeTmp.origin_airport_lon],[routeTmp.dest_airport_lat, routeTmp.dest_airport_lon]]
      }))
      this.setState({routeList : [routeListUJfk]})
    }
    if(e.target.value === "Newark"){
      const routeListUJfk = this.state.ewr.map((routeTmp => {
        return [[routeTmp.origin_airport_lat, routeTmp.origin_airport_lon],[routeTmp.dest_airport_lat, routeTmp.dest_airport_lon]]
      }))
      this.setState({routeList : [routeListUJfk]})
    }
    if(e.target.value === "aucun"){
      this.setState({routeList : []})
    }
  }

  render(){
    const geolocationLat = 41;
    const geolocationLong = -97;
    return (
      <main>
        <div className='form'>
        <label>Afficher les vols partant de l'aéroport </label>
        <select onChange={e => this.diplayRoute(e)}>
          <option>aucun</option>
          <option>John F Kennedy</option>
          <option>La Guardia</option>
          <option>Newark</option>
        </select>
        </div>
        <Map  bounds={[[geolocationLat-20, geolocationLong-20],[geolocationLat+20, geolocationLong+20]]}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          {this.state.routeList.map((route, index) => <AntPath positions={route} options={this.createAntPathConfig(colorList[index])} />)}
          {this.state.markerList.map((airport, index) => {
            return(
              <Marker
               position={airport.coord}
               key={index}
              >
                <Tooltip>{airport.name}</Tooltip>
              </Marker>
            )
           }
          )}


        </Map>
      </main>
    );
  }
}

export default Question8;