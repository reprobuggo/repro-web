import Link from 'next/link';
import Head from 'next/head';
import RRLogoSvg from '../components/rr-logo-svg.jsx';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core'


const globalStyle = css`
  * {
    box-sizing: border-box;
    font-family: 'Slabo 27px', serif;
  }
`;

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
  <>
    <Head>
      <title>Repro</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Slabo+27px&display=swap" rel="stylesheet" />
    </Head>

    <Global
      styles={globalStyle}
    />

    <div
      css={verticallyCenteredContentStyle}
    >
      <div
        css={logoContainerStyle}
        >
          <RRLogoSvg
            style={logoContainerStyle}
          />
        </div>
        <h2 css={comingSoonStyle}>coming soon to a bug near you</h2>
    </div>
  </>
);

export default Index;
