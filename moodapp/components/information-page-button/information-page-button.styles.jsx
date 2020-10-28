import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';


export const InfoButton = styled(CustomButton)`
border-radius: 50%;
height: 350px;
min-width: 350px;
margin: 10px;
font-size: 2rem;
align-items: center;
background:linear-gradient(360deg, #383838 10%, #a2a2a2 360%);
-webkit-box-shadow: 14px 10px 23px -6px rgba(0,0,0,0.75);
-moz-box-shadow: 14px 10px 23px -6px rgba(0,0,0,0.75);
box-shadow: 14px 10px 23px -6px rgba(0,0,0,0.75);
transition: all 0.4s ease-in-out;

&:hover {
    box-shadow:0 30px 40px 0 rgba(16, 36, 94, 0.2);
    border: none;
    transform: scale(0.95);
    color: grey;
}

&:focus {
  outline: none;
}
`;