import { MapContainer, TileLayer, Marker, Popup, GeoJSON, Tooltip } from 'react-leaflet'
import './Map.css' 
import {data} from './data'
import React from 'react'


function Map() {

    
    const markers = [
        {
            name: '7',
           position: [59.88624557846397, 30.43768107891083],
           draggable: 'true',
           title: 'Цех №7',
           tooltip: 'Цех №7',
           popup: 'Цех №7 механосборочный со служебно-бытовой пристройкой'
        },
        {
            name: '8',
           position: [59.88526588448988, 30.440824627876285],
           draggable: 'true',
           title: 'Цех №8',
           tooltip: 'Цех №8',
           popup: 'Цех №8 сварных металлоконструкций'
        },
         {
             name: '9',
            position: [59.884926752923576, 30.438539385795597],
            draggable: 'true',
            title: 'Цех №9',
            tooltip: 'Цех №9',
            popup: ''
         },
         {
            name: '11',
           position: [59.890034892025234, 30.43499886989594],
           draggable: 'true',
           title: 'Цех №11',
           tooltip: 'Цех №11',
           popup: 'Цех №11 кузнечно-термический с пристройками, тарный участок цеха 21'
        },
         {
            name: '14',
           position: [59.889566633778, 30.436286330223087],
           draggable: 'true',
           title: 'Цех №14',
           tooltip: 'Цех №14',
           popup: 'Цех металлоконструкций №14 с пристройками'
        },
        {
            name: '20',
           position: [59.89096600663234, 30.437595248222355],
           draggable: 'true',
           title: 'Цех №20',
           tooltip: 'Цех №20',
           popup: ''
        },

        {
            name: 'Инженерный корпус',
           position: [59.88478679285565, 30.441082119941715],
           draggable: 'true',
           title: 'Инженерный корпус',
           tooltip: 'Инженерный корпус',
           popup: ''
        },
         {
            name: '26',
           position: [59.888167201986896, 30.438582301139835],
           draggable: 'true',
           title: 'Цех №26',
           tooltip: 'Цех №26',
           popup: 'Цех №26 механосборочный с бытовыми пристройками'
        }

    ]


    const listMarkers = markers.map((marker) =>
    <Marker 
    key={marker.name}
    position={marker.position}
    title={marker.title}
    draggable="true"
    opacity={0.8}
    eventHandlers={{move: (e) => {console.log(e.latlng)},}}
    > 
     <Popup className="popup">
     {marker.popup}
      </Popup> 
         <Tooltip className="tooltip" direction="bottom" offset={[0, 20]} opacity={0.7} permanent>
         {marker.tooltip}
        </Tooltip>

    </Marker> 
    )




     
    return (
      <div>
       <MapContainer center={[59.88845828172505, 30.4389363527298]} zoom={20} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
              key='denver'
              data={data}
               />
        {listMarkers}
        </MapContainer>
      </div>
    );
  }
  
export default Map;
  