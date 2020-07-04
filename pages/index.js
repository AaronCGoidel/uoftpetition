import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Bottom from "../components/Bottom";
import Modal from "../components/Modal";
import firebase from "../components/Firebase";
import Form from "../components/Form";
import Thanks from "../components/Thanks";
import Cookies from "universal-cookie";
import CookieConsent from "react-cookie-consent";

const db = firebase.firestore();

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form_open: false,
      num_sent: 0,
      email: {},
      thank_you: false,
      cookies: new Cookies(),
    };
  }

  handleToggleForm = () => {
    this.setState({
      form_open: !this.state.form_open,
    });
  };

  handleFormSubmit = (new_petition, email) => {
    if (this.state.cookies.get("submitted") === undefined) {
      db.collection("petitions").add({
        ...new_petition,
      });

      window.location = email;

      this.setState({ thank_you: true });

      console.log("submitted");
    } else {
      console.log("could not submit");
    }

    this.state.cookies.set("submitted", true, { path: "/" });
  };

  handlePlaintext = (email) => {
    this.setState({ email: { ...email }, show_email: true });
  };

  componentDidMount() {
    if (this.state.cookies.get("submitted")) {
      this.setState({ thank_you: true });
    }

    db.collection("petitions")
      .get()
      .then((res) => this.setState({ num_sent: res.size }));
  }

  render() {
    return (
      <div className="container">
        <Head>
          <title>UofT Petition</title>
          <meta
            name="Description"
            content="Petition to lower fees for students who are using online learning at the University of Toronto during Covid-19."
          />

          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <main className={`${this.state.form_open ? "static" : ""}`}>
          <CookieConsent
            location="bottom"
            buttonText="I Understand"
            style={{ background: "#fff", color: "#000" }}
            buttonStyle={{
              background: "var(--color-light)",
              color: "var(--color-main)",
              fontSize: "13px",
            }}
            expires={150}
          >
            This website uses cookies to function.{" "}
            <span style={{ fontSize: "10px" }}>
              We only keep track of which device has used the form to prevent
              spam.
            </span>
          </CookieConsent>
          <Hero toggleForm={() => this.handleToggleForm()} />
          <Info />
          <Bottom
            toggleForm={() => this.handleToggleForm()}
            num={this.state.num_sent}
          />
          <Modal
            center
            open={this.state.form_open}
            closeFn={() => this.setState({ form_open: false })}
          >
            <Form
              submit={this.handleFormSubmit}
              plaintextSubmit={this.handlePlaintext}
              closeForm={() => this.setState({ form_open: false })}
            />
          </Modal>
          <Modal
            open={this.state.thank_you}
            closeFn={() => this.setState({ thank_you: false })}
          >
            <Thanks />
          </Modal>
          <Footer />
        </main>

        <style jsx>{`
          @media screen and (max-width: 800px) {
            .static {
              position: fixed;
              visibility: hidden;
              z-index: -1;
              overflow: hidden;
            }
          }
        `}</style>

        <style jsx global>{`
          :root {
            --color-main: #0b2b59;
            --color-dark: #031227;
            --color-light: #c5defc;

            --mobile-break: 60rem;
          }

          html,
          body {
            padding: 0;
            margin: 0;
            font-family: Open Sans, sans-serif;
          }

          * {
            box-sizing: border-box;
          }

          *:focus {
            outline: none;
          }

          .flex-center {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          h1,
          h2,
          h3,
          h4 {
            text-align: center;
            font-weight: normal;
          }

          .bottom {
            margin-top: auto;
          }

          a,
          a:hover,
          a:focus,
          a:active {
            text-decoration: none;
            color: inherit;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
