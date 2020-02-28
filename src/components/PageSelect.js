import React from "react";
// import ReactPaginate from 'react-paginate';
import styled from "styled-components"
const StyleDiv = styled.div`
display:flex;
margin-top:30px;
justify-content:center;
align-items:center;
margin-bottom:50px;
`;
const PageStyle = styled.p`
background-color:white;
width:60px;
vertical-align:center;
`
const ButtonStyle = styled.button`
padding:10px 10px 10px 10px;
border-radius:20px;
width:200px;
background-color:PAPAYAWHIP;
margin-left:10px;
margin-right:10px;
`
const PageSelect = (props) => {

  return (
    <StyleDiv>
    <ButtonStyle onClick={props.prev}>Previous</ButtonStyle>   
    <PageStyle>Page:{props.currentP}</PageStyle>
    <ButtonStyle onClick={props.next}>Next</ButtonStyle>
    </StyleDiv>
  );
};
export default PageSelect;
