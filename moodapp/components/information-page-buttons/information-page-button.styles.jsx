import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';


export const InfoButton = styled(CustomButton)`
/* border-radius: 50%; */
height: 300px;
width: 300px;
margin: 10px;
font-size: large;
align-items: center;
background:linear-gradient(360deg,#151111 10%,#a2a2a2 360%);
color: white;
border: double;
border-color: #e2e2e2;
-webkit-box-shadow: 14px 10px 23px -6px rgba(0,0,0,0.75);
-moz-box-shadow: 14px 10px 23px -6px rgba(0,0,0,0.75);
box-shadow: 14px 10px 23px -6px rgba(0,0,0,0.75);
transition: all 0.4s ease-in-out;

&:hover {
    border: red;
     color: whitesmoke;
  
}

&:focus {
  outline: none;
}
`;

export const ReturnButton = styled(CustomButton)`
/* border-radius: 50%; */
height: 4%;
width: 4%;
min-width: 6%;
margin: 10px;
position: absolute;
bottom: 3vh;
right: 2vw;
font-size: large;
align-items: center;
background:linear-gradient(to bottom,rgba(212,228,239,1) 0%,rgb(102 112 119) 100%);
-webkit-box-shadow: 14px 10px 23px -6px rgba(0,0,0,0.75);
-moz-box-shadow: 14px 10px 23px -6px rgba(0,0,0,0.75);
box-shadow: 14px 10px 23px -6px rgba(0,0,0,0.75);
transition: all 0.4s ease-in-out;

&:hover {
    box-shadow:0 30px 40px 0 rgba(16, 36, 94, 0.2);
    border: none;
    transform: scale(0.95);
    font-weight: bolder;
    color: whitesmoke;
    background:linear-gradient(360deg,#ec1c24 10%,#221212 360%);
}

&:focus {
  outline: none;
}
`;