import { breakpoints } from "../helpers";
import styled from "styled-components";
import Img from "gatsby-image"

export const PageContainer = styled.main`
  width:100vw;
  height:100vh;
  position:relative;
  *{
    transition: all .2s;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding:1.25rem;

  @media (min-width: ${breakpoints.md}) {
    padding-top: 5%;
    padding-left: 8%;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding-top: 0%;
  }

  @media (min-width: ${breakpoints.xlg}) {
    padding-top: 8%;
    padding-left: 15%;
  }

  @media (min-width: ${breakpoints.xxlg}) {
    padding-top: 0%;
    padding-left: 15%;
  }

  @media (min-width: ${breakpoints.uhd}) {
    padding-top: 8%;
    padding-left: 15%;
  }

  *{
    font-size: 1.5rem;
  }
`
export const BigAss404 = styled.span`
  font-size: 30rem;
  font-weight: 900;
  background: var(--accent-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 10rem;

  @media (min-width: ${breakpoints.md}) {
    font-size: 25rem;
  }

  @media (min-width: ${breakpoints.xlg}) {
    font-size: 30rem;
  }

  @media (min-width: ${breakpoints.xxlg}) {
    font-size: 24rem;
  }

`
export const Header = styled.h1`
  font-weight: 500;
  font-size: 2.5rem;
  max-width: 550px;
  margin-top:2rem;

  @media (min-width: ${breakpoints.md}) {
  font-size: 3.5rem;
  margin-top:auto;
  }
`
export const Desc = styled.p`
  max-width:450px;
  margin-top: 2rem;
`
export const Btn404 = styled.button`
  &:hover{
    transform:scale(1.25);
  }
  transition: all .2s;
  background: var(--accent-bg);
  border:none;
  box-shadow:none;
  padding:1.5rem;
`
export const BtnText = styled.span`
  margin-left: 2rem;

`
export const ButtonContainer = styled.div`
  display: flex;
  align-items:center;
  margin-top: 4rem;
`
export const BgImg = styled(Img)`
  width:100%;
  height:100%;
  position:absolute !important;
  top:0;
  left:0;
  z-index: -1;
`

export const ThemeSwitch = styled.button`
  &:hover{
      transform:scale(1.15);
    }
    transition: transform .2s;
    background: var(--theme-switch-bg);
    border:none;
    border-radius: 50%;
    position:absolute;
    top:3rem;
    right:1.7rem;
    box-shadow:5px 5px black solid;
    cursor: pointer;
    width:5rem;
    height:5rem;
    @media (min-width: ${breakpoints.md}) {
      top:3rem;
    right:3rem;
    }

`