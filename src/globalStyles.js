import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    ${'' /* overflow-y: hidden; */}
  }
  #root{
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 3rem; // FIXME
  }
  `;

export const Wrapper = styled(Container)`
	text-align: center;
`;
