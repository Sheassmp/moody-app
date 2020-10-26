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

export const InfoButton = styled(CustomButton)`
    border-radius: 50%;
    height: 400px;
    min-width: 400px;
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

export const InfoWrapper = styled.div`
    margin: 0 auto;
`;