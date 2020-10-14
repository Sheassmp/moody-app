import React, { useState } from "react";
import {
  WelcomeContainer,
  WelcomeText,
  LoadingDot,
  WelcomeButton
} from "./welcome-screen.styles";

const Welcome = () => {
  const [loading, setLoading] = useState(true);
  const [welcomeString, setWelcomeString] = useState("Welcome!");
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
            text = "Moody is designed to create an awareness of the changing moods we all undergo throughout daily life"
      break;
      case 2:
            text = "Moody does this by delving into history and utilizing certain historial beliefs pertaining to Maramataka/Lunar Calendar"
        break;
      case 3:
            text = "The Maramataka Calendars are present all throughout the pacific"
        break;
      case 4:
            text = "Welcome to Moody, just a few things before we dive in"
        break;
      default:
            text = "Welcome!"
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
      <WelcomeContainer>
        <WelcomeText>{welcomeString}</WelcomeText>
        <WelcomeButton onClick={() => handleClick()}>next</WelcomeButton>
      </WelcomeContainer>
    );
};

export default Welcome;
