import React from "react";

import { Container, BlockText } from "../floating-info/floating.info.styles";

const FloatingInfoComponent = ({text}) => (
  <Container>
        <BlockText>
            {text}
        </BlockText>
  </Container>
);

export default FloatingInfoComponent;
