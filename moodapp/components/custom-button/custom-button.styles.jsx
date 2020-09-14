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

const circleAnimation = keyframes`
    100% {
        opacity: 1;
        transform: scale(1.2), translate(25,25);
    }
`;

const checkmarkAnimation = keyframes`

    40% {
        transform: scale(1.2), translate(25,25);
    }
    55% {
        stroke: #cfd8dc;
        transform: scale(1.2), translate(25,25);
        
    }
    70% {
        transform: scale(1.2), translate(25,25);
    }
    100% {
        stroke-dashoffset: 0;
        transform: scale(1.2), translate(25,25);
        stroke: #21b587;
    }
`




const calendarButtonStyles = css`
    .icon-box {
		border: 1px solid #eee;
		padding: 100px;
		position: relative;
		width:200px;
	}
	
	.icon-box:before {
		content: 'Hover to see animation.';
		bottom: 5px;
		display: block;
		left: 0;
		position: absolute;
		text-align: center;
		width: 100%;
	}
	
	.icon-box:hover .circle {
		animation: circle-animation 0.5s ease-out forwards;
	}
	
	.icon-box:hover .checkmark {
		animation: checkmark-animation 1s ease-out forwards;
		animation-delay: 0.25s;
	}
	
	#my-icon .circle {
		opacity: 0;
		transform: scale(0.9);
		transform-origin: center;
	}
	
	#my-icon .checkmark {
		stroke-dasharray: 400;
		stroke-dashoffset: 400;
		transform-origin: center;
		stroke: #cfd8dc;
	}
`;


const getButtonStyles = props => {
    return props.inverted ? invertedButtonStyles : buttonStyles;
};

const getCalendarBtnStyles = props => {
    return props.inverted ? invertedButtonStyles : calendarButtonStyles;
}

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

export const CalendarButton = styled.svg`
    
    width: 150px;
    position: absolute;
    height: 150px;
    bottom: 50px;
    right: 50px;
    
    .my-icon::before {
        content: 'Hover to see animation.';
		bottom: 5px;
		display: block;
		left: 0;
		position: absolute;
		text-align: center;
		width: 100%;
    }


    &#my-icon .circle {
        stroke: #cfd8dc;
        stroke-miterlimit: 10;
        opacity: 0;
		transform: scale(0.9);
		transform-origin: center;
        

    }
        
    &#my-icon:hover .circle {
            animation: ${circleAnimation} 0.5s ease-out forwards;
        }

   &#my-icon .checkmark {
        stroke:#21b587;
        stroke-linecap:round;
		transform-origin: center;
		stroke-dasharray: 400;
		stroke-dashoffset: 400;
    }
        &#my-icon:hover .checkmark {
            animation: ${checkmarkAnimation};
            animation-duration: 1s;
            animation-timing-function: ease-out;
            animation-direction: forwards;
            animation-delay: 0.5s;
        }
    

`;

export const styledCircle = styled.circle`
       
       .circle {

        stroke: #cfd8dc;
        stroke-miterlimit: 10;

        opacity: 0;
		transform: scale(0.9);
		transform-origin: center;

        &:hover {
            animation: ${circleAnimation} 0.5s ease-out forwards;
        }
       }
`;


