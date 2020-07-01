import Head from "next/head";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Info from "../components/Info";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>UofT Petition</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Hero />
        <Info />
      </main>

      <Footer />

      <style jsx>{``}</style>

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

        .flex-center {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h1 {
          font-size: 3rem;
          font-weight: normal;
        }
      `}</style>
    </div>
  );
}
