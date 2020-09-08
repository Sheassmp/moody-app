import styled from 'styled-components';


export const TextBoxContainer = styled.div`
    width: 800px;
    height: 230px;
    border-radius: 25px;
    position: absolute;
    top: 71vh;
    box-shadow:10px 10px 25px 7.5px #100000;    
    text-align-last: center;
    /* gradients */
    background: rgba(212,228,239,1);
    background: -moz-linear-gradient(top, rgba(212,228,239,1) 0%, rgba(134,174,204,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(212,228,239,1)), color-stop(100%, rgba(134,174,204,1)));
    background: -webkit-linear-gradient(top, rgba(212,228,239,1) 0%, rgba(134,174,204,1) 100%);
    background: -o-linear-gradient(top, rgba(212,228,239,1) 0%, rgba(134,174,204,1) 100%);
    background: -ms-linear-gradient(top, rgba(212,228,239,1) 0%, rgba(134,174,204,1) 100%);
    background: linear-gradient(to bottom, rgba(212,228,239,1) 0%, rgba(134,174,204,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d4e4ef', endColorstr='#86aecc', GradientType=0 );
`;

export const DisplayText = styled.p`
    font-weight: lighter;
    font-size: 1.45rem;
    text-align: center;
    max-width: 700px;
    margin: auto;
`;

export const DisplayDate = styled.h1`
    font-weight: lighter;
    font-size: 1.5rem;
    text-align: center;
    color: grey;
    
`;