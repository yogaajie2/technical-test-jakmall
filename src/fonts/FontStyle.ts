import { createGlobalStyle } from 'styled-components';
import InterRegular from './Inter-Regular.ttf';
import InterMedium from './Inter-Medium.ttf';
import InterBold from './Inter-Bold.ttf';
import MontserratBold from './Montserrat-Bold.ttf';

const FontStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${InterRegular}) format('truetype');
    font-weight: 400;
    font-display: fallback;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterMedium}) format('truetype');
    font-weight: 500;
    font-display: fallback;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterBold}) format('truetype');
    font-weight: 700;
    font-display: fallback;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBold}) format('truetype');
    font-weight: 700;
    font-display: fallback;
    font-style: normal;
  }
`

export default FontStyle;