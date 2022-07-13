import {
	Wrapper,
	Reflection,
	TextWrapper,
	Border,
} from '../_styles/Pages.styles';
import { useSpring } from 'react-spring';
import { Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = ({ handleRedirect }) => {
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
			<TextWrapper>p r o j e c t</TextWrapper>
			<Reflection style={fadeInReflection}>
				p r o j e c t
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
				<b>PROJECTS COMING SOON</b>
				<div>
					<GitHubIcon
						sx={{ fontSize: 50 }}
						style={{
							cursor: 'pointer',
							color: '#fff',
							marginTop: '5%',
						}}
						onClick={() => handleRedirect('github')}
					/>
				</div>
			</Container>
		</Wrapper>
	);
};

export default Projects;
