import styled from 'styled-components'

import { theme } from '../styles/GlobalStyle'

import { scrollReveal } from '../styles/Animations'

import { Description, Image } from './Common'
import { About } from './AboutSection'

import { useScroll } from '../hooks/useScroll'

const ServicesSection = () => {
  const [element, controls] = useScroll()

  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <Icon>
              <img src={theme.icons.clock} alt='icon-clock' />
              <h3>Efficient</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={theme.icons.teamwork} alt='icon-clock' />
              <h3>Teamwork</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={theme.icons.diaphragm} alt='icon-clock' />
              <h3>Diaphragm</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={theme.icons.money} alt='icon-clock' />
              <h3>Affordable</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img alt='camera' src={theme.photos.home2} />
      </Image>
    </Services>
  )
}

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`
const Card = styled.div`
  flex-basis: 20rem;
`
const Icon = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`

export default ServicesSection
