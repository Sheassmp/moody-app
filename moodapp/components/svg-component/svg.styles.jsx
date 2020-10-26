import styled,{keyframes} from 'styled-components';

export const ButtonContainer = styled.svg`
    width: 50px;
    position: absolute;
    height: 50px;
    


`;


const circleAnimation = keyframes`
    100% {
        opacity: 1;
        transform: scale(1.5), translate(25,25);
    }
`;

const dashAnimation = keyframes`
    40% {
        transform: scale(1.1), translate(25,25);
    }
    55% {
        stroke: #ff6633;
        transform: scale(1.1),translate(25,25);
        
    }
    70% {
        transform: scale(1.1),translate(25,25);
    }
    100% {
        stroke-dashoffset: 0;
        transform: scale(1.1),translate(25,25);
        stroke: #cc0033;
    }
`



export const CloseBtn = styled(ButtonContainer)`

    width: 100px;
    height: 100px;
    right: 1px;
    top: 39VH;
    z-index: 1;

     &#exit-icon .left-dash .right-dash {
        opacity: 0.5;
        stroke-linecap:round;
		transform-origin: center;
		stroke-dasharray: 400;
		stroke-dashoffset: 400;
    }
    &#exit-icon:hover .left-dash {
        animation: ${dashAnimation} 0.8s ease-out forwards; 
    }
    &#exit-icon:hover .right-dash {
        animation: ${dashAnimation} 1s ease-out forwards; 
    }
    &#exit-icon .circle {
            opacity: 0;
            transform-origin: center;
    }
    &#exit-icon:hover .circle {
        animation: ${circleAnimation} 0.5s ease-out forwards;        
    }


`;

