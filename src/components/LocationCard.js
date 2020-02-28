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

`;
const ImageS = styled.img`

width:70%;

`;
export default function LocationCard(props) {
  return( 
    <Col xs="6" md="4" xl="3">
    <CardDiv className="character-card">
    <Card style={{backgroundColor:"tan",paddingLeft:"10%"}}>
    <div className="location-card">
    <h3>Name: {props.location.name}</h3>
    <p>Type: {props.location.type}</p>
    <p>Dimension {props.location.dimension}</p>

  </div>
  </Card>
  </CardDiv>
  </Col>
  )}
