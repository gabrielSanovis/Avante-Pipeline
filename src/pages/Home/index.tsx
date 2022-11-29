import * as React from 'react';
import { Link } from "react-router-dom"
import { ThemeProvider } from 'styled-components';
import { theme } from '../../style/theme';
import {
  Container,
  Title,
  SubTitle,
  StrongText,
  NavLocal,
  ListMainCourse,
  SignUpLink
} from './styles';

import { MathOperations, Books, Heartbeat } from 'phosphor-react';
import { mockApi, words } from './mock';
import { Button } from '../../components/Button';
import { NavMobile } from '../../components/NavMobile';
import { Course } from './components/Course';

export function Home() {

  const { title, subtitle, description, navLocal, whoWe, as } = words;

  return (
    <ThemeProvider theme={theme}>
      <NavMobile rightChildren={<Link to="/auth"><Button>Entrar</Button></Link>} />
      <Container>
        <Title>{title.pt}</Title>
        <SubTitle>{subtitle.pt}</SubTitle>
        <StrongText>{description.pt}</StrongText>
        <StrongText>{navLocal.title.pt}</StrongText>


        <ListMainCourse role="navigation" >
          <li>
            <NavLocal href='#Exatas' >
              <StrongText
                uppercase
                withIcon
              >
                <MathOperations size={20} />
                {navLocal.exact.pt}
              </StrongText>
            </NavLocal>
          </li>

          <li>
            <NavLocal href='#Saúde'>
              <StrongText
                uppercase
                withIcon
              >
                <Heartbeat size={20} />
                {navLocal.health.pt}
              </StrongText>
            </NavLocal>
          </li>

          <li>
            <NavLocal href='#Humanas'>
              <StrongText
                uppercase
                withIcon
              >
                <Books size={20} />
                {navLocal.human.pt}
              </StrongText>
            </NavLocal>
          </li>
        </ListMainCourse>

        {
          mockApi.map(item => (
            <Course key={item.id} title={item.title} description={item.description} courseList={item.course_list} />
          ))
        }
        
        <SubTitle uppercase >{whoWe.title.pt}</SubTitle>
        <StrongText>{whoWe.description.pt}</StrongText>

        <SubTitle uppercase >{as.title.pt}</SubTitle>
        <StrongText>{as.description.pt}</StrongText>

        <SignUpLink to="/auth/sign-up">
          <Button
            style={{
            }}
          >Cadastra-se</Button>
        </SignUpLink>
      </Container>
    </ThemeProvider>

  )
}