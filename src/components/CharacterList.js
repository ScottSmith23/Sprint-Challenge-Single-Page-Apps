import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard"
import { Container, Row } from "reactstrap";
export default function CharacterList (props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [queryType,setQueryType] = useState(`?name=`)
  const [pageQuery,setPageQuery] = useState(`?page=`)
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character/${queryType}${props.query}`)
        .then(response => {
          console.log(response);
          // const characters = response.data.results.filter(character =>
          //   character.name.toLowerCase().includes(props.query.toLowerCase())
          // );
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getCharacters();
  }, [props.query]);

  return (
    <section className="character-list">
      <h2>CHARACTERS!</h2>
      <Container>
      <Row>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
        </Row>
        </Container>
    </section>
  );
}
