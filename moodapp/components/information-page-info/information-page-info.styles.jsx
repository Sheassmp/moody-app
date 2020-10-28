import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const InfoContainer = styled.div`
    width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: linear-gradient(360deg, #151111 10%, #a2a2a2 360%);
  z-index: 1;
  color: white;
  /* transition: all 3s ease-out; */
`;

export const ButtonContainer = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: row;
`;


export const InfoWrapper = styled.div`
    margin: 0 auto;
`;