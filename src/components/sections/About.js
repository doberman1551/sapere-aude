import React from "react"
import styled from "styled-components"
import {Button} from "./header"
import { Section, Container } from "../global"

const About = () => (
  <Section id="features">
    <StyledContainer>
   
      <SectionTitle>What it is?</SectionTitle>
      <About>
      
          <AboutText>
            Sapere Aude (Latin:Dare to learn) is a biweekly newsletter with the aim of exploring the lessons from the past and putting them in a modern context. Read short stories about the deeds and failures of famous and not-so famous people and events. How they tackled the challenges and problems of their day and how you could apply them in your live.

            <br/>  <br/>
            As an added bonus, you would "wow" your friends on the next trivia night! 
            

          </AboutText>
          <Button as="a" href="https://sapereaudehq.substack.com/p/coming-soon?r=o30d6&utm_campaign=post&utm_medium=web&utm_source=copy">I want in!</Button>
      </About>

    </StyledContainer>
  </Section>
)

export default About




const StyledContainer = styled(Container)`
`

const SectionTitle = styled.h3`
  color: white;
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const About = styled.div`
  display: inline-block;
  text-align:center;
  margin: 0px auto;
  color: white;
 
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`


const AboutText = styled.p`
  text-align: center;
  margin:0 auto;
  color: white;
  font-size:18px;
  margin-bottom:1.6rem;
  `