import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from "./LocationCard";
export default function LocationsList() {
    const [locations,setLocations] = useState([]);
    useEffect(() => {
        const getLocations = () => {
          axios
            .get(`https://rickandmortyapi.com/api/location`)
            .then(response => {
              console.log(response);

              setLocations(response.data.results);
            })
            .catch(error => {
              console.error('Server Error', error);
            });
        }
        getLocations();
      }, []);
    
      return (
        <section className="location-list">
          <h2>LOCATIONS!</h2>
            {locations.map(location => (
              <LocationCard key={location.id} location={location} />
            ))}
        </section>
      );}
