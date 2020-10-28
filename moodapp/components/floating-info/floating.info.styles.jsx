import styled,{keyframes} from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position:absolute;
    width: 92vw;
    height: 80%;
    background: #dadada;
    text-align:center;
    max-width: 1200px;
    border: double;
    align-self: center;
    z-index: 1;
    top: 12vh;
`;

export const Image = styled.img`
    width: 100%;
    height: 100px;
`;

export const BlockText = styled.p`
    text-align: center;
    width: 75%;
    min-height: 52px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: double #00000036;
`;

export const SectionContainer = styled.div`
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    justify-content: 0;
    margin: 0 auto;
    max-width: 1200;
    border-bottom: groove #0000001a;
`;


