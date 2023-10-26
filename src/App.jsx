import { useState } from 'react';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import Calculadora from './assets/components/Calculadora';
import styled from 'styled-components';

function App() {

  const Section = styled.section`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  `

  return (
    <>
    <GlobalStyle/>
    <Section> 
      <Calculadora/>
    </Section>
   
    </>
  )
}

export default App
