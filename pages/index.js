import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Bottom from "../components/Bottom";
import Modal from "../components/Modal";
import firebase from "../components/Firebase";

const db = firebase.firestore();

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form_open: false,
      num_sent: 0,
    };
  }

  handleToggleForm = () => {
    this.setState({
      form_open: !this.state.form_open,
    });
  };

  handleFormSubmit = (new_petition) => {
    db.collection("petitions").add({
      ...new_petition,
    });
  };

  componentDidMount() {
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
          <Hero toggleForm={() => this.handleToggleForm()} />
          <Info />
          <Bottom
            toggleForm={() => this.handleToggleForm()}
            num={this.state.num_sent}
          />
          <Modal
            open={this.state.form_open}
            closeFn={() => this.setState({ form_open: false })}
            submitForm={this.handleFormSubmit}
          />
        </main>

        <Footer />

        <style jsx>{`
          @media screen and (max-width: 50rem) {
            .static {
              position: fixed;
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
