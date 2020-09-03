import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import HomeInfo from "../components/home-info/home-info.component";
import CalendarComponent from "../components/calendar/calendar.component";
import WithSpinner from "../components/with-spinner/with-spinner.component";
import CustomButton from '../components/custom-button/custom-button.component';

const HomeInfoWithSpinner = WithSpinner(HomeInfo);

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date(),
      prediction: {},
      loading: true,
      hidden: true,
    };
    this.getMoonPhase = this.getMoonPhase.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setPrediction = this.setPrediction.bind(this);
    this.setHidden = this.setHidden.bind(this);
  }

  componentDidMount() {
    this.setPrediction();
    this.getMoonPhase();
    this.setState({ loading: false });
  }

  handleChange(date) {
    this.setState(
      {
        selectedDate: date,
      },
      () => {
        this.setPrediction();
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

  getMoonPhase() {
        
    let day = this.state.selectedDate.getDate();
    let month = this.state.selectedDate.getMonth();
    let year = this.state.selectedDate.setFullYear();

        let c = 0, e = 0, jd = 0, b = 0;
        
        if(month < 3) {
            year--;
            month+=12;
        }

        ++month;

        c = 365.25 * year;
        
        e = 30.6 * month;
        //jd is total days elapsed
        console.log(jd);
        jd = c + e + day - 694039.09;
        //divide by the moon cycle
        jd /= 29.5305882;
        //int(jd) -> b, take integer part of jd
        
        b = jd;
        //subtract integer part to leave fractional part of original jd
        jd -= b;
        //scale fraction from 0-8 and round
        b = Math.round(jd * 8);
        
        if(b >= 8) {
            b = 0;
        }


        switch(b){
            case 0: 
                return console.log("New Moon");
                break;
            case 1:
                return console.log("Waxing Crescent Moon");
                break;
            case 2:
                return console.log("Quater Moon");
                break;
            case 3:
                return console.log("Waxing Gibbious Moon");
            case 4:
                return console.log("Full Moon");
                break;
            case 5:
                return console.log("Waning Gibbious Moon");
                break;
            case 6:
                return console.log("Last Quater Moon");
                break;
            case 7:
                return console.log("Waning Crescent Moon");
                break;
            default:
                return console.log("Error");

        }
  }

  render() {
    const {prediction} = this.state;
    console.log(this.state.selectedDate)


    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <HomeInfoWithSpinner
          isLoading={this.state.loading}
          title={prediction.title}
          dateText={this.state.selectedDate.toTimeString()}
          genText={prediction.desc}
        />
        {this.state.hidden ?

        (
          <>
         </>
        )
          :
          (

        <CalendarComponent
          calendarType={"ISO 8601"}
          startDate={new Date()}
          value={this.state.selectedDate}
          onChange={this.handleChange}
          
          // clickDayFunction={this.setPrediction}
        />
          )
        }
        <CustomButton style={{position: 'absolute', right:'36px', }} onClick={this.setHidden}>Set Prediction Date</CustomButton>
      </Layout>
    );
  }
}
