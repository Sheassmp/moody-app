import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: linear-gradient(360deg, #151111 10%, #a2a2a2 360%);
  z-index: 3;
  color: white;
  @media (max-width: 768px) {
    height: fit-content;
    padding: 50px 0 50px 0px;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 60px;
  }
`;

export const InfoWrapper = styled.div`
  margin: 0 auto;
`;
