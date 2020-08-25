import React,{ Component } from "react";
import utilStyles from '../../styles/utils.module.css';
import styles from '../../components/layout/layout.module.css';
import {HomeInfoContainer} from './home-info.styles';
import TextBox from '../../components/text-box/text-box.component';


//animate string by char
class SplitText extends Component {
    render() {
      return (
        <span aria-label={this.props.copy} role={this.props.role}>
          {this.props.copy.split("").map(function (char, index) {
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
 
const HomeInfo = ({genText, dateText, title}) => (
  <HomeInfoContainer>

    <h1 className={utilStyles.headerText}>
      <SplitText copy={title} role="heading"></SplitText>
    </h1>
    <img
      src="/images/star-mobile.jpg"
      className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
      alt={"Moon"}
    />
    <TextBox
      GeneratedText = {genText}
      dateText={dateText}
    />
    
  </HomeInfoContainer>
);

export default HomeInfo;