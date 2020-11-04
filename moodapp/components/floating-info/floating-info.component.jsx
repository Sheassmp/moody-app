import React, { useState } from "react";
import { Parallax } from "react-parallax";
// import { useMediaQuery } from 'react-responsive'
import {
  SectionContainer,
  Container,
  Details,
  DetailsHeader,
  DetailsContainer,
  DetailsImage
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


  var researchFDescription = "When referring to the lunar calendars in history you will find hundreds of different iterations all measuring time by the phases of the moon. " 
                           + "Yet when looking at lunar calendars in relation to mood and behaviour the information is scarcer within cited research texts, but it is present as shown in recordings of Elsdon (2018) "
                           + "in 1959 in relation to Maramataka, as well as additional alternative examples, such as within ancient Egypt where a study conducted by Porceddu et al.(2008) " 
                           + "observed the relation of the ancient Egyptians and their predicted unlucky and lucky days. Maramataka in particular has gained momentum recently in regard to linking historical beliefs and " 
                           + "practices to be used in todays settings, The following above links will show certain papers I have found in relation to these points"; 
  var researchHeaders = [
    "The Maori Division of Time",
    "Mātauranga Māori—the ūkaipō of knowledge in New Zealand.",
    "Middle Assyrian Lunar Calendar and Chronology. In Living the Lunar Calendar",
    "Maramataka: The Maori Moon Calendar.",
    "Tangaroa Ara Rau: Tangaroa the Atua of Human Movement.",
    "Ancient Egyptian Calendars of Lucky and Unlucky Days.",
  ];

  var researchDesc = [
    "Elsdon B. (1959)",
    "Hikuroa, D. (2017).",
    "Bloch, Y. (2012). - earliest iterations of lunar calendars ",
    "Roberts, M., Weko, F., Clarke, L., (2006) -",
    "Hanara, B., & Jackson, A. (2019). -",
    "Porceddu, S., Jetsu, L., Markkanen, T., & Toivari-Viitala, J. (2008). -",
  ];

  var researchLinks = [
    "http://nzetc.victoria.ac.nz/tm/scholarly/tei-BesTime-t1-body-d1-d3.html",
    "https://cdn.auckland.ac.nz/assets/arts/research-centres/ppi/policy-briefings/PPI%20Briefing%20Hikuroa%202018.pdf",
    "https://toitangata.co.nz/2020/04/29/mahi-mara-living-by-maramataka-maori-in-an-urban-setting/",
    "http://researcharchive.lincoln.ac.nz/handle/10182/155",
    "http://www.maramatanga.ac.nz/sites/default/files/project-reports/NPM_ngaAkonga_HanaraJackson_18INT01%20%28003%29.pdf",
    "https://www.mv.helsinki.fi/home/jetsu/papers/egypt1.pdf",
  ];

  var contactFDescription = "The main reason for building Moody has been on not creating one true way to understand what we will feel according to the moon, but to bring the " 
                             + "understanding of the different emotions we all may feel through daily life." +
                             "Providing a way to possibly reduce stress or even provide a interesting alternative to other atrological beliefs that many utlize already within their daily lives" +
                             "Above are some services offering help to those who may need it and provide links to possible ways to aid those who also want to help."; 

  var contactHeaders = [
    "Mental Health Organisation",
    "Mental Health Organisation - Wellbeing",
    "Mental Health Organisation - Fundraising",
    "Auckland DHB Community Mental Health Services (Adult)",
    "HealthEd",
    "Ministry of health"
  ];

  var contactDesc = [
    "Donate to now to a good cause",
    "Create your own fundraiser",
    "A guide to understanding your wellbeing",
    "Contact information for adults",
    "Helplines and mental health services",
    "Resources for all ages"
  ];

  var contactLinks = [
    "https://events.mentalhealth.org.nz/donate",
    "https://events.mentalhealth.org.nz/create-your-own",
    "https://www.mentalhealth.org.nz/home/ways-to-wellbeing/",
    "https://www.healthpoint.co.nz/public/mental-health-specialty/auckland-dhb-community-mental-health-services/",
    "https://www.healthed.govt.nz/resource/helplines-and-mental-health-services",
    "https://www.health.govt.nz/your-health/services-and-support/health-care-services/mental-health-services/mental-health-services-where-get-help"
   
  ];
 
  var resourcesFDescription = "The following are different resources found within New Zealand that offer interesting incite into the workings of Maramataka." +
                                "Such as learning resources, Museums and news columns"; 

  var resourcesHeaders = [
    "Te Papa",
    "Te Papa - Maramataka Dial",
    "Te Papa - Learning Resources",
    "Learning to live by the maramataka: Whiringa-ā-nuku",
    "Museums Wellington",
    "Mental Health Organization - Workplace"
  ];

  var resourcesDesc = [
    "Visit New Zealands largest museum",
    "Download Te Papas dial",
    "Find Maramataka learning aids",
    "Column by Ayla Hoeta",
    "Different museums in relation to Maramataka",
    "Maramataka in the workplace"
  
  ];

  var resourcesLinks = [
    "https://www.tepapa.govt.nz/",
    "https://www.tepapa.govt.nz/discover-collections/read-watch-play/maori/matariki-maori-new-year/how-use-maramataka-maori-lunar",
    "https://www.tepapa.govt.nz/learn/for-educators/teaching-resources/maramataka-maori-calendar-learning-resource",
    "https://thespinoff.co.nz/author/ayla-hoeta/",
    "https://www.museumswellington.org.nz/matariki-the-maori-phases-of-the-moon/",
    "https://www.mentalhealth.org.nz/get-help/getting-through-together/workplace-wellbeing/finding-wellbeing-through-maramataka/"

  ]; 



  if (type === "Cited Research") {
    sectionHeaders = researchHeaders;
    sectionDesc = researchDesc;
    sectionLinks = researchLinks;
    fullDescription = researchFDescription;
  } else if (type === "Mental Health Aid") {
    sectionHeaders = contactHeaders;
    sectionDesc = contactDesc;
    sectionLinks = contactLinks;
    fullDescription = contactFDescription;
  } else if (type === "Available Resources") {
    sectionHeaders = resourcesHeaders;
    sectionDesc = resourcesDesc;
    sectionLinks = resourcesLinks;
    fullDescription = resourcesFDescription;
  }
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width:  768px)' })
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
      <Parallax style={{ height: `43vh` }} bgImage={image} strength={500} />
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
      <DetailsContainer>
          <DetailsHeader>{type}</DetailsHeader>
          <Details>
          {fullDescription}
          </Details>
      </DetailsContainer>
      <DetailsContainer>
          <DetailsHeader>Code to predict moon rotation</DetailsHeader>
          <DetailsImage  src = {"/images/step1.png"} />
          <DetailsImage  src = {"/images/steps2and3.png"} />
      </DetailsContainer>
    </Container>
  );
};

export default FloatingInfoComponent;
