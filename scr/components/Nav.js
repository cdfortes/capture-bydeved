import styled from 'styled-components'

import Link from 'next/link'

import { useRouter } from 'next/router'

import { motion } from 'framer-motion'

const Nav = () => {
  const router = useRouter()
  return (
    <StyledNav>
      <Logo>
        <Link href='/'>Capture</Link>
      </Logo>
      <ul>
        <li>
          <Link href='/'>1. About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: router.pathname === '/' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link href='/work'>2. Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: router.pathname === '/work' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link href='/contact'>3. Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: router.pathname === '/contact' ? '50%' : '0%' }}
          />
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: ${({ theme }) => theme.colors.bgNav};
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
    text-transform: uppercase;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`

const Logo = styled.h1`
  font-family: ${({ theme }) => theme.fonts.logoFont};
  a {
    font-size: 1.5rem;
    
  }
  @media (max-width: 1300px) {
    display: inline-block;
    margin: 1rem;
  }
`

const Line = styled(motion.div)`
  height: 0.3rem;
  background: ${({ theme }) => theme.colors.btnColor};
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`

export default Nav
