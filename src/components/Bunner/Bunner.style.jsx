import styled from "@emotion/styled";
import BackgroundImage from '../../assets/bunner.webp'; 
 export const BunnerSection=styled.section`
 background-image:url(${BackgroundImage});
background-size: cover;
  background-position: center;
  height: 80vh; 
  text-align:center;
  @media (max-width: 768px) {
  height:50vh;
  }
 `
 export const BunnerTitle=styled.h1`
 font-size:45px;
padding:8%;
 text-align:center;
  text-shadow: 
    -1px -1px 0 white, 
    1px -1px 0 white, 
    -1px 1px 0 white, 
    1px 1px 0 white;
    @media (max-width: 768px) {
    font-size:23px;
  }
`;
 
 export const BunnerSubTitle=styled.h2`
 font-size:28px;
 text-align:center;
 text-shadow: 
    -1px -1px 0 white, 
    1px -1px 0 white, 
    -1px 1px 0 white, 
    1px 1px 0 white;
 `
 export const BunnerBtn=styled.button`
 padding:1%;
 text-align:center;
 align-items:center;
 
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
