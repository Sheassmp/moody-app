import React from 'react';
import {InfoContainer, InfoButton} from './information-page-info.styles';

const InformationPageInfo = ({researchClick, contactClick, visitClick}) => (
 <InfoContainer>
     <InfoButton >Research</InfoButton>
     <InfoButton  >Contact</InfoButton>
     <InfoButton  >Visit</InfoButton>
 </InfoContainer>
);

export default InformationPageInfo;