import styled from 'styled-components';
import { animated } from 'react-spring';
import { Container } from '@mui/material';

export const Wrapper = styled(animated.div)`
	position: absolute;
	left: 150px;
	top: 250px;
	font-size: 8.5rem;
	/* Removes ability to highlight the welcome text on all browsers */
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;

	@media (max-width: 1200px) {
		font-size: 6rem;
		left: 100px;
	}

	@media (max-width: 800px) {
		font-size: 5rem;
	}

	@media (max-width: 600px) {
		font-size: 4rem;
	}

	@media (max-width: 450px) {
		font-size: 3.5rem;
	}
`;

export const TextWrapper = styled.div``;

export const Reflection = styled(animated.div)`
	/* animation: fade-reflection 3s linear; */
	transform: scaleY(-1);
	-moz-transform: scaleY(-1);
	-o-transform: scaleY(-1);
	-webkit-transform: scaleY(-1);
	transform: rotateX(180deg);
	-moz-transform: rotateX(210deg);
	-o-transform: rotateX(210deg);
	-webkit-transform: rotateX(210deg);
	perspective: 200px;
	mask-image: -webkit-gradient(
		linear,
		right top,
		right bottom,
		from(transparent),
		color-stop(20%, transparent),
		to(rgba(0, 0, 0, 0.4))
	);
	-webkit-mask-image: -webkit-gradient(
		linear,
		right top,
		right bottom,
		from(transparent),
		color-stop(20%, transparent),
		to(rgba(0, 0, 0, 0.4))
	);
`;

export const Border = styled(animated.div)`
	border-top: 0.1rem solid white;
	width: 25%;
`;
