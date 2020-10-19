import React, { useState } from "react";
import {
  WelcomeContainer,
  WelcomeText,
  LoadingDot,
  WelcomeButton,
  SkipButton
} from "./welcome-screen.styles";

const Welcome = () => {
  const [loading, setLoading] = useState(true);
  const [welcomeString, setWelcomeString] = useState("Welcome!");
  var [welcomeClass, setWelcomeClass] = useState(false);
  var [count, setCount] = useState(0);

  setTimeout(() => {
    setLoading(false);
}, 3000);




function handleClick() {
    var text = "";
    setCount(++count);

    switch (count) {
      case 0:
            text = "Welcome to Moody, just a few things before we dive in"
        break;
      case 1:
            text = "Moody was designed to create an awareness of the changing moods we all undergo throughout daily life"
      break;
      case 2:
            text = "Moody does this by delving into history and utilizing certain historial beliefs pertaining to Maramataka/Lunar Calendar"
        break;
      case 3:
            text = "Primarily Maramataka was used for aiding in food gathering schedules depending on different phases on the moon & location... "
        break;
      case 4:
            text = "But it has been known to account also for mood and personal wellbeing..."
        break;    
      case 5:
            text = "Maramataka does this by associating the rotation of the moon in accordance with the lunar month.."
        break;
      case 6: 
            text = "Each day in the lunar month representing a day within the maramataka/lunar Calendar.."
        break;
      case 7:
            text = "Varying calendars have been recorded throughout history by different pacific peoples for generations..";
        break;
      case 8:
            text = "For the purposes of moodys calendar, the days were sourced from the research sourced from Roberts et al. (2016). Maramataka: The Maori Moon Calendar."
        break;
        case 9: 
            text = "Sourcing information primarily from Elsdon, B. The Maori Division of time, For more information please refer to our research collection page"
            break;
        case 10: 
            setWelcomeClass(true);
            break;
      default:
            text= "please refresh your page"
        break;
    }

    setWelcomeString(text);
  }

  if (loading)
    return (
      <WelcomeContainer>
       <WelcomeText style = {{fontSize:"inherit"}}>Welcome to Moody! please wait a moment while we load the app</WelcomeText> 
        <LoadingDot>.</LoadingDot>
      </WelcomeContainer>
    );
  else
    return (
      <WelcomeContainer id={"welcome"} className={welcomeClass ? "closeMe" : ""} >
        <WelcomeText>{welcomeString}</WelcomeText>
        <WelcomeButton onClick={() => handleClick()}>next</WelcomeButton>
        <SkipButton/>
      </WelcomeContainer>
    );
};

export default Welcome;
