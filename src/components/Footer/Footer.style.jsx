import styled from "@emotion/styled";

export const FooterSection = styled.section`
display:flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: var(--backgroundColor);
  /* box-shadow: 0 0px 6px rgba(0, 0, 0, 0.1); */
  z-index: 3;
  margin:5% 5%;
  @media (width<775px){
   margin-top:1%; 
  }
  @media(width<770px){
flex-direction: column;
  }
`;
export const TextFooter = styled.p`
display:flex ;
`;

export const InfoFooter = styled.p`
display:flex ;
gap:20px;
@media (width<630px) {
 flex-direction: column;
 gap:5px; 
 margin:0;
}
`
export const Phone = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  @media (width<630px) {
    margin: 0;
  }
`;
export const Email = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  @media (width<630px) {
    margin: 0;
  }
`;
export const Follow = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  @media (width<630px) {
    margin: 0;
  }
`;

export const InfoFooterText = styled.p`
margin:0;
font-size:15px;
font-weight: 500;
@media(width<630px){  
  font-size:13px;
}
`
export const FacebookImg=styled.img`
width:20px;
height:20px;
`