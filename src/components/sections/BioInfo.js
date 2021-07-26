import React from 'react'
import styled from "styled-components"   
import {FaLinkedinIn} from "@react-icons/all-files/fa/FaLinkedinIn"
import {HiOutlineMail}  from "@react-icons/all-files/hi/HiOutlineMail"
import {FiTwitter} from "@react-icons/all-files/fi/FiTwitter"
import { Section } from "../global"



const BioInfo = () => {
 

    return (
      <StyledSection>
        
        <BioWrapper>
              Created with &#128151; by a history geek and tech entrepreneur Dobromir Kotsev 
              <SocialLinks>
              <span>
              <a href="https://www.linkedin.com/in/dobromirkotsev/">
              <FaLinkedinIn color="white"/>
              </a>
              &nbsp;</span>
               <a href="mailto:dobromir.kotsev@gmail.com?Subject=Some%20subject">
                  <HiOutlineMail color="white"/> 
                </a>   &nbsp;
                <a href="https://twitter.com/Dkotsev2">
                  <FiTwitter color="white"/> 
                </a>

              </SocialLinks>
            
              </BioWrapper>
            
        </StyledSection>

              )   
       
    
}
export default BioInfo;

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.dark};
  display:flex;
  justify-content:center;
  align-items:center;
 
`
const BioWrapper=styled.div`
font-size:18px;
color:white;
`
const SocialLinks=styled.div`
  display:flex;
  justify-content: center;
  margin-top:8px;

`
