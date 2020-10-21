import React,{useState} from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import { BrowserRouter } from "react-router-dom";
import HomeInfo from "../components/home-info/home-info.component";
import CalendarComponent from "../components/calendar/calendar.component";
import WithSpinner from "../components/with-spinner/with-spinner.component";
import {CalendarButton} from '../components/custom-button/custom-button.styles';
import Welcome from '../components/welcome-screen/welcome-screen.component';
import InformationPageInfo from '../components/information-page-info/information-page-info.component';

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
        desc: "Whats your mood today?"
      },
      showInfo: false,

    };

    this.getMoonPhase = this.getMoonPhase.bind(this);
    this.setEnergy = this.setEnergy.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.SetPrediction = this.SetPrediction.bind(this);
    this.setHidden = this.setHidden.bind(this);

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
    this.setState(
      {
        selectedDate: date,
      },
      () => {
        this.getMoonPhase();
      }
    );
  }
  //Step 1. Get the current moon phase according to time
  getMoonPhase() {
    
    const date = this.state.selectedDate;
    
    var moon = "";
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var c = 0,e = 0, jd = 0, b = 0, tempStart;

    if (month < 3) {
      year--;
      month += 12;
    }

    ++month;
    c = 365.25 * year;
    e = 30.6 * month;
    //jd is total days elapsed
    jd = c + e + day - 694039.09;
    //divide by the moon cycle
    jd /= 29.5305882;
    //int(jd) -> b, take fraction part of jd 
    //to leave b as the remaining int
    var leng = jd.toString();
    b = parseInt(leng);
    //subtract b from jd to leave fraction
    jd -= b;
    //assign fraction to tempStart for later use
    tempStart = jd;
    //scale fraction from 0-8 and round
    b = Math.round(jd * 8);
    if (b >= 8) {
      b = 0;
    }

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
        moon = "Quater Moon";
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
        moon = "Last Quater Moon";
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
  setEnergy(moonRotation) {
    var prediction = "";

    if (moonRotation > 0.0 && moonRotation < 0.056) {
      prediction = "3";
    } else if (moonRotation > 0.056 && moonRotation < 0.089) {
      prediction = "4";
    } else if (moonRotation > 0.09 && moonRotation < 0.123) {
      prediction = "5";
    } else if (moonRotation > 0.124 && moonRotation < 0.158) {
      prediction = "6";
    } else if (moonRotation > 0.158 && moonRotation < 0.192) {
      prediction = "7";
    } else if (moonRotation > 0.192 && moonRotation < 0.225) {
      prediction = "8";
    } else if (moonRotation > 0.225 && moonRotation < 0.259) {
      prediction = "9";
    } else if (moonRotation > 0.259 && moonRotation < 0.293) {
      prediction = "10";
    } else if (moonRotation > 0.293 && moonRotation < 0.327) {
      prediction = "11";
    } else if (moonRotation > 0.327 && moonRotation < 0.36) {
      prediction = "12";
    } else if (moonRotation > 0.36 && moonRotation < 0.395) {
      prediction = "13";
    } else if (moonRotation > 0.395 && moonRotation < 0.43) {
      prediction = "14";
    } else if (moonRotation > 0.43 && moonRotation < 0.464) {
      prediction = "15";
    } else if (moonRotation > 0.464 && moonRotation < 0.484) {
      prediction = "16";
    } else if (moonRotation > 0.484 && moonRotation < 0.547) {
      prediction = "17";
    } else if (moonRotation > 0.547 && moonRotation < 0.58) {
      prediction = "18";
    } else if (moonRotation > 0.58 && moonRotation < 0.615) {
      prediction = "19";
    } else if (moonRotation > 0.615 && moonRotation < 0.648) {
      prediction = "20";
    } else if (moonRotation > 0.648 && moonRotation < 0.684) {
      prediction = "21";
    } else if (moonRotation > 0.684 && moonRotation < 0.717) {
      prediction = "22"
    } else if (moonRotation > 0.717 && moonRotation < 0.75) {
      prediction = "23";
    } else if (moonRotation > 0.75 && moonRotation < 0.782) {
      prediction = "24";
    } else if (moonRotation > 0.782 && moonRotation < 0.818) {
      prediction = "25";
    } else if (moonRotation > 0.818 && moonRotation < 0.85) {
      prediction = "26";
    } else if (moonRotation > 0.85 && moonRotation < 0.885) {
      prediction = "27";
    } else if (moonRotation > 0.885 && moonRotation < 0.92) {
      prediction = "28";
    } else if (moonRotation > 0.92 && moonRotation < 0.934) {
      prediction = "29";
    } else if (moonRotation > 0.934 && moonRotation < 0.97) {
      prediction = "1";
    } else if (moonRotation > 0.97 && moonRotation < 0.999) {
      prediction = "2";
    } else {
      prediction = "error";
    }

    return this.setState({maramatakaDay: prediction},
      () => {
        this.SetPrediction();
      }
    );
  }

  //Step 3. set the prediction from APIs
  SetPrediction() {
    const day = this.state.maramatakaDay;
    const setPrediction = this.props.setMoonPhases[day];
    this.setState({prediction: setPrediction},
      () => {
        setTimeout(() => {
          this.setState({loading: false});
        }, 2000)
      });
  }

 


  render() {

    const { prediction } = this.state;
    const { loading } = this.state;
    const {showInfo} = this.state;

    return (

        <BrowserRouter>
        <Welcome/>
            <LayoutWithSpinner isLoading={loading} home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {
                showInfo ? 

                <InformationPageInfo />
            
                :
                
                <HomeInfo
                title={prediction === undefined ? "Welcome!" : prediction.title}
                dateText={this.state.selectedDate.toDateString()}
                genText={prediction === undefined ? "Whats your mood today?" : prediction.desc}
                moonPhaseText={this.state.moonPhase}
                maramatakaDayText={prediction === undefined ? "" : prediction.title}
                />
            }
            {this.state.hidden ? (
                <>
                </>
                ) : (
                    <CalendarComponent
                    calendarType={"ISO 8601"}
                    startDate={new Date()}
                    value={this.state.selectedDate}
                    onChange={this.handleChange}
                    />
                    )}
            <CalendarButton onClick={this.setHidden} fill="white" id="my-icon" viewBox="0 0 75 75" focusable="false" >
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
                    points= "11.09 18.5325 15.51125 22.95 25.17125 13.29"  
                    transform="translate(20, 20)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4px"
                    stroke= "#21b587"  
                    fillOpacity="0"              
                    />
                <path
                    focusable="false"
                    transform="translate(25.5, 25)"
                    d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"
                    />
                
            </CalendarButton>
            }
            </LayoutWithSpinner>
      </BrowserRouter>
    );
  }
}
