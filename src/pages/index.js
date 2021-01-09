import React, {useState} from "react"
import { GlobalStyle } from "../components/globalStyle";
import styled from "styled-components";
import { graphql } from "gatsby"
import SEO from "../components/seo"
import ArrowIcon from "../images/arrow.svg";
import DarkIcon from "../images/dark2.svg";
import LightIcon from "../images/light1.svg";
import {PageContainer,ThemeSwitch,BgImg,ContentContainer,BigAss404,Header,Desc,ButtonContainer,Btn404,BtnText} from "../styles/index.styled";

const IndexPage = ({data}) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  console.log(data);
  return (
    //TODO: can be easily saved to local storage and distributed from store e.g react-sweet-state.
    <PageContainer className={isLightTheme ? "theme-light" : "theme-dark"}>
      <GlobalStyle/>
      <ThemeSwitch onClick={()=>setIsLightTheme(!isLightTheme)}>
        {isLightTheme ?  <DarkIcon/> : <LightIcon/>}
      </ThemeSwitch>
      <SEO title="Home" />
      <BgImg objectFit="fill" fluid={isLightTheme ? data.lightBg.childImageSharp.fluid : data.darkBg.childImageSharp.fluid} />
      <ContentContainer>
        <BigAss404>404</BigAss404>
        <Header>Oops, you still haven't found what you looking for?</Header>
        <Desc>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</Desc>
        <ButtonContainer onClick={()=>{}}>
          <Btn404>
            <ArrowIcon/>
          </Btn404>
          <BtnText>
            Back To Home Page
          </BtnText>
        </ButtonContainer>
      </ContentContainer>
    </PageContainer>
)
}
export const query = graphql`
  query {
    lightBg: file(relativePath: { eq: "bg.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    darkBg: file(relativePath: { eq: "bg-dark.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
