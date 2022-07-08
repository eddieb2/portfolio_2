import { useState, useEffect } from 'react';
import { useSpring, useTransition, animated } from 'react-spring';
import {
	WelcomeWrapper,
	Reflection,
	TextWrapper,
	Border,
} from './WelcomePage.styles';
import { FaDoorOpen } from 'react-icons/fa';

const WelcomePage = ({ text }) => {
	const fadeIn = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 0,
		config: { duration: 2000 },
	});

	const fadeInReflection = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 1000,
		config: { duration: 2000 },
	});

	return (
		<WelcomeWrapper style={fadeIn}>
			<TextWrapper>{text}</TextWrapper>
			<Reflection style={fadeInReflection}>{text}</Reflection>
			<p
				style={{
					fontSize: '2.8rem',
					width: '35%',
					marginTop: '5%',
				}}
			>
				Lorem ipsum dolor sit, amet consectetur adipisicing
				elit. Nobis, explicabo eveniet sit, quae nemo ab
				suscipit animi quibusdam vel non corporis praesentium!
				Modi corporis, beatae officia voluptas perferendis
				aliquam ullam.
			</p>
		</WelcomeWrapper>
	);
};

export default WelcomePage;
