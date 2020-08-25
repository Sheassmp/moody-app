import React from 'react';

import {TextBoxContainer, DisplayText, DisplayDate} from './text-box.styles'

const TextBox = ({GeneratedText, dateText}) => (
    <TextBoxContainer>
        <DisplayDate>{dateText}</DisplayDate>
        <DisplayText>{GeneratedText}</DisplayText>
    </TextBoxContainer>
);

export default TextBox;