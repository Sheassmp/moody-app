import React from "react";
import { Parallax } from "react-parallax";

import {
  SectionContainer,
  Container,
} from "../floating-info/floating.info.styles";
import { CloseInfoBtn } from "../custom-button/custom-button.styles";
import SectionBox from "../section-box/section-box.component";

//TODO create a component to be populated on click according to section

const FloatingInfoComponent = ({ closeClick, textInfo, image, type }) => {
  var head1 = "",
    head2 = "",
    head3 = "",
    head4 = "",
    head5 = "",
    head6 = "";
  var desc1 = "",
    desc2 = "",
    desc3 = "",
    desc4 = "",
    desc5 = "",
    desc6 = "";

  switch (type) {
    case "Research":
      (desc1 = ""),
        (desc2 = ""),
        (desc3 = ""),
        (desc4 = ""),
        (desc5 = ""),
        (desc6 = "");
      (head1 = ""),
        (head2 = ""),
        (head3 = ""),
        (head4 = ""),
        (head5 = ""),
        (head6 = "");
      break;
    case "Contact":
      (desc1 = ""),
        (desc2 = ""),
        (desc3 = ""),
        (desc4 = ""),
        (desc5 = ""),
        (desc6 = "");
      (head1 = ""),
        (head2 = ""),
        (head3 = ""),
        (head4 = ""),
        (head5 = ""),
        (head6 = "");

      break;
    case "Visit":
      (desc1 = ""),
        (desc2 = ""),
        (desc3 = ""),
        (desc4 = ""),
        (desc5 = ""),
        (desc6 = "");
      (head1 = ""),
        (head2 = ""),
        (head3 = ""),
        (head4 = ""),
        (head5 = ""),
        (head6 = "");

      break;
    default:
      break;
  }

  return (
    <Container>
      <CloseInfoBtn
        onClick={closeClick}
        id="exit-icon"
        viewBox="0 0 640 640"
        width="640"
        height="640"
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
      </CloseInfoBtn>
      <Parallax
        // blur={{ min: -10, max: 10 }}
        style={{ height: `90vh` }}
        bgImage={image}
        strength={300}
      />
      <SectionContainer>
        <SectionBox
          header={"The Maori Division of Time"}
          description="Elsdon B. (2018)"
        />
        <SectionBox
          header={"Mātauranga Māori—the ūkaipō of knowledge in New Zealand."}
          description="Hikuroa, D. (2017)."
        />
        <SectionBox
          header={"Mahi Māra: Living by Maramataka Māori in an urban setting"}
          description="Hoeta, A. (2020)."
        />
        <SectionBox
          header={"Maramataka: The Maori Moon Calendar."}
          description="Roberts, M., Weko, F., Clarke, L., (2006)"
        />
        <SectionBox
          header={"Tangaroa Ara Rau: Tangaroa the Atua of Human Movement."}
          description="Hanara, B., & Jackson, A. (2019)."
        />
        <SectionBox
          header={"Ancient Egyptian Calendars of Lucky and Unlucky Days."}
          description="Porceddu, S., Jetsu, L., Markkanen, T., & Toivari-Viitala, J. (2008)."
        />
      </SectionContainer>
    </Container>
  );
};

export default FloatingInfoComponent;
