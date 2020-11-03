import styled from 'styled-components';

export const MoonPhaseText = styled.h1`
    
    font-size: 1rem;
    text-align: center;
    color: black;
    @media (max-width: 768px) {
        font-size:0.75rem;
    }
`;

export const MaramatakaDayText = styled.span`
    font-size: 1.7rem;
    text-align: center;
    color: black;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 0.25em;
    text-decoration: underline;
    
    @media (max-width: 768px) {
       font-size:1.4rem;
    }
`;

export const TextBoxContainer = styled.div`
    width: 46vw;
    height: 25vh;
    border-radius: 25px;
    position: absolute;
    top: 62vh;
    box-shadow:10px 10px 25px 7.5px #100000;    
    text-align-last: center;
    /* gradients */
    background: rgba(212,228,239,1);
    background: -moz-linear-gradient(top, rgba(212,228,239,1) 0%, rgba(134,174,204,1) 100%);
    background: -webkit-linear-gradient(top, rgba(212,228,239,1) 0%, rgb(102 112 119) 100%);
    background: -o-linear-gradient(top, rgba(212,228,239,1) 0%, rgb(102 112 119) 100%);
    background: -ms-linear-gradient(top, rgba(212,228,239,1) 0%, rgb(102 112 119) 100%);
    background: linear-gradient(to bottom, rgba(212,228,239,1) 0%, rgb(102 112 119) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d4e4ef', endColorstr='#86aecc', GradientType=0 );


    @media (max-width: 768px) {
        width: 91vw;
    height: 28vh;
    top: 60vh;
    }
`;

export const DisplayText = styled.p`
 
    font-size: 1.4rem;
    text-align: center;
    max-width: 700px;
    margin: auto;
    @media (max-width: 768px) {
        min-height: 80px;
        font-size:1rem;
    }
   
`;

export const DisplayDate = styled.span`
    font-weight: lighter;
    font-size: 1rem;
    text-align: center;
    color: black;
    bottom: 5px;
    position: relative;
    @media (max-width: 768px) {
        font-size:0.75rem;
    }
`;