import {
	Wrapper,
	Reflection,
	TextWrapper,
	Border,
} from '../_styles/Pages.styles';
import { useSpring } from 'react-spring';
import { Container } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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

	// FIXME Styles are temporary. Move to Styled components folder

	return (
		<Wrapper style={fadeIn}>
			<TextWrapper>a b o u t</TextWrapper>
			<Reflection style={fadeInReflection}>
				a b o u t
			</Reflection>
			<Container
				style={{
					width: '100%',
					marginTop: '15%',
					borderLeft: '5px solid black',
					borderRadius: '1rem',
				}}
			>
				<div
					style={{
						fontSize: '3.6rem',
						fontWeight: 'bold',
					}}
				>
					EDDIE BLANCIAK
				</div>
				<div
					style={{
						fontSize: '2.2rem',
						fontStyle: 'italic',
						color: '#fff',
					}}
				>
					software developer
				</div>
				<div>
					<LinkedInIcon
						sx={{ fontSize: 50 }}
						style={{
							cursor: 'pointer',
							color: '#fff',
						}}
						onClick={() => handleRedirect('linkedin')}
					/>
				</div>
			</Container>
		</Wrapper>
	);
};

export default About;
