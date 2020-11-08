import styled from "styled-components";

export const MoonImg = styled.img`
  width: 41vw;
  height: 41vw;
  justify-content: center;
  -webkit-box-shadow: 14px 10px 23px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 14px 10px 23px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 14px 10px 23px -6px rgba(0, 0, 0, 0.75);
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 89vw;
    height: 89vw;
  }
`;

export const HomeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhotoText = styled.p`
  opacity: 0.5;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;

  color: white;
  box-shadow: 0 30px 40px 0 rgba(16, 36, 94, 0.2);

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    bottom: 41.5vh;
    left: 25vw;
    font-size: x-small;
  }
`;

export const HeaderText = styled.h1`
  font-size: 8vw;
  text-align: center;

  font-weight: 600;
  top: 23vh;
  position: absolute;

  @media (max-width: 768px) {
    font-size: 15vw;
    top: 18vh;
  }
`;

export const HeaderLetters = styled.span`
  position: relative;
  opacity: 0;
  animation: move-text 0.75s forwards;
`;
