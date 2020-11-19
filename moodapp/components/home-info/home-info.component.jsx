import React, { Component, useEffect, useState } from "react";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../components/layout/layout.module.css";
import { HomeInfoContainer, PhotoText, MoonImg, HeaderText } from "./home-info.styles";
import TextBox from "../../components/text-box/text-box.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { Route, Switch } from "react-router-dom";

const HomeInfoContainerWithSpinner = WithSpinner(HomeInfoContainer);

//animate string by char
class SplitText extends Component {
  render() {
    return (
      <span aria-label={this.props.copy} role={this.props.role}>
        {this.props.copy.split("").map(function(char, index) {
          let style = { animationDelay: 0.5 + index / 10 + "s" };
          return (
            <span aria-hidden="true" key={index} style={style}>
              {char}
            </span>
          );
        })}
      </span>
    );
  }
}

const useError = initialState => {
  const [isErrored, setIsErrored] = React.useState(initialState);

  // put [setIsToggled] into the useCallback's dependencies array
  // this value never changes so the callback is not going to be ever re-created
  const setError = React.useCallback(() => setIsErrored(state => !state), [
    setIsErrored
  ]);

  return [isErrored, setError];
};



const HomeInfo = ({ genText, dateText, title, moonPhaseText, maramatakaDayText }) => {
  const [randomMoon, setRandomMoon] = useState(0);
  const [photoCred, setPhotoCred] = useState(0);
  const [loading, setLoading] = useState(true);


  
  useEffect(() => {
      fetch(
          `https://api.unsplash.com/photos/random?query=galaxy_universe&orientation=squarish&client_id=A2G26RoYfSzkG7_-bRpcznTGCa3Q60b5-37N3YmWZC8`
          )
          .then(response => response.json())
          .then(result => {
              setRandomMoon(result.urls.raw);
              setPhotoCred(result.user);
            }).finally(
                () => {
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000)
                }
                )
                .catch(error => {
                    console.log("Error:", error);
                })
            }, []);
            
            

  return (
     
     <HomeInfoContainerWithSpinner isLoading={loading} >
     <h1  className={utilStyles.headerText}>
        <SplitText className={utilStyles.headerLetters}  copy={title} role="heading"></SplitText>
      </h1>
      <MoonImg
        src={randomMoon}    
     
        alt={"Moon"}
        />
        <PhotoText>
        Photo by{" "}
        <a
          href={
              "https://unsplash.com/@" +
              photoCred.username +
              "?utm_source=moody&utm_medium=referral"
            }
        >
          {photoCred.name}
        </a>{" "}
        on{" "}
        <a href={"https://unsplash.com/?utm_source=moody&utm_medium=referral"}>
          Unsplash
        </a>
      </PhotoText>
      <TextBox GeneratedText={genText} dateText={dateText} moonPhaseText={moonPhaseText} maramatakaDayText={maramatakaDayText} />
      </HomeInfoContainerWithSpinner>
      
      );
};

export default HomeInfo;
