import {
	Wrapper,
	Reflection,
	TextWrapper,
	Border,
	SectionWrapper,
	HWrapper,
} from '../_styles/Pages.styles';
import { useSpring } from 'react-spring';
import { Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

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
			<Container>
				<TextWrapper>p r o j e c t s</TextWrapper>
				<Reflection style={fadeInReflection}>
					p r o j e c t s
				</Reflection>
				<SectionWrapper>
					<div>
						<HWrapper>
							Software Development{' '}
							<GitHubIcon
								sx={{ fontSize: 35 }}
								style={{
									cursor: 'pointer',
									color: 'white',
								}}
								onClick={() =>
									handleRedirect('github')
								}
							/>
						</HWrapper>
					</div>
					<div>
						<HWrapper>
							Home Remodeling{' '}
							<InstagramIcon
								sx={{ fontSize: 35 }}
								style={{
									cursor: 'pointer',
									color: 'pink',
								}}
								onClick={() =>
									handleRedirect('instagram')
								}
							/>
						</HWrapper>
					</div>
				</SectionWrapper>
			</Container>
		</Wrapper>
	);
};

export default Projects;
