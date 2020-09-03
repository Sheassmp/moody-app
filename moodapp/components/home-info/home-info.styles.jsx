import styled from 'styled-components';

export const HomeInfoContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const PhotoText = styled.p`
    opacity: 0.5;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 30px;

    color: white;
    box-shadow:0 30px 40px 0 rgba(16, 36, 94, 0.2);


    &:hover {
        opacity:1;
    }
`;

