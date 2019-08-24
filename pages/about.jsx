import MainLayout from "../components/main-layout.jsx";
import { css, jsx } from "@emotion/core";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

const aboutTextStyle = css`
  width: 80%;
  margin: 0 auto;
`;

const About = () => (
  <MainLayout>
    <p css={aboutTextStyle}>
      Repro is a tool for working together to reproduce and squash bugs.
    </p>
  </MainLayout>
);

export default About;
