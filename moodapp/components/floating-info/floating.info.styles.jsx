import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position:absolute;
    /* width: 100vw; */
    height: 400%;
    background: linear-gradient(360deg,#151111 10%,#a2a2a2 360%);
    text-align:center;
    top: 47px;
    /* border: double; */
    align-self: center;
    z-index: 1;
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
`;

export const DetailsContainer = styled.div`
    text-align: center;
    display: block;
    margin: 40px 50px 50px 50px;
    padding-bottom: 40px;
    border-bottom: groove #ffffff;
`;

