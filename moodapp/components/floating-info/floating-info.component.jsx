import React, { useState } from "react";
import { Parallax } from "react-parallax";

import {
  SectionContainer,
  Container,
  Details,
  DetailsHeader,
  DetailsContainer
} from "../floating-info/floating.info.styles";
import { CloseInfoBtn } from "../custom-button/custom-button.styles";
import SectionBox from "../section-box/section-box.component";

//TODO create a component to be populated on click according to section

const FloatingInfoComponent = ({
  closeClick,
  textInfo,
  image,
  type,
}) => {
var sectionHeaders = [],
    sectionDesc = [],
    sectionLinks = [],
    fullDescription = "This is a full description"
    ;

  var researchHeaders = [
    "The Maori Division of Time",
    "Mātauranga Māori—the ūkaipō of knowledge in New Zealand.",
    "Mahi Māra: Living by Maramataka Māori in an urban setting",
    "Maramataka: The Maori Moon Calendar.",
    "Tangaroa Ara Rau: Tangaroa the Atua of Human Movement.",
    "Ancient Egyptian Calendars of Lucky and Unlucky Days.",
  ];

  var researchDesc = [
    "Elsdon B. (2018)",
    "Hikuroa, D. (2017).",
    "Hoeta, A. (2020).",
    "Roberts, M., Weko, F., Clarke, L., (2006)",
    "Hanara, B., & Jackson, A. (2019).",
    "Porceddu, S., Jetsu, L., Markkanen, T., & Toivari-Viitala, J. (2008).",
  ];

  var researchLinks = [
    "http://nzetc.victoria.ac.nz/tm/scholarly/tei-BesTime-t1-body-d1-d3.html",
    "https://cdn.auckland.ac.nz/assets/arts/research-centres/ppi/policy-briefings/PPI%20Briefing%20Hikuroa%202018.pdf",
    "https://toitangata.co.nz/2020/04/29/mahi-mara-living-by-maramataka-maori-in-an-urban-setting/",
    "http://researcharchive.lincoln.ac.nz/handle/10182/155",
    "http://www.maramatanga.ac.nz/sites/default/files/project-reports/NPM_ngaAkonga_HanaraJackson_18INT01%20%28003%29.pdf",
    "https://www.mv.helsinki.fi/home/jetsu/papers/egypt1.pdf",
  ];

  var contactHeaders = [];
  var contactDesc = [];
  var contactLinks = [];

  var visitHeaders = [];
  var visitDesc = [];
  var visitLinks = []; 



  if (type === "Research") {
    sectionHeaders = researchHeaders;
    sectionDesc = researchDesc;
    sectionLinks = researchLinks;
  } else if (type === "Contact") {
    sectionHeaders = researchHeaders;
    sectionDesc = researchDesc;
    sectionLinks = researchLinks;
  } else if (type === "Visit") {
    sectionHeaders = researchHeaders;
    sectionDesc = researchDesc;
    sectionLinks = researchLinks;
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
      <Parallax style={{ height: `80vh` }} bgImage={image} strength={500} />
      <SectionContainer>
        <SectionBox
          handleClick={() => {
            var win = window.open(sectionLinks[0], "_blank");
            win.focus();
          }}
          header={sectionHeaders[0]}
          description={sectionDesc[0]}
        />
        <SectionBox
           handleClick={() => {
            var win = window.open(sectionLinks[1], "_blank");
            win.focus();
          }}
          header={sectionHeaders[1]}
          description={sectionDesc[1]}
        />
        <SectionBox
           handleClick={() => {
            var win = window.open(sectionLinks[2], "_blank");
            win.focus();
          }}
          header={sectionHeaders[2]}
          description={sectionDesc[2]}
        />
        <SectionBox
           handleClick={() => {
            var win = window.open(sectionLinks[3], "_blank");
            win.focus();
          }}
          header={sectionHeaders[3]}
          description={sectionDesc[3]}
        />
        <SectionBox
        handleClick={() => {
            var win = window.open(sectionLinks[4], "_blank");
            win.focus();
          }}
          header={sectionHeaders[4]}
          description={sectionDesc[4]}
        />
        <SectionBox
            handleClick={() => {
            var win = window.open(sectionLinks[5], "_blank");
            win.focus();
          }}
          header={sectionHeaders[5]}
          description={sectionDesc[5]}
        />
      </SectionContainer>
      <SectionContainer>
          <DetailsHeader>{type}</DetailsHeader>
          <Details>
          {fullDescription}
          </Details>
      </SectionContainer>
    </Container>
  );
};

export default FloatingInfoComponent;
