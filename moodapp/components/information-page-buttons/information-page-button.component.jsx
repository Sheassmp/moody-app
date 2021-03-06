import React from 'react';
import {InfoButton} from './information-page-button.styles';
const InfoBtnComponent = ({text, handleClick}) => {   
    return (
          <InfoButton onClick = {handleClick} >{text}</InfoButton>
    )
}

 export default InfoBtnComponent;