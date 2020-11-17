
import React from "react"

import {
  SectionContainer,
  SectionDescription,
  SectionHeader,
} from "./section-box.styles"

const SectionBox = ({header, description, handleClick, style, containerClick}) => {

  return (
    <SectionContainer onClick ={containerClick} >
      <SectionHeader style={style} onClick={handleClick} >{header}</SectionHeader>
      <SectionDescription>{description}</SectionDescription>
    </SectionContainer>
  )
}

export default SectionBox;