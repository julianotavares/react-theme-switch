import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components';
import { shade } from 'polished'


import { Container } from './styles'
export default function Header() {
  const { colors } = useContext(ThemeContext)

  return (
   <Container>
     Hello World
     <Switch 
      onChange={() => {}}
      checked={false}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      handleDiameter={20}
      offColor={shade(0.15, colors.primary)}
      onColor={colors.secondary}
     />
   </Container>
  )
}
