import { createGlobalStyle, ThemeProvider } from 'styled-components'

export const theme = {
  colors: {
    primary: '#0070f3',
    btnColor: '#23d997',
    bgColor: '#1b1b1b',
    gray: '#ccc',
    white: '#fff',
    bgNav: '#282828',
    waveColor: '#D96ED4',
  },
  fonts: {
    bodyFont: 'Lato, sans-serif',
    logoFont: 'Lobster, cursive',
  },
  photos: {
    home1: '/img/home1.png',
    home2: '/img/home2.png',
  },
  icons:{
    clock: '/img/clock.svg',
    diaphragm: '/img/diaphragm.svg',
    money: '/img/money.svg',
    teamwork: '/img/teamwork.svg',
    
  }
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width: 1700px){
      font-size: 75%
    }
  }

  body{
    background: ${({ theme }) => theme.colors.bgColor};
    font-family: ${({ theme }) => theme.fonts.bodyFont};
    overflow-x: hidden; 
  }

  button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid ${({ theme }) => theme.colors.btnColor};
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.5s ease;
    font-family: ${({ theme }) => theme.fonts.bodyFont};
    text-transform: uppercase;
    &:hover{
        background-color: ${({ theme }) => theme.colors.btnColor};;
        color: ${({ theme }) => theme.colors.white};
    }
  }

  h2{
      font-weight: lighter;
      font-size: 4rem;
  }
  h3{
      color: ${({ theme }) => theme.colors.white};
  }
  h4{
      font-weight: bold;
      font-size: 2rem;
       
  }
  a{
    font-size: 1.1rem;
  }
  span{
    font-weight: bold;
    color:${({ theme }) => theme.colors.btnColor};
  }
  p{
    padding: 3rem 0rem;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.4rem;
    line-height: 150%;
  }

`
