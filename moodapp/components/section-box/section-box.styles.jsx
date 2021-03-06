import styled from 'styled-components';


export const SectionContainer = styled.div`
    display:flex;
    flex-direction: column;
    border-radius: 3px;
    list-style: none;
    flex: 0 0 31.333333%;
    border: double;
    border-color: #e2e2e2;
    padding: 20px;
    margin: 10px;
    justify-content:center;
    text-align: center;
    transition: border-color .5s ease-in-out;
    color: white;
    max-height: 350px;

    &:hover {
        border-color: #b12d2db5;
    }

    @media (max-width: 768px) {
        max-height: 320px;
    }
`;



export const SectionHeader = styled.h2`
    cursor: pointer;
    transform: scale(.9);
    transition: all .5s ease-in-out;
    &:hover {
        transform: scale(.95);
        
    }
`;

export const SectionDescription = styled.p`
    text-align: center;
    padding: 3px;
`;