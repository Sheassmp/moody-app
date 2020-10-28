import React, { useState } from "react";
import {
  WelcomeContainer,
  WelcomeText,
  LoadingDot,
  WelcomeButton,
  SkipButton,
} from "./welcome-screen.styles";
import {SkipBtn} from '../custom-button/custom-button.styles';


const Welcome = () => {
  const [loading, setLoading] = useState(true);
  const [welcomeString, setWelcomeString] = useState(
    "Welcome to Moody, just a few things before we dive in. Moody was designed to create an awareness of mental health and the changing moods we all undergo throughout daily life.."
  );
  var [welcomeClass, setWelcomeClass] = useState(false);
  var [count, setCount] = useState(0);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  function handleClick() {
    var text = "";
    setCount(++count);

    switch (count) {
      case 1:
        text =
          "Moody does this by delving into certain beliefs related to the Maramataka/Lunar Calendar." +
          " Primarily Maramataka was used for aiding in food gathering schedules depending on different phases on the moon, people & location..";
        break;
      case 2:
        text =
          "But it has been known to account also for mood and personal wellbeing(tinana). Each individual day in the lunar month representing a day within maramataka calendar relating to possible energys & moods." +
          " Varying calendars are present throughout history by different pacific peoples. Offering an interesting alternatives to other astrological calendars..";
        break;
      case 3:
        text =
          "For the purposes of Moody due to the number of calendars, the most documented were used as a point of reference." +
          " Using the exact rotation of the moon according to your local time so to accomodate to wherever you are. For more information and other maramataka calendars please refer to our research collection page..."; // link to research page
        break;
      case 4:
        setWelcomeClass(true);
        break;
      default:
        text = "please refresh your page";
        break;
    }

    setWelcomeString(text);
  }

  if (loading)
    return (
      <WelcomeContainer>
        <WelcomeText style={{ fontSize: "inherit" }}>
          Welcome to Moody! please wait a moment while we load the app
        </WelcomeText>
        <LoadingDot>.</LoadingDot>
      </WelcomeContainer>
    );
  else
    return (
      <WelcomeContainer
        id={"welcome"}
        className={welcomeClass ? "closeMe" : ""}
      >
        <WelcomeText>{welcomeString}</WelcomeText>
        <WelcomeButton onClick={() => handleClick()}>next</WelcomeButton>
        <SkipBtn
               onClick={setWelcomeClass}
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
              </SkipBtn>
      </WelcomeContainer>
    );
};

export default Welcome;
