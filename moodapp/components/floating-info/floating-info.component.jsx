import React, { useState } from "react";
import { Parallax } from "react-parallax";

import {
  SectionContainer,
  Container
} from "../floating-info/floating.info.styles";
import { CloseInfoBtn } from "../custom-button/custom-button.styles";
import SectionBox from "../section-box/section-box.component";

//TODO create a component to be populated on click according to section

const FloatingInfoComponent = ({ linkTo,closeClick, textInfo, image, type }) => {
 
  var tempHeaders = [], tempDesc = [], tempLinks = [];


  var researchHeaders = [
    "The Maori Division of Time",
    "Mātauranga Māori—the ūkaipō of knowledge in New Zealand.",
    "Mahi Māra: Living by Maramataka Māori in an urban setting",
    "Maramataka: The Maori Moon Calendar.",
    "Tangaroa Ara Rau: Tangaroa the Atua of Human Movement.",
    "Ancient Egyptian Calendars of Lucky and Unlucky Days."
  ];

  var researchDesc = [
    "Elsdon B. (2018)",
    "Hikuroa, D. (2017).",
    "Hoeta, A. (2020).",
    "Roberts, M., Weko, F., Clarke, L., (2006)",
    "Hanara, B., & Jackson, A. (2019).",
    "Porceddu, S., Jetsu, L., Markkanen, T., & Toivari-Viitala, J. (2008)."
  ]

  var researchLinks = [
    "http://nzetc.victoria.ac.nz/tm/scholarly/tei-BesTime-t1-body-d1-d3.html",
    "Hikuroa, D. (2017). Mātauranga Māori—the ūkaipō of knowledge in New Zealand. In Journal of the Royal Society of New Zealand (Vol. 47, Issue 1, pp. 5–10). https://doi.org/10.1080/03036758.2016.1252407",
    "https://toitangata.co.nz/2020/04/29/mahi-mara-living-by-maramataka-maori-in-an-urban-setting/",
    "http://researcharchive.lincoln.ac.nz/handle/10182/155",
    "http://www.maramatanga.ac.nz/sites/default/files/project-reports/NPM_ngaAkonga_HanaraJackson_18INT01%20%28003%29.pdf",
    "https://www.mv.helsinki.fi/home/jetsu/papers/egypt1.pdf"
  ]

  if (type === "Research") {
    tempHeaders = researchHeaders;
    tempDesc = researchDesc;
    tempLinks = researchLinks;
  } else if (type === "Contact") {
    tempHeaders = researchHeaders;
    tempDesc = researchDesc;
    tempLinks = researchLinks;
  } else if (type === "Visit") {
    tempHeaders = researchHeaders;
    tempDesc = researchDesc;
    tempLinks = researchLinks;
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
        <SectionBox handleClick = {console.log("clicked")}  header={tempHeaders[0]} description={tempDesc[0]} />
        <SectionBox handleClick = {console.log("clicked")}  header={tempHeaders[1]} description={tempDesc[1]} />
        <SectionBox handleClick = {console.log("clicked")}  header={tempHeaders[2]} description={tempDesc[2]} />
        <SectionBox handleClick = {console.log("clicked")}  header={tempHeaders[3]} description={tempDesc[3]} />
        <SectionBox handleClick = {console.log("clicked")}  header={tempHeaders[4]} description={tempDesc[4]} />
        <SectionBox handleClick = {console.log("clicked")}  header={tempHeaders[5]} description={tempDesc[5]} />
      </SectionContainer>
    </Container>
  );
};
function openInNewTab(link) {
     
    window.open(link, '_blank');
    
}


export default FloatingInfoComponent;
