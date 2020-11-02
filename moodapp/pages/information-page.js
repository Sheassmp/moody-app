import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";
import {InfoContainer, InfoWrapper} from '../components/information-page-info/information-page-info.styles';

export default class InformationPage extends React.Component {
  constructor(){
    super();
    this.AlertInfo = this.AlertInfo.bind(this);
  }


  AlertInfo() {
    alert("Sorry for the inconvience! this info will be included in future builds")
  }

  render() {

    return (
      
    <Layout home={false}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}></section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      >


      </section>
        <InfoContainer>
          {/* <InfoButton onClick={this.AlertInfo}>Research</InfoButton>
          <InfoButton onClick={this.AlertInfo}>Contact</InfoButton>
          <InfoButton onClick={this.AlertInfo}>Visit</InfoButton> */}
        </InfoContainer>
    </Layout>
    );
  }
}

