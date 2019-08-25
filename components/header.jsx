import Link from "next/link";
import RRLogoSvg from "../components/rr-logo-svg.jsx";
import { css, jsx } from "@emotion/core";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

const headerStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const homeLogoLinkStyle = css`
  cursor: pointer;
  width: 60px;
  flex: 0 0 auto;
`;

const textLinkStyle = css`
  flex: 0 0 auto;
  text-decoration: none;
  cursor: pointer;
  transition: all 250ms;
  margin-right: 2vw;
  color: #505050;
  &:hover {
    color: #000000;
  }
`;

const Header = () => (
  <header css={headerStyle}>
    <Link href="/">
      <a css={homeLogoLinkStyle}>
        <RRLogoSvg />
      </a>
    </Link>
    <Link href="/about">
      <a css={textLinkStyle} title="About Page">
        About
      </a>
    </Link>
  </header>
);

export default Header;
