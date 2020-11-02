import React from 'react';
import {ReturnButton} from './information-page-button.styles';

const ReturnBtnComponent = ({text, handleClick}) => {   
    return (
          <ReturnButton onClick = {handleClick} >{text}</ReturnButton>
    )
}

export default ReturnBtnComponent;