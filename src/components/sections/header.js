import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "../global"

const Header = () => {
  const data= useStaticQuery(graphql`
  query Bust{
  file(relativePath: {eq: "bust.png"}) {
    childImageSharp {
      gatsbyImageData(layout:CONSTRAINED quality: 100 )
      }
    
  }
  }
  
  `)

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
        <HeaderTextGroup>
          <Text>
            <h1>
              Learn
              <br />
              from the people who did it before you..
            </h1>
            <h2>
              Newsletter to explore the lessons from historical characters and events and how to apply them in our professional and business life. 
            </h2>
           
          
            <Button as="a" href="https://sapereaudehq.substack.com/p/coming-soon?r=o30d6&utm_campaign=post&utm_medium=web&utm_source=copy">Get Early Access</Button>
           
            </Text>
              
          </HeaderTextGroup>
          <ImageWrapper>
        
          <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
            <br />
          </ImageWrapper>

          
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: #fedc5a;
  padding: 80px 0 80px 0;
  position: relative;
  
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeaderTextGroup = styled.span`
  margin: 0;
  padding-top:0rem;
  display: table;


  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const FormSubtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
`

const FormSubtitleLink = styled(Link)`
  color: ${props => props.theme.color.secondary};
  padding-bottom: 1px;
  margin-left: 8px;
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.color.secondary};
`

const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

export const Button = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 16.5px 33px;
  vertical-align: middle;
  margin:0,auto;
  width: 12rem;
  background: ${props => props.theme.color.secondary};
  color: white;
  text-decoration: none;
  &:hover {
    box-shadow: 12px 12px 2px 1px rgba(74,75,77,1);
    transform: scale(1.05);
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }

`
const ImageWrapper = styled.div`
  justify-self: end;
  align-self: start;
  padding:80px;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
const Text=styled.span`
 vertical-align:middle;
  display: table-cell;

`