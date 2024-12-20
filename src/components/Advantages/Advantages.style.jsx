import styled from "@emotion/styled";

export const BlockA=styled.div`
display:grid;
grid-template-colums:repeat(1,1fr);
padding:5%;

`
export const BlockText=styled.p`
font-size:40px;
@media (max-width: 768px) {
    font-size:35px;
  }
    @media (max-width: 320px) {
    font-size:30px;
  }
`
export const BlockTitle=styled.h2`
font-size:28px;
text-align:center;

`