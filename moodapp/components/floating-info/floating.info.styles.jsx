import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position:absolute;
    /* width: 100vw; */
    height: fit-content;
    background: linear-gradient(360deg,#151111 10%,#a2a2a2 360%);
    text-align:center;
    top: 47px;
    /* border: double; */
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
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    justify-content: center;
    margin: 40px 50px 50px 50px;
    padding-bottom: 40px;
    border-bottom: groove #ffffff;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 98vw;
        margin: 0;
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

