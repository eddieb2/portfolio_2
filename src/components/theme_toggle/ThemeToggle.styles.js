import styled from 'styled-components';
import { Box } from '@mui/material';
import { animated } from 'react-spring';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';

export const ToggleWrapper = styled(animated.div)`
	position: absolute;
	z-index: 999;
	padding: 0.5rem;
	transition: transform 2s;

	&:hover {
		transform: rotate(90deg);
	}

	@media (max-width: 800px) {
		font-size: 2.75rem;
	}

	@media (max-width: 600px) {
		font-size: 2.5rem;
	}

	@media (max-width: 450px) {
		font-size: 2.25rem;
	}

	& > * {
		cursor: pointer;
	}
`;

export const LightModeIcon = styled(animated(MdDarkMode))`
	font-size: 7rem;
`;

export const DarkModeIcon = styled(animated(MdOutlineDarkMode))`
	font-size: 7rem;
`;
