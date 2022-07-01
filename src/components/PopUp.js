import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useSpring, animated } from 'react-spring';

const PopUp = (props) => {
	// Help Functions
	const handleRedirect = (link) => {
		if (link === 'linkedin') {
			window
				.open(
					'https://www.linkedin.com/in/edward-blanciak/',
					'_blank'
				)
				.focus();
		} else {
			window
				.open('https://github.com/eddieb2', '_blank')
				.focus();
		}
	};

	const animatedProps = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		config: { duration: 3000 },
	});

	const animatedProps2 = useSpring({});

	return (
		<div id='popup-parent'>
			<animated.div style={animatedProps} id='section-wrapper'>
				<div id='name-wrapper'>
					E D D I E <br /> B L A N C I A K
				</div>
				<div id='title-wrapper'>Software Developer</div>
				<div id='icon-wrapper'>
					<LinkedInIcon
						sx={{ fontSize: 40 }}
						onClick={() => handleRedirect('linkedin')}
					/>
					<GitHubIcon
						sx={{ fontSize: 40 }}
						onClick={() => handleRedirect('github')}
					/>
				</div>
			</animated.div>
			<animated.div style={animatedProps}>
				<p>
					W E B S I T E <br />
					U N D E R <br />
					R E P A I R <br />
				</p>
			</animated.div>
		</div>
	);
};

export default PopUp;
