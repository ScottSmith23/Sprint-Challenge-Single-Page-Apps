import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Spinner
} from "reactstrap";
import styled from "styled-components";
const CardDiv = styled.div`
margin-top:30px;
margin-left:auto;
margin-right:auto;
`;
const ImageS = styled.img`

width:70%;

`;
export default function CharacterCard (props) {
  return (
    <Col xs="6" md="4" xl="3">
    <CardDiv className="character-card">
    <Card style={{backgroundColor:"tan",paddingLeft:"10%"}}>
    <h2>{props.character.name}</h2>
    <div className="char-image">
     <ImageS src={`${props.character.image}`} />
     </div>
    <div className="character-status">
      Status: <em>{props.character.status}</em>
    </div>
    <div className="character-species">
     Species: {props.character.species}
    </div>
     Gender : {props.character.gender}
    
     </Card>
  </CardDiv>
  </Col>
  )
}
