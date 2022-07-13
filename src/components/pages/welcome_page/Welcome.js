import { useSpring, useTransition, animated } from 'react-spring';
import {
	Wrapper,
	Reflection,
	TextWrapper,
	Border,
} from '../_styles/Pages.styles';
import { Container } from '@mui/material';
import { AiOutlineArrowRight } from 'react-icons/ai';

const WelcomePage = () => {
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
		<Wrapper style={fadeIn}>
			<TextWrapper>w e l c o m e</TextWrapper>
			<Reflection style={fadeInReflection}>
				w e l c o m e
			</Reflection>
			<Container
				style={{
					fontSize: '2.8rem',
					width: '100%',
					marginTop: '15%',
					borderLeft: '5px solid black',
					borderRadius: '1rem',
				}}
			>
				<b>WEBSITE UNDER DEVELOPMENT</b>
				<br />
				<i> click the banner to scroll{'  '}</i>
				<AiOutlineArrowRight />
			</Container>
			<Container
				style={{
					fontSize: '2.8rem',
					width: '100%',
					marginTop: '15%',
					borderLeft: '5px solid black',
					borderRadius: '1rem',
				}}
			>
				<b>INFO</b>
				<br />
				<i>created with react.js</i>
				<br />
				<i>parallax animation</i>
				<br />
				<i>light/dark mode with local storage</i>
			</Container>
		</Wrapper>
	);
};

export default WelcomePage;
