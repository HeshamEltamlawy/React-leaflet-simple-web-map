import React, { component } from "react";
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import mapData from "./../Data/countries.json";
import "leaflet/dist/leaflet.css";
import "./MyMap.css"




class MyMap extends React.Component {
    state = {  } 

componentDidMount() {
    console.log(mapData);
}

countryStyle = {
    fillOpacity:1,
    fillColor:"#FEB24C",
    color:"Black",
    weight:2,
    dashArray:3,

};

highlightFeature = (event) => {
    event.target.setStyle({
        weight: 7,
        color: '#FC4E2A',
        dashArray: '',
        fillOpacity: .9
    });
}

resetHighlight = (event) =>{
    // mapData.resetStyle(target)
    event.target.setStyle({
        fillOpacity:1,
        fillColor:"#FEB24C",
        color:"Black",
        weight:2,
        dashArray:3,
    });
}

onCountryClick = (event) => {
    console.log("Clicked")
}

onEachCountry = (country, layer) =>{
    const countryName = country.properties.ADMIN;
    console.log(countryName);
    layer.bindPopup(countryName);

    layer.on({
        mouseover: this.highlightFeature,
        mouseout: this.resetHighlight,
        click: this.onCountryClick,
    });
};




    render() { 
        return (
            <div>
                <div>
                    <h1 style={{textAlign:'center'}}>React-leaflet Map</h1>
                    <MapContainer style={{height:"80vh"}} center={[30, 1]} zoom={2} scrollWheelZoom={false} >
                        <GeoJSON 
                            style= {this.countryStyle} 
                            data= {mapData.features}
                            onEachFeature={this.onEachCountry}/>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    </MapContainer>
                    
                </div>

                
                
            </div>
            
            
            );
    }
}

export default MyMap;