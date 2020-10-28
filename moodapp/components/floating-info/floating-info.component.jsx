import React from "react";

import { SectionContainer,Container, BlockText, Image, TextContainer } from "../floating-info/floating.info.styles";
import {CloseBtn} from '../custom-button/custom-button.styles';
import SectionBox from '../section-box/section-box.component';

const FloatingInfoComponent = ({ closeClick,textInfo, image}) => (
  <Container>
        <CloseBtn onClick={closeClick} />
        <Image src={image} />
        <SectionContainer>
            <SectionBox/>
            <SectionBox/>
            <SectionBox/>
            <SectionBox/>
            <SectionBox/>
            <SectionBox/>
        </SectionContainer>
  </Container>
);

export default FloatingInfoComponent;
