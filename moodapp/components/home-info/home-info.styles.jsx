import styled,{keyframes} from 'styled-components';


const breatheAnimation = keyframes`
 0% { height: 800px; width: 800px; }
 30% { height: 900px; width: 900px; opacity: 1 }
 40% { height: 905px; width: 905px; opacity: 0.3; }
 100% { height: 800px; width: 800px; opacity: 0.6; }
`;


export const MoonImg = styled.img`
    /* animation: ${breatheAnimation};
    animation-duration: 8s;
    animation-iteration-count: infinite; */
`;

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
    bottom: 10px;
    left: 8px;

    color: white;
    box-shadow:0 30px 40px 0 rgba(16, 36, 94, 0.2);


    &:hover {
        opacity:1;
    }
`;

