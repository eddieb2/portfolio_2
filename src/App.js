import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import {
	GlobalStyles,
	Wrapper,
	ParallaxLayerStyled,
} from './globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// Components
import Welcome from './components/pages/welcome_page/Welcome';
import About from './components/pages/about_page/About';
import Projects from './components/pages/projects_page/Projects';
import ThemeToggle from './components/theme_toggle/ThemeToggle';

const App = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem('colorMode') || 'dark'
	);

	const page = useRef(null);

	const themeToggler = () => {
		// theme === 'light' ? setTheme('dark') : setTheme('light');

		if (theme === 'dark') {
			setTheme('light');
			localStorage.setItem('colorMode', 'light');
		} else {
			setTheme('dark');
			localStorage.setItem('colorMode', 'dark');
		}
	};

	const scroll = (pageNum) => {
		if (page.current) {
			page.current.scrollTo(pageNum);
		}
	};

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

	return (
		<ThemeProvider
			theme={theme === 'light' ? lightTheme : darkTheme}
		>
			<>
				<GlobalStyles />
				<ThemeToggle
					theme={theme}
					themeToggler={themeToggler}
				/>
				<Parallax
					pages={3}
					horizontal
					ref={page}
					style={{ overflow: 'hidden' }}
				>
					<ParallaxLayer
						offset={0}
						speed={0}
						// onClick={() => scroll(1)}
					>
						<Welcome />
						{/* FIXME Add notification to scroll */}
					</ParallaxLayer>

					<ParallaxLayerStyled
						offset={0.6}
						speed={0.4}
						onClick={() => scroll(1)}
					/>

					<ParallaxLayer
						offset={1}
						speed={0}
						// onClick={() => scroll(2)}
					>
						<About handleRedirect={handleRedirect} />
					</ParallaxLayer>

					<ParallaxLayerStyled
						offset={1.6}
						speed={0.4}
						onClick={() => scroll(2)}
					/>

					<ParallaxLayer
						offset={2}
						speed={0}
						// onClick={() => scroll(0)}
					>
						<Projects handleRedirect={handleRedirect} />
					</ParallaxLayer>

					<ParallaxLayerStyled
						offset={2.6}
						speed={0.4}
						onClick={() => scroll(0)}
					/>
				</Parallax>
			</>
		</ThemeProvider>
	);
};

export default App;

// text = 'p r o j e c t s';
// text='a b o u t'
