import React, { useContext } from 'react';

const Nav = () => {
	// const { darkMode, handleChange } = useContext(UserContext);
	// const classes = useStyles();

	return (
		<>
			<nav>
				<div
					className='link-wrapper'
					style={{ 'font-size': 20 }}
				>
					<a href='#'>About</a>
					<a href='#'>Projects</a>
					<a href='#'>Resume</a>
					<a href='#'>Contact</a>
				</div>
				<div className='icon-wrapper'>
					<i
						class='fab fa-linkedin'
						onClick={() => {
							window.location.href = window.open(
								'https://www.linkedin.com/in/edward-blanciak-7a78b189/'
							);
						}}
					></i>
					<i
						class='fab fa-github-square'
						onClick={() => {
							window.open('https://github.com/eddieb2');
						}}
					></i>
				</div>
			</nav>
		</>
	);
};
export default Nav;
