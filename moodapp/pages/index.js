import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import { BrowserRouter } from "react-router-dom";
import HomeInfo from "../components/home-info/home-info.component";
import CalendarComponent from "../components/calendar/calendar.component";
import WithSpinner from "../components/with-spinner/with-spinner.component";
import {
  CalendarButton,
  CloseBtn,
  InfoBtn,
} from "../components/custom-button/custom-button.styles";
import Welcome from "../components/welcome-screen/welcome-screen.component";
import InformationPageInfo from "../components/information-page-info/information-page-info.component";

const LayoutWithSpinner = WithSpinner(Layout);

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date(),
      loading: true,
      hidden: true,
      moonPhase: "",
      startDate: 0.0,
      maramatakaDay: "0",
      prediction: {
        title: "Welcome!",
        desc: "Whats your mood today?",
      },
      showInfo: false,
    };

    this.setHidden = this.setHidden.bind(this);
    this.getMoonPhase = this.getMoonPhase.bind(this);
    this.setEnergy = this.setEnergy.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.SetPrediction = this.SetPrediction.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }

  componentDidMount() {
    this.getMoonPhase();
  }

  setHidden() {
    this.setState((state) => ({
      hidden: !state.hidden,
    }));
  }

  handleChange(date) {
    console.log(date);
    this.setState(
      {
        selectedDate: date,
      },
      () => {
        this.getMoonPhase();
      }
    );
  }

  showInfo() {
    this.setState((state) => ({
      showInfo: !state.showInfo,
    }));
  }

  //Step 1. Get the current moon phase according to time
  getMoonPhase() {
    const date = this.state.selectedDate;

    var moon = "";
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var yearsLapsed = 0,
      monthsLapsed = 0,
      daysLapsed = 0,
      b = 0,
      tempStart;

    if (month < 3) {
      year--;
      month += 12;
    }

    ++month;
    yearsLapsed = 365.25 * year;
    monthsLapsed = 30.6 * month;
    //daysLapsed is total days elapsed
    daysLapsed = yearsLapsed + monthsLapsed + day - 694039.09;
    //divide by the moon cycle
    daysLapsed /= 29.5305882;
    //int(daysLapsed) -> b, take fraction part of daysLapsed
    //to leave b as the remaining int
    var leng = daysLapsed.toString();
    b = parseInt(leng);
    //subtract b from daysLapsed to leave fraction
    daysLapsed -= b;
    //assign fraction to tempStart for later use
    tempStart = daysLapsed;
    //scale fraction from 0-8 and round
    b = Math.round(daysLapsed * 8);
    if (b >= 8) {
      b = 0;
    }

    //switch case to set moonphase
    switch (b) {
      case 0:
        moon = "New Moon";
        return this.setState(
          {
            moonPhase: moon,
            startDate: tempStart,
          },
          () => {
            this.setEnergy(this.state.startDate);
          }
        );
        break;

      case 1:
        moon = "Waxing Crescent Moon";
        return this.setState(
          {
            moonPhase: moon,
            startDate: tempStart,
          },
          () => {
            this.setEnergy(this.state.startDate);
          }
        );

        break;

      case 2:
        moon = "Quarter Moon";
        return this.setState(
          {
            moonPhase: moon,
            startDate: tempStart,
          },
          () => {
            this.setEnergy(this.state.startDate);
          }
        );
        break;
      case 3:
        moon = "Waxing Gibbious Moon";
        return this.setState(
          {
            moonPhase: moon,
            startDate: tempStart,
          },
          () => {
            this.setEnergy(this.state.startDate);
          }
        );
      case 4:
        moon = "Full Moon";
        return this.setState(
          {
            moonPhase: moon,
            startDate: tempStart,
          },
          () => {
            this.setEnergy(this.state.startDate);
          }
        );
        break;
      case 5:
        moon = "Waning Gibbiuos Moon";
        return this.setState(
          {
            moonPhase: moon,
            startDate: tempStart,
          },
          () => {
            this.setEnergy(this.state.startDate);
          }
        );
        break;
      case 6:
        moon = "Last Quarter Moon";
        return this.setState(
          {
            moonPhase: moon,
            startDate: tempStart,
          },
          () => {
            this.setEnergy(this.state.startDate);
          }
        );
        break;
      case 7:
        moon = "Waning Crescent Moon";
        return this.setState(
          {
            moonPhase: moon,
            startDate: tempStart,
          },
          () => {
            this.setEnergy(this.state.startDate);
          }
        );
        break;
      default:
        return console.log("Error");
    }
  }

  //Step 2. get the prediction according to fraction generated from getMoonPhase();
  setEnergy(moonRotationFraction) {
    var prediction = "";

    if (moonRotationFraction > 0.0 && moonRotationFraction < 0.056) {
      prediction = "3";
    } else if (moonRotationFraction > 0.056 && moonRotationFraction < 0.089) {
      prediction = "4";
    } else if (moonRotationFraction > 0.09 && moonRotationFraction < 0.123) {
      prediction = "5";
    } else if (moonRotationFraction > 0.124 && moonRotationFraction < 0.158) {
      prediction = "6";
    } else if (moonRotationFraction > 0.158 && moonRotationFraction < 0.192) {
      prediction = "7";
    } else if (moonRotationFraction > 0.192 && moonRotationFraction < 0.225) {
      prediction = "8";
    } else if (moonRotationFraction > 0.225 && moonRotationFraction < 0.259) {
      prediction = "9";
    } else if (moonRotationFraction > 0.259 && moonRotationFraction < 0.293) {
      prediction = "10";
    } else if (moonRotationFraction > 0.293 && moonRotationFraction < 0.327) {
      prediction = "11";
    } else if (moonRotationFraction > 0.327 && moonRotationFraction < 0.36) {
      prediction = "12";
    } else if (moonRotationFraction > 0.36 && moonRotationFraction < 0.395) {
      prediction = "13";
    } else if (moonRotationFraction > 0.395 && moonRotationFraction < 0.43) {
      prediction = "14";
    } else if (moonRotationFraction > 0.43 && moonRotationFraction < 0.464) {
      prediction = "15";
    } else if (moonRotationFraction > 0.464 && moonRotationFraction < 0.484) {
      prediction = "16";
    } else if (moonRotationFraction > 0.484 && moonRotationFraction < 0.547) {
      prediction = "17";
    } else if (moonRotationFraction > 0.547 && moonRotationFraction < 0.58) {
      prediction = "18";
    } else if (moonRotationFraction > 0.58 && moonRotationFraction < 0.615) {
      prediction = "19";
    } else if (moonRotationFraction > 0.615 && moonRotationFraction < 0.648) {
      prediction = "20";
    } else if (moonRotationFraction > 0.648 && moonRotationFraction < 0.684) {
      prediction = "21";
    } else if (moonRotationFraction > 0.684 && moonRotationFraction < 0.717) {
      prediction = "22";
    } else if (moonRotationFraction > 0.717 && moonRotationFraction < 0.75) {
      prediction = "23";
    } else if (moonRotationFraction > 0.75 && moonRotationFraction < 0.782) {
      prediction = "24";
    } else if (moonRotationFraction > 0.782 && moonRotationFraction < 0.818) {
      prediction = "25";
    } else if (moonRotationFraction > 0.818 && moonRotationFraction < 0.85) {
      prediction = "26";
    } else if (moonRotationFraction > 0.85 && moonRotationFraction < 0.885) {
      prediction = "27";
    } else if (moonRotationFraction > 0.885 && moonRotationFraction < 0.92) {
      prediction = "28";
    } else if (moonRotationFraction > 0.92 && moonRotationFraction < 0.923) {
      prediction = "29";
    } else if (moonRotationFraction > 0.923 && moonRotationFraction < 0.954) {
      prediction = "30";
    } else if (moonRotationFraction > 0.954 && moonRotationFraction < 0.97) {
      prediction = "1";
    } else if (moonRotationFraction > 0.97 && moonRotationFraction < 0.999) {
      prediction = "2";
    } else {
      prediction = "error";
    }

    return this.setState({ maramatakaDay: prediction }, () => {
      this.SetPrediction();
    });
  }

  //Step 3. set the prediction from APIs
  SetPrediction() {
    const day = this.state.maramatakaDay;
    const setPrediction = this.props.setMoonPhases[day];
    this.setState({ prediction: setPrediction }, () => {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 2000);
    });
  }

  render() {
    const { prediction } = this.state;
    const { loading } = this.state;
    const { showInfo } = this.state;

    return (
      <BrowserRouter>
        <Welcome />
        {showInfo ? (
          <InformationPageInfo returnClick={() => this.showInfo(false)} />
        ) : null}
        <LayoutWithSpinner isLoading={loading} home>
          <Head>
            <title>{siteTitle}</title>
          </Head>

          <>
            <HomeInfo
              title={prediction === undefined ? "Welcome!" : prediction.title}
              dateText={this.state.selectedDate.toDateString()}
              genText={
                prediction === undefined
                  ? "Whats your mood today?"
                  : prediction.desc
              }
              moonPhaseText={this.state.moonPhase}
              maramatakaDayText={
                prediction === undefined ? "" : prediction.title
              }
            />
          </>

          {this.state.hidden ? (
            <>
              <InfoBtn onClick={this.showInfo} />
              <CalendarButton
                onClick={this.setHidden}
                fill="white"
                id="my-icon"
                viewBox="0 0 75 75"
                focusable="false"
              >
                <circle
                  cx="37.25"
                  cy="37.25"
                  r="20"
                  fillOpacity="0"
                  className="circle"
                  strokeWidth="5px"
                />
                <polyline
                  className="checkmark"
                  points="11.09 18.5325 15.51125 22.95 25.17125 13.29"
                  transform="translate(20, 20)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4px"
                  stroke="#21b587"
                  fillOpacity="0"
                />
                <path
                  focusable="false"
                  transform="translate(25.5, 25)"
                  d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"
                />
              </CalendarButton>
            </>
          ) : (
            <>
              <CloseBtn
                onClick={this.setHidden}
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
              </CloseBtn>
              <CalendarComponent
                calendarType={"ISO 8601"}
                startDate={new Date()}
                value={this.state.selectedDate}
                onChange={this.handleChange}
              />
            </>
          )}
        </LayoutWithSpinner>
      </BrowserRouter>
    );
  }
}
