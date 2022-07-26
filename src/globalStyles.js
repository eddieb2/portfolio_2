import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import { ParallaxLayer } from '@react-spring/parallax';

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
    // transition: background 3s ease;   // FIXME causes screen to be white on mount
  }
  `;

export const Wrapper = styled(Container)``;

export const ParallaxLayerStyled = styled(ParallaxLayer)`
	background: ${({ theme }) => theme.text};
	opacity: 0.4;
	clip-path: polygon(20% 0, 70% 0, 50% 100%, 0% 100%);
	transition: opacity 2s;

	&:hover {
		opacity: 1;
	}

	@media (max-width: 1200px) {
	}

	@media (max-width: 850px) {
		/* clip-path: polygon(
			75% 0%,
			90% 50%,
			75% 100%,
			0% 100%,
			25% 50%,
			0% 0%
		); */
	}

	@media (max-width: 600px) {
	}

	@media (max-width: 450px) {
	}
`;
