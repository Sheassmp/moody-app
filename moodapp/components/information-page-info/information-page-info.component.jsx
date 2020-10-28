import React, { useState } from "react";
import {
  InfoContainer,
  ButtonContainer
} from "./information-page-info.styles";
import FloatingInfoComponent from "../floating-info/floating-info.component";
import InfoButtonComponent from '../information-page-button/information-page-button.component';

function FloatingComponent({ text, content, image, title  }) {

  const [showInfo, setShowInfo] = useState(false);

    switch (content) {
        case 0:
            title=""
            text = "Research"
            image = ""
            break;
        case 1:
            text = "Contact"
            image = ""
            title = ""
            break;
        case 2:
            text = "Visit"
            image= ""
            title= ""
            break;
        default:
            text = ""
            image= ""
            title= ""
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
