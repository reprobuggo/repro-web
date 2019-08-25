import Link from "next/link";
import RRLogoSvg from "../components/rr-logo-svg.jsx";
import MainLayout from "../components/main-layout.jsx";
import { css, Global, jsx } from "@emotion/core";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

const logoContainerStyle = css`
  max-width: 200px;
  margin: 0 auto;
`;

const comingSoonStyle = css`
  text-align: center;
`;

const verticallyCenteredContentStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const Index = () => (
  <MainLayout>
    <div css={verticallyCenteredContentStyle}>
      <div css={logoContainerStyle}>
        <RRLogoSvg />
      </div>
      <h2 css={comingSoonStyle}>coming soon to a bug near you</h2>
    </div>
  </MainLayout>
);

export default Index;
