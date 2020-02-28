import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from "./LocationCard";
import { Container, Row } from "reactstrap";
export default function LocationsList(props) {
    const [locations,setLocations] = useState([]);
    const [queryType,setQueryType] = useState(`?name=`)
    useEffect(() => {
        const getLocations = () => {
          axios
            .get(`https://rickandmortyapi.com/api/location/${queryType}${props.query}`)
            .then(response => {
              console.log(response);

              setLocations(response.data.results);
            })
            .catch(error => {
              console.error('Server Error', error);
            });
        }
        getLocations();
      }, [props.query]);
    
      return (
        <section className="location-list">
          <h2>LOCATIONS!</h2>
          <Container >
      <Row  >
            {locations.map(location => (
              <LocationCard  key={location.id} location={location} />
            ))}
            </Row>
            </Container>
        </section>
      );}
