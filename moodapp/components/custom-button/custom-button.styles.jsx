import styled,{css, keyframes} from 'styled-components';
import CalendarIcon from '../../assets/date_range-black-18dp.svg';

const breatheAnimation = keyframes`
 0% { height: 50px; width: 250px; }
 30% { height: 55px; width: 255px; opacity: 1 }
 40% { height: 55px; width: 255px; opacity: 0.3; }
 100% { height: 50px; width: 250px; opacity: 0.6; }
`;


const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;


const getButtonStyles = props => {
    return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const ButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
  
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    display: flex;
    flex-grow: 2;
    justify-content: center;
    font-weight: bolder;
    cursor: pointer;
    border-radius: 5px;
    /* animation: ${breatheAnimation}; */
    /* animation-duration: 8s; */
    /* animation-iteration-count: infinite; */
    ${getButtonStyles}
`;

export const CalendarButton = styled(CalendarIcon)`
     width: 100px;
    position: absolute;
    height: 100px;
    bottom: 50px;
    right: 50px;
`;

