import Header from "./header.jsx";
import Head from "next/head";
import { css, Global, jsx } from "@emotion/core";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

const globalStyle = css`
  * {
    box-sizing: border-box;
    font-family: "Slabo 27px", serif;
  }
`;

const MainLayout = props => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Repro</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Slabo+27px&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Global styles={globalStyle} />
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
