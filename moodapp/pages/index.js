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

    this.handleChange = this.handleChange.bind(this);
    this.setPrediction = this.setPrediction.bind(this);
    this.setHidden = this.setHidden.bind(this);
  }

  componentDidMount() {
    this.setPrediction();
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

  render() {
    const {prediction} = this.state;

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
