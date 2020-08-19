import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import { Component } from "react";
import NavBar from '../navigation/navbar/navbar.component';

const name = "Moody";

export const siteTitle = "Moody";

//animate string by char
class SplitText extends Component {
  render(){
    return (
      <span aria-label={this.props.copy} role= {this.props.role}>
        {this.props.copy.split("").map(function(char, index) {
          let style = {"animationDelay": (0.5 + index / 10) + "s"}
          return <span
                  aria-hidden="true"
                  key={index}
                  style={style}>
                  {char}
                  </span>
        })}
      </span>
    )
  }
}

function Layout({ children, home }) {
  return (
    <>
    <NavBar/>
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Mood"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle}/>
        <meta name="twitter:card" content="cummary_large_image" /> 
      </Head>

      <header className={styles.header}>
          {home ? (
            <>
                <h1 className ={utilStyles.headerText}><SplitText copy="Whiro" role="heading"></SplitText></h1>
                <img
                    src="/images/star-mobile.jpg"
                    className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                    alt ={name}
                />
            </>
          ) : (
            <>
                    <span className ={utilStyles.headerText}><SplitText copy="Whiro" role="heading"></SplitText></span>
                        <img
                            src="/images/star-mobile.jpg"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name}
                        />
            </>
          )}
      </header>
      <main>{children}</main>
      {!home && (
          <div className={styles.backToHome}>
              <Link href="/">
                  <a>← Back to home</a>
              </Link>
          </div>
      )}
    </div>
    </>
  );
}

export default Layout;
