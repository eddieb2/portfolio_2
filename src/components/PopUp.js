import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const PopUp = (props) => {
	const handleRedirect = (link) => {
		if (link === 'linkedin') {
			// window.location.href =
			// 	'https://www.linkedin.com/in/edward-blanciak/';

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

	return (
		<div id='popup-parent'>
			<div id='section-wrapper'>
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
			</div>
			<div>
				<p>
					W E B S I T E <br />
					U N D E R <br />
					R E P A I R <br />
				</p>
			</div>
		</div>
	);
};

export default PopUp;
