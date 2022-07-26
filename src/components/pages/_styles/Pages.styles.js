import styled from 'styled-components';
import { animated } from 'react-spring';
import { Container } from '@mui/material';

// FIXME Breakpoints need fixed

export const Wrapper = styled(animated.div)`
	position: absolute;
	left: 150px;
	top: 200px;
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

	@media (max-width: 850px) {
		font-size: 5.5rem;
		/* left: 175px;
		top: 250px; */
	}

	@media (max-width: 700px) {
		font-size: 5.5rem;
		/* left: 125px;
		top: 250px; */
	}

	@media (max-width: 650px) {
		font-size: 4rem;
	}

	@media (max-width: 450px) {
		font-size: 3.5rem;
	}

	@media (max-width: 450px) {
		/* left: 25px;
		top: 250px; */
		font-size: 3.5rem;
	}
`;

// NOTE Mobile Styles.
// FIXME Remove once media queries are fixed.
export const MobileWrapper = styled(animated.div)`
	height: 100vh;
	display: flex;
	padding: 10%;
	align-items: center;
	font-size: 8.5rem;
	/* Removes ability to highlight the welcome text on all browsers */
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;

	@media (max-width: 700px) {
		font-size: 5.5rem;
	}

	@media (max-width: 650px) {
		font-size: 4rem;
	}

	@media (max-width: 450px) {
		font-size: 3.5rem;
	}

	@media (max-width: 400px) {
		font-size: 3rem;
	}
`;

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

export const SectionWrapper = styled.div`
	margin-top: 15%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const HWrapper = styled(Container)`
	font-size: 3.8rem;
	font-weight: bold;
	width: 100%;
	border-left: 1px solid ${({ theme }) => theme.borderColor};
	margin-bottom: 5%;

	@media (max-width: 1200px) {
		font-size: 3rem;
		/* left: 100px; */
	}

	@media (max-width: 850px) {
		font-size: 2.2rem;
	}

	@media (max-width: 450px) {
		font-size: 1.6rem;
	}
`;

export const PWrapper = styled.p`
	font-weight: normal;
	color: ${({ theme }) => theme.subText};
	font-style: italic;
	font-size: 2.4rem;
	margin: 1.5% 0 0 0;

	@media (max-width: 1200px) {
		font-size: 2rem;
		/* left: 100px; */
	}

	@media (max-width: 850px) {
		font-size: 1.8rem;
	}

	@media (max-width: 450px) {
		font-size: 1.4rem;
	}
`;

export const TextWrapper = styled.div``;
