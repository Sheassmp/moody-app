import styled, { keyframes } from "styled-components";

export const WelcomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: linear-gradient(360deg, #151111 10%, #a2a2a2 360%);
  z-index: 1;
  color: white;
`;

const borderAnim = keyframes`
    20% {
        color: rgba(255, 255, 255, 1);
        -webkit-box-shadow: -2px 4px 36px -19px rgba(255,0,102,1);
        -moz-box-shadow: -2px 4px 36px -19px rgba(255,0,102,1);
        box-shadow: -2px 4px 36px -19px rgba(255,0,102,1);
        outline:none;
    }

    50% {
        color: rgba(255, 255, 255, 1);
        -webkit-box-shadow: -2px 4px 56px -19px rgba(255,0,102,1);
-moz-box-shadow: -2px 4px 56px -19px rgba(255,0,102,1);
box-shadow: -2px 4px 56px -19px rgba(255,0,102,1);
        outline:none;
    }



    100% {
         color: rgba(255, 255, 255, 1);
         outline:none;
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
  

  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
  }

  &:focus {
      
        outline:none;
  }
`;

export const WelcomeText = styled.div`
  padding: 25px;
  max-width: 80vw;
  font-size: xx-large;
  text-align: center;
  height: 180px;
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
