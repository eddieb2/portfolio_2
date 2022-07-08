import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;

  }
  html {
    font-size: 62.5%;
  }

  #root{
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fontFamily};
    transition: all 3s ease;   // FIXME causes screen to be white on mount
    
  }
  `;

export const Wrapper = styled(Container)``;
