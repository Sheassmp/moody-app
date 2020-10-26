import React, { useState } from "react";
import {
  InfoContainer,
  InfoButton,
  ButtonContainer
} from "./information-page-info.styles";
import FloatingInfoComponent from '../floating-info/floating-info.component';


function FloatingComponent({text}) {
    
    const [showInfo, setShowInfo] = useState(false);
    
    return (
     
         showInfo ? (      
         <>
            <InfoButton handleClick = {() => setHidden(false)} header={header} description={desc} />
         </>
     ) : (
         <>
            <InfoButton handleClick = {() => setHidden(false)} header={header} description={desc} />
            <FloatingInfoComponent linkTo = {linkTo} handleLinkClick={openInNewTab}  image = {image} text={text} title={title} handleClick={() => setHidden(true)} />
          </>
        )
        
        )
    }         



const InformationPageInfo = ({ researchClick, contactClick, visitClick }) => {  
  
  return (

        <InfoContainer>
        <ButtonContainer>
          <InfoButton>Research</InfoButton>
          <InfoButton>Contact</InfoButton>
          <InfoButton>Visit</InfoButton>
        </ButtonContainer>
      </InfoContainer>
    
  );
};

export default InformationPageInfo;
