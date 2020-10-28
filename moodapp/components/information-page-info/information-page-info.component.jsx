import React, { useState } from "react";
import {
  InfoContainer,
  ButtonContainer
} from "./information-page-info.styles";
import FloatingInfoComponent from "../floating-info/floating-info.component";
import InfoButtonComponent from '../information-page-button/information-page-button.component';

function FloatingComponent({ text }) {

  const [showInfo, setShowInfo] = useState(false);

    switch (context) {
        case 0:
            text = "Research"
            break;
        case 1:
            text = "Contact"
            break;
        case 2:
            text = "Visit"
            break;
        default:
            text = ""
            break;
    }

  return !showInfo ? (
    <>
      <InfoButtonComponent
        handleClick={() => setShowInfo(true)}
        text = {text}
        
        />
    </>
  ) : (
    <>
      <InfoButtonComponent
        handleClick={() => setShowInfo(false)}
      />

      <FloatingInfoComponent
        linkTo={linkTo}
        handleLinkClick={openInNewTab}
        image={image}
        text={text}
        title={title}
        handleClick={() => setShowInfo(false)}
      />


    </>
  );
}

const InformationPageInfo = () => {
  return (
    <InfoContainer>
      <ButtonContainer>
        <FloatingComponent content={0} />
        <FloatingComponent content={1} />
        <FloatingComponent content={2} />
      </ButtonContainer>
    </InfoContainer>
  );
};

export default InformationPageInfo;
