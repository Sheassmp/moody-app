import React, { useState } from "react";
import {
  InfoContainer,
  ButtonContainer
} from "./information-page-info.styles";
import FloatingInfoComponent from "../floating-info/floating-info.component";
import InfoButtonComponent from '../information-page-buttons/information-page-button.component';
import ReturnBtnComponent from '../information-page-buttons/return-button.component';
import SectionBox from "../section-box/section-box.component";

function FloatingComponent({ text, content, image, title, type  }) {

  const [showInfo, setShowInfo] = useState(false);

    switch (content) {
        case 0:
            title=""
            text = "Cited Research"
            image = "/images/visit.jpg"
            type= text;
            break;
        case 1:
            text = "Mental Health Aid"
            image = "/images/contact.jpg"
            title = ""
            type=text;
            break;
        case 2:
            text = "Available Resources"
            image= "/images/visit.jpg"
            title= ""
            type=text;
            break;
        default:
            text = ""
            image= "/images/visit.jpg"
            title= ""
            type=text;
            break;
    }

  return !showInfo ? (
    <>
      <SectionBox
        handleClick={() => setShowInfo(true)}
        containerClick={() => setShowInfo(true)}
        style={{paddingTop: "40px"}}
          header={text}
        />
    </>
  ) : (
    <>
   
      <SectionBox
        handleClick={() => setShowInfo(false)}
        containerClick={() => setShowInfo(false)}
        header={text}
      />
 
  
      <FloatingInfoComponent
        type={type}
        image={image}
        text={text}
        title={title}
        closeClick={() => setShowInfo(false)}
      />
    </>
  );
}

const InformationPageInfo = ({returnClick}) => {
  return (
    <InfoContainer>
    <ReturnBtnComponent
        handleClick={returnClick}
        id="exit-icon"
        viewBox="0 0 640 640"
        width="640"
        height="640"
        text="Home"
      >
        <path
          className="circle"
          opacity="1"
          fillOpacity="0"
          stroke="#cecece"
          strokeWidth="13"
          strokeOpacity="1"
          d="M435 320C435 388.99 378.99 445 310 445C241.01 445 185 388.99 185 320C185 251.01 241.01 195 310 195C378.99 195 435 251.01 435 320Z"
        />
        <path
          className="right-dash"
          opacity="1"
          fillOpacity="0"
          stroke="#ffffff"
          strokeWidth="13"
          strokeOpacity="1"
          d="M385 245L235 395"
        />
        <path
          className="left-dash"
          opacity="1"
          fillOpacity="0"
          stroke="#ffffff"
          strokeWidth="13"
          strokeOpacity="1"
          d="M385 395L235 245"
        />
      
      </ReturnBtnComponent>
      <ButtonContainer>
        <FloatingComponent  content={0} />
        <FloatingComponent  content={1} />
        <FloatingComponent  content={2} />
      </ButtonContainer>
    </InfoContainer>
  );
};

export default InformationPageInfo;
