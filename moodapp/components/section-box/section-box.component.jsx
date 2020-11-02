
import React from "react"

import {
  SectionContainer,
  SectionDescription,
  SectionHeader,
} from "./section-box.styles"

const SectionBox = ({header, description, handleClick, style}) => {

  return (
    <SectionContainer>
      <SectionHeader style={style} onClick={handleClick} >{header}</SectionHeader>
      <SectionDescription>{description}</SectionDescription>
    </SectionContainer>
  )
}

export default SectionBox;