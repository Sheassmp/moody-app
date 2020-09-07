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
    };
    this.getMoonPhase = this.getMoonPhase.bind(this);
    this.setEnergy = this.setEnergy.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setPrediction = this.setPrediction.bind(this);
    this.setHidden = this.setHidden.bind(this);
  }

  componentDidMount() {
    this.setPrediction();
    this.getMoonPhase();
    this.setEnergy(this.state.startDate);
    this.setState({ loading: false });
  }

  handleChange(date) {
    this.setState(
      {
        selectedDate: date,
      },
      () => {
        this.setPrediction();
        this.getMoonPhase();
      
      }
    );
  }

  setHidden() {
    this.setState((state) => ({
      hidden: !state.hidden,
    }));
  }

  setPrediction() {
    const pDay = this.state.selectedDate.getDate();
    const pYear = this.state.selectedDate.getFullYear();
    const pMonth = this.state.selectedDate.getMonth() + 1;

    const setPrediction =
      this.props.date.year[pYear] &&
      this.props.date.year[pYear].month[pMonth] &&
      this.props.date.year[pYear].month[pMonth][pDay];

    this.setState({ prediction: setPrediction });
  }

  setEnergy(moonRotation) {

    if(moonRotation > 0.936) {
      console.log(moonRotation);
    }
    switch (moonRotation) {
      case (moonRotation > 0.936 ):
        console.log("whiro");
        break;

      default: 
        return console.log("found none");
    }
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
            startDate: tempStart,
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
            startDate: tempStart,
          },
          () => {
            console.log(this.state.moonPhase, this.state.startDate);
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
            console.log(this.state.moonPhase, this.state.startDate);
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
            console.log(this.state.moonPhase, this.state.startDate);
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
            console.log(this.state.moonPhase, this.state.startDate);
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
            
            console.log(this.state.moonPhase, this.state.startDate);
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
            console.log(this.state.moonPhase, this.state.startDate);
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

            // clickDayFunction={this.setPrediction}
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
