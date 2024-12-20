import styled from "@emotion/styled";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 50px;

  @media (max-width: 600px) {
    padding: 20px;
    width: 90%;
  }
`;
  export const TitleForm=styled.h1`
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  `
  
  export const LabelTeam=styled.label`
    font-size: 16px;
    margin-bottom: 8px;
    color: #333;
  `
  export const StyledInput = styled.input`
  font-size: 14px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
export const StyledTextarea = styled.textarea`
  font-size: 14px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
  
  export const ButtonSubmit=styled.button`
    padding: 12px 20px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  :hover {
    background-color: #0056b3;
  }
  `
  export const ErrorMsg=styled.div `
    color: #ff0000;
    font-size: 12px;
    margin-top: 4px;
  `
  
