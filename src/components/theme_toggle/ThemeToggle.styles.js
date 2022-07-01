import styled from 'styled-components';
import { Box } from '@mui/material';

export const ToggleWrapper = styled(Box)`
	z-index: 999;
	position: absolute;
	top: 10;
	font-size: 3rem;

	@media (max-width: 800px) {
		font-size: 2.75rem;
	}

	@media (max-width: 600px) {
		font-size: 2.5rem;
	}

	@media (max-width: 450px) {
		font-size: 2.25rem;
	}
`;
