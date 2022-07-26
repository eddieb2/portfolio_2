import {
	Wrapper,
	Reflection,
	TextWrapper,
	SectionWrapper,
	HWrapper,
	PWrapper,
} from '../_styles/Pages.styles';
import { useSpring } from 'react-spring';
import { Container } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = ({ handleRedirect }) => {
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
					<TextWrapper>a b o u t</TextWrapper>
					<Reflection style={fadeInReflection}>
						a b o u t
					</Reflection>
				</div>

				<SectionWrapper>
					<HWrapper>
						Eddie Blanciak{' '}
						<LinkedInIcon
							sx={{ fontSize: 35 }}
							style={{
								cursor: 'pointer',
								color: 'royalblue',
							}}
							onClick={() => handleRedirect('linkedin')}
						/>
						<PWrapper>software developer</PWrapper>
						<PWrapper>general contractor</PWrapper>
					</HWrapper>
				</SectionWrapper>
			</Container>
		</Wrapper>
	);
};

export default About;
