import React from 'react';
import { MobileWrapper } from '../_styles/Pages.styles';
import { useSpring } from 'react-spring';

const MobilePage = () => {
	const fadeIn = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 0,
		config: { duration: 2000 },
	});

	return (
		<MobileWrapper style={fadeIn}>
			<div>Check back soon for mobile version!</div>
		</MobileWrapper>
	);
};

export default MobilePage;
