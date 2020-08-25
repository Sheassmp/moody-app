import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const InfoContainer = styled.div`
    height: auto;
    width: auto;
    display: flex;
    top:29vh;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
`;

export const InfoButton = styled(CustomButton)`
    border-radius: 50%;
    height: 400px;
    min-width: 400px;
    margin: 10px;
    font-size: 2rem;
    align-items: center;
    background:linear-gradient(360deg, #383838 10%, #a2a2a2 360%);
`;

export const InfoWrapper = styled.div`
    margin: 0 auto;
`;