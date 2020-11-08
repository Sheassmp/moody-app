import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position:absolute;
    height: fit-content;
    background: linear-gradient(360deg,#151111 10%,#a2a2a2 360%);
    text-align:center;
    top: 47px;
    align-self: center;
    z-index: 1;

    @media (max-width: 768px) {
        height: fit-content;

  }
`;

export const DetailsImage = styled.img`
    width: 570px;
    height: 967px;
    margin: auto auto 40px;
    border: double;

    @media (max-width: 768px) {
        width: 80vw;
        height: auto;
    }
`;

export const DetailsHeader = styled.h2`

`;
export const Details = styled.p`

`;

export const SectionContainer = styled.div`
    padding-left: 0;
    justify-content: center;
    margin: 40px 50px 50px 50px;
    padding-bottom: 40px;
    height: fit-content;
    border-bottom: groove #ffffff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        display: block;
        flex-direction: column;
        width: auto;
        margin: 0;
        flex-wrap: unset;
        -ms-flex-wrap: unset;
        flex-wrap: unset;
    }

`;

export const DetailsContainer = styled.div`
    text-align: center;
    display: block;
    margin: 40px 50px 50px 50px;
    padding-bottom: 40px;
    border-bottom: groove #ffffff;

    @media (max-width: 768px) {
        width: 81vw;
        margin: 20px 25px 20px 38px;
        text-align: left;
    }
`;

