import styled from 'styled-components';

export const ContactDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
`;

export const ContactTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  width: 40%;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 3px;
  border-radius:5px;
  border: 1px solid ${props => props.theme.colors.currentLine}b3;
  height:40px;
  padding: 15px;
  background-color: transparent;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 300;
  font-size: 17px;
  letter-spacing: 1.3px;
  transition:color .25s ease-in-out,background-color .25s ease-in-out,border-color .25s ease-in-out,box-shadow .25s ease-in-out;
  &:focus{
    border-radius:3px;
    outline:0;
    border: 1px solid ${props => props.theme.colors.pink};
    box-shadow: 0 0 0 0.2rem ${props => props.theme.colors.lightPink};
    transition:color .25s ease-in-out,background-color .25s ease-in-out,border-color .25s ease-in-out,box-shadow .25s ease-in-out;
  }
`;

export const Divider = styled.hr`
  width: 25%;
  border: 1px solid ${props => props.theme.colors.currentLine};
`;

export const Label = styled.label`
  font-family: ${props => props.theme.fontFamily};
  font-weight: 500;
  font-size: 17px;
  letter-spacing: 1.3px;
  color: ${props => props.theme.colors.currentLine};
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 3px;
  border-radius:5px;
  border: 1px solid ${props => props.theme.colors.currentLine}b3;
  height:100px;
  padding: 15px;
  background-color: transparent;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 300;
  font-size: 17px;
  letter-spacing: 1.3px;
  resize: none;
  transition:color .25s ease-in-out,background-color .25s ease-in-out,border-color .25s ease-in-out,box-shadow .25s ease-in-out;
  &:focus{
    border-radius:3px;
    outline:0;
    border: 1px solid ${props => props.theme.colors.pink};
    box-shadow: 0 0 0 0.2rem ${props => props.theme.colors.lightPink};
    transition:color .25s ease-in-out,background-color .25s ease-in-out,border-color .25s ease-in-out,box-shadow .25s ease-in-out;
  }
`;

export const FormControl = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  justify-content: flex-start;
  margin-bottom: 20px;
  &:last-child{
    margin-bottom: 10px;
  }
`;

export const ErrorMessage = styled.p`
  &&{
    font-family: ${props => props.theme.fontFamily};
    font-weight: 300;
    font-size: 12px;
    color: red;
  }
`;

export const RedSpan = styled.span`
  &&{
    margin-left:3px;
    color: red;
  }
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  width: 30%;
  height: 40px;
  background-color: ${props => props.theme.colors.pink};
  border: 1px solid ${props => props.theme.colors.pink};
  z-index: 2;
  border-radius: 4px;
  color: ${props => props.theme.colors.foreground};
  font-family: ${props => props.theme.fontFamily};
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:active{
    box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
  }
  &:focus{
    outline: 0;    
  }
  &:hover{
    background: #df39b1 radial-gradient(circle, transparent 1%, #df39b1 1%) center/15000%;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  }
`;