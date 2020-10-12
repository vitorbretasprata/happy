import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css"

import "../styles/pages/OrphanagesMap.css";


import mapMarkerImg from "../images/map-marker.svg";

function OrphanagesMap() {

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Brasília</strong>
                    <span>Distrito Federal</span>
                </footer>
            </aside>

            <Map 
                center={[15.8478174,-47.8921573]}
                zoom={15}
                style={{
                    height: "100%",
                    width: "100%"
                }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    )

}

export default OrphanagesMap;