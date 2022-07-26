import { useSpring, useTransition, animated } from 'react-spring';
import {
	Wrapper,
	Reflection,
	TextWrapper,
	HWrapper,
	PWrapper,
	SectionWrapper,
} from '../_styles/Pages.styles';
import { Container } from '@mui/material';

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
			<Container>
				<div>
					<TextWrapper>w e l c o m e</TextWrapper>
					<Reflection style={fadeInReflection}>
						w e l c o m e
					</Reflection>
				</div>
				<SectionWrapper>
					<HWrapper>
						Website under construction
						<PWrapper>
							Click the banner to scroll.
						</PWrapper>
					</HWrapper>
				</SectionWrapper>
			</Container>
		</Wrapper>
	);
};

export default WelcomePage;
