import React from "react";

import { Container, BlockText, Image, TextContainer } from "../floating-info/floating.info.styles";
import {CloseBtn} from '../custom-button/custom-button.styles';

const FloatingInfoComponent = ({ closeClick,textInfo, image}) => (
  <Container>
        <CloseBtn onClick={closeClick} />
        <Image src={image} />
        <TextContainer>
            <BlockText>
            {textInfo}
            </BlockText>
        </TextContainer>
  </Container>
);

export default FloatingInfoComponent;
