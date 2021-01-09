import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500;900&display=swap');
  * {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    padding:0;
    margin:0;
  }

  body{
    width:100%;
    height:100%;
    overflow: hidden;
  }

  .theme-light {
    --bg: #ffffff;
    --accent-color: -webkit-linear-gradient(196.22deg, #0765E3 -82.85%, #AE01FF 180.19%);
    --accent-bg: linear-gradient(196.22deg, #0765E3 -82.85%, #AE01FF 180.19%);
    --text-color: #000000;
    --theme-switch-bg: #0b0c0d;
  }


  .theme-dark {
    --bg: #ffffff;
    --accent-color: -webkit-linear-gradient(196.22deg, #0765E3 -82.85%, #AE01FF 180.19%);
    --accent-bg: linear-gradient(196.22deg, #0765E3 -82.85%, #AE01FF 180.19%);
    --text-color: #bebebe;
    --theme-switch-bg:#ffffff;

  }

  html *{
    color: var(--text-color);
  }

  .container{
    background-color: var(--bg);
  }


`