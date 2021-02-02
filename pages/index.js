import { motion } from 'framer-motion'
import styled from 'styled-components'
import AboutSection from '../scr/components/AboutSection'
import ServicesSection from '../scr/components/ServicesSection'


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

import {pageAnimation} from '../scr/styles/Animations'

export default function Home() {
  return (
    <motion.div
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <AboutSection />
      <ServicesSection />
    </motion.div>
  )
}
