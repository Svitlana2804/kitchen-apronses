import styled from "@emotion/styled";

export const SliderContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 5% auto;
  overflow: hidden;
`;

export const SlideTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const Slide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  text-align: center;
`;

export const SlideImage = styled.img`
  max-width: 100px;
  height: auto;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export const PrevButton = styled(Button)`
  left: 10px;
`;

export const NextButton = styled(Button)`
  right: 10px;
`;

export const SlideName=styled.p`
font-size:18px;
`

export const SlideText=styled.p`
font-size:15px;
`
export const SlideTitle=styled.h2`
font-size:28px;
text-align:center;
padding:1%;
`