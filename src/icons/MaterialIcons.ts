import { createGlobalStyle } from 'styled-components';
import MaterialIconsRegular from './MaterialIcons-Regular.ttf';

const MaterialIcons = createGlobalStyle`
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: local('Material Icons'),
      local('MaterialIcons-Regular'),
      url(${MaterialIconsRegular}) format('truetype');
  }
`

export default MaterialIcons;