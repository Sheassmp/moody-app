import styled, { keyframes } from "styled-components";
import CloseIcon from '../../assets/close.svg';


export const WelcomeContainer = styled.div`
  width: 100%;
  min-height:100%;
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: linear-gradient(360deg, #151111 10%, #a2a2a2 360%);
  z-index: 4;
  color: white;
  /* transition: all 3s ease-out; */
  

   &.closeMe {
        transform: translateX(-200vw);
        transition: all 2s ease-in-out;        
   }

`;


export const WelcomeButton = styled.button`
  background: inherit;
  color: white;
  border: solid white;
  border-radius: 5px;
  padding: 5px 20px 10px 20px;
  font-size: x-large;
  font-weight: 800;
  transition: all 0.5s ease-in-out;
  position: relative;
  top: 100px;

  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
  }

  &:focus {
      
        outline:none;
  }



`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
`;

export const WelcomeText = styled.div`
  padding: 25px;
  max-width: 80vw;
  font-size: xx-large;
  text-align: center;
  height: 180px;
  margin-bottom: 130px;

  &.anim {
    animation: ${fadeIn} 2s ease-in; 
  }
 
  @media (max-width: 768px) {
    font-size: large;
    height: fit-content;
    max-width: 97vw;
    margin-top: 60px;
    margin-bottom:0;
  }
`;

const run = keyframes`
0% {
      left: -90px;
      color: #eee;
    }
    50% {
      color: #666;
    }
    100% {
      left: 90px;
      color: #eee;
    }
`;

export const LoadingDot = styled.div`
  font-size: 100px;
  margin-top: -80px;
  position: relative;
  animation: ease-in-out infinite alternate;
  animation-name: ${run};
  animation-duration: 1.2s;
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



export const SkipButton = styled(CloseIcon)`
    width: 80px;
    height:80px;
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
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
