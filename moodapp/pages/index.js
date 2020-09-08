import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import HomeInfo from "../components/home-info/home-info.component";
import CalendarComponent from "../components/calendar/calendar.component";
import WithSpinner from "../components/with-spinner/with-spinner.component";
import CustomButton from "../components/custom-button/custom-button.component";

const HomeInfoWithSpinner = WithSpinner(HomeInfo);

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date(),
      prediction: {},
      loading: true,
      hidden: true,
      moonPhase: "",
      startDate: 0.0,
      maramatakaDay: 'welcome',
    };
    this.getMoonPhase = this.getMoonPhase.bind(this);
    this.altSetPrediction = this.altSetPrediction.bind(this);
    this.setEnergy = this.setEnergy.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setPrediction = this.setPrediction.bind(this);
    this.setHidden = this.setHidden.bind(this);
  }

  componentDidMount() {
      this.getMoonPhase();
      this.setPrediction();
      this.setEnergy(this.state.startDate);
      this.setState({ loading: false });
  }

  handleChange(date) {
    this.setState(
      {
        selectedDate: date
      },
      () => {
        this.setPrediction();
        this.getMoonPhase();
      }
    );
  }

  setHidden() {
    this.setState(state => ({
      hidden: !state.hidden
    }));
  }

  setPrediction() {



    const pDay = this.state.selectedDate.getDate();
    const pYear = this.state.selectedDate.getFullYear();
    const pMonth = this.state.selectedDate.getMonth() + 1;
    var day = this.state.maramatakaDay;

    const setPrediction =
    this.props.date.year[pYear] &&
    this.props.date.year[pYear].month[pMonth] &&
    this.props.date.year[pYear].month[pMonth][pDay];
   

    this.setState({ prediction: setPrediction });
  }

  altSetPrediction(predic) {

    setTimeout(() => {
        const returnPrediction = this.props.setMoonPhases.predic;
        console.log(predic)

    },2000)


  }

  setEnergy(moonRotation) {

    var prediction = '';

    if (moonRotation > 0.00 && moonRotation < 0.056) {
        prediction = 'hoata'
    } else if (moonRotation > 0.056 && moonRotation < 0.089) {
        prediction = 'oue'
    } else if (moonRotation > 0.09 && moonRotation < 0.123) {
        prediction = 'okoro'
    } else if (moonRotation > 0.124 && moonRotation < 0.158) {
        prediction = 'tamateadayone'
    } else if (moonRotation > 0.158 && moonRotation < 0.192) {
        prediction = 'tamateadaytwo'
    } else if (moonRotation > 0.192 && moonRotation < 0.225) {
        prediction = 'tamateadaythree'
    } else if (moonRotation > 0.225 && moonRotation < 0.259) {
        prediction = 'tamateadayfour'
    } else if (moonRotation > 0.259 && moonRotation < 0.293) {
        prediction = 'huna'
    } else if (moonRotation > 0.293 && moonRotation < 0.327) {
        prediction = 'ari'
    } else if (moonRotation > 0.327 && moonRotation < 0.360) {
        prediction = 'maurea'
    } else if (moonRotation > 0.36 && moonRotation < 0.395) {
        prediction = 'mawharu'
    } else if (moonRotation > 0.395 && moonRotation < 0.430) {
        prediction = 'atua'
    } else if (moonRotation > 0.430 && moonRotation < 0.464) {
        prediction = 'ohua'
    } else if (moonRotation > 0.464 && moonRotation < 0.484) {
        prediction = 'oturu'
    } else if (moonRotation > 0.484 && moonRotation < 0.547) {
        prediction = 'rakaunui'
    } else if (moonRotation > 0.547 && moonRotation < 0.580) {
        prediction = 'rakaumatohi'
    } else if (moonRotation > 0.580 && moonRotation < 0.615) {
        prediction = 'takirau'
    } else if (moonRotation > 0.615 && moonRotation < 0.648) {
        prediction = 'oike'
    } else if (moonRotation > 0.648 && moonRotation < 0.684) {
        prediction = 'korekoreone'
    } else if (moonRotation > 0.684 && moonRotation < 0.717) {
        prediction = 'korekoretwo'
    } else if (moonRotation > 0.717 && moonRotation < 0.750) {
        prediction = 'korekorethree'
    } else if (moonRotation > 0.750 && moonRotation < 0.782) {
        prediction = 'tangaroaamua'
    } else if (moonRotation > 0.782 && moonRotation < 0.818) {
        prediction = 'tangaroaaroto'
    } else if (moonRotation > 0.818 && moonRotation < 0.850) {
        prediction = 'tanagaroaakiokio'
    } else if (moonRotation > 0.850 && moonRotation < 0.885) {
        prediction = 'otane'
    } else if (moonRotation > 0.885 && moonRotation < 0.920) {
        prediction = 'oranganui'
    } else if (moonRotation > 0.920 && moonRotation < 0.934) {
        prediction = 'omutuwhenua'
    } else {
        if (moonRotation > 0.934 && moonRotation < 0.97) {
        prediction = 'whiro'
      } else {
        if (moonRotation > 0.97 && moonRotation < 0.999) {
            prediction = 'tirea'
        } else {
            prediction = 'error'
        }
      }
    }

    return this.setState(
        {
            maramatakaDay: prediction
        },
        () => {
          this.altSetPrediction(this.state.maramatakaDay)
        }
      );

  }

  getMoonPhase() {
    const date = this.state.selectedDate;

    var moon = "";
    var tempStart;
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    let c = 0,
      e = 0,
      jd = 0,
      b = 0;

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
    //int(jd) -> b, take integer part of jd
    var leng = jd.toString();
    b = parseInt(leng);

    //subtract integer part to leave fractional part of original jd
    jd -= b;

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
            startDate: tempStart
          },
          () => {
            this.setEnergy(this.state.startDate);
            console.log(this.state.moonPhase, this.state.startDate);
          }
        );
        break;
      case 1:
        moon = "Waxing Crescent Moon";
        return this.setState(
          {
            moonPhase: moon,
            startDate: tempStart
          },
          () => {
            this.setEnergy(this.state.startDate);
            console.log(this.state.moonPhase, this.state.startDate);
          }
        );
        break;
      case 2:
        moon = "Quater Moon";
        return this.setState(
          {
            moonPhase: moon,
            startDate: tempStart
          },
          () => {
            this.setEnergy(this.state.startDate);
            console.log(this.state.moonPhase, this.state.startDate);
          }
        );
        break;
      case 3:
        moon = "Waxing Gibbious Moon";
        return this.setState(
          {
            moonPhase: moon,
            startDate: tempStart
          },
          () => {
            this.setEnergy(this.state.startDate);
            console.log(this.state.moonPhase, this.state.startDate);
          }
        );
      case 4:
        moon = "Full Moon";
        return this.setState(
          {
            moonPhase: moon,
            startDate: tempStart
          },
          () => {
            this.setEnergy(this.state.startDate);
            console.log(this.state.moonPhase, this.state.startDate);
          }
        );
        break;
      case 5:
        moon = "Waning Gibbiuos Moon";
        return this.setState(
          {
            moonPhase: moon,
            startDate: tempStart
          },
          () => {
            this.setEnergy(this.state.startDate);
            console.log(this.state.moonPhase, this.state.startDate);
          }
        );
        break;
      case 6:
        moon = "Last Quater Moon";
        return this.setState(
          {
            moonPhase: moon,
            startDate: tempStart
          },
          () => {
            this.setEnergy(this.state.startDate);
            console.log(this.state.moonPhase, this.state.startDate);
          }
        );
        break;
      case 7:
        moon = "Waning Crescent Moon";
        return this.setState(
          {
            moonPhase: moon,
            startDate: tempStart
          },
          () => {
            this.setEnergy(this.state.startDate);
            console.log(this.state.moonPhase, this.state.startDate);
          }
        );
        break;
      default:
        return console.log("Error");
    }
  }

  render() {
    const { prediction } = this.state;
    const {loading} = this.state;
    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
       
        
        <HomeInfoWithSpinner
        isLoading={this.state.loading}
        title={prediction.title}
        dateText={this.state.selectedDate.toDateString()}
        genText={prediction.desc}
        />
   
        {this.state.hidden ? (
          <></>
        ) : (
          <CalendarComponent
            calendarType={"ISO 8601"}
            startDate={new Date()}
            value={this.state.selectedDate}
            onChange={this.handleChange}

          />
        )}
        <CustomButton
          style={{ position: "absolute", right: "36px" }}
          onClick={this.setHidden}
        >
          Set Prediction Date
        </CustomButton>
      </Layout>
    );
  }
}
