import styled from "@emotion/styled";

export const CatalogBlock = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
 @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr; 
  }
`;

export const CatalogItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const CatImg = styled.img`
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease; 
   
  :hover {
    opacity: 0.3; 
  }
`;

export const TextOverlay = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 20px;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s ease;
   :hover {
    opacity: 1; 
  }
`;
export const Description=styled.div`
 position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  width: 90%;
  text-align: center;
  opacity: 0.9;
`
export const CatalogTitle=styled.h2`
font-size:28px;
text-align:center;
padding:1%;
`