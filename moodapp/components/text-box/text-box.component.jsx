import React from 'react';

import {TextBoxContainer, DisplayText, DisplayDate, MoonPhaseText, MaramatakaDayText} from './text-box.styles'
const moonString = "Moon Phase:  "
const TextBox = ({GeneratedText, dateText, moonPhaseText, maramatakaDayText}) => (
    
    
    <TextBoxContainer>
        <MaramatakaDayText>{maramatakaDayText}</MaramatakaDayText>
        <DisplayText>{GeneratedText}</DisplayText>
        <MoonPhaseText>{moonString}{moonPhaseText}</MoonPhaseText>
        <DisplayDate>{dateText}</DisplayDate>
        
    </TextBoxContainer>
);

export default TextBox;