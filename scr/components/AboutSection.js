import { motion } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '../styles/GlobalStyle'

// img

import { titleAnim, fade, photoAnim } from '../styles/Animations'

import {Description, Image } from './Common'




import Wave from './Wave'

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={theme.photos.home1} alt='man' />
      </Image>
      <Wave />
    </About>
  )
}

//Styles

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`

const Hide = styled.div`
  overflow: hidden;
`

export default AboutSection
