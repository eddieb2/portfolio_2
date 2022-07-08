import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, Wrapper } from './globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// Components
import WelcomePage from './components/welcome_page/WelcomePage';
import Popup from './components/PopUp';
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
						onClick={() => scroll(1)}
					>
						<WelcomePage text='w e l c o m e' />
						{/* FIXME Add notification to scroll */}
					</ParallaxLayer>

					<ParallaxLayer
						offset={0.6}
						speed={1}
						style={{
							background: '#9DF7E5',
							clipPath:
								'polygon(20% 0, 70% 0, 50% 100%, 0% 100%)',
						}}
						onClick={() => scroll(1)}
					/>

					<ParallaxLayer
						offset={1}
						speed={0}
						onClick={() => scroll(2)}
					>
						<WelcomePage text='a b o u t' />
					</ParallaxLayer>

					<ParallaxLayer
						offset={1.6}
						speed={1}
						style={{
							background: '#E5A9A9',
							clipPath:
								'polygon(20% 0, 70% 0, 50% 100%, 0% 100%)',
						}}
						onClick={() => scroll(2)}
					/>

					<ParallaxLayer
						offset={2}
						speed={0}
						onClick={() => scroll(0)}
					>
						<WelcomePage text='p r o j e c t s' />
					</ParallaxLayer>

					<ParallaxLayer
						offset={2.6}
						speed={1}
						style={{
							background: '#D66BA0',
							clipPath:
								'polygon(20% 0, 70% 0, 50% 100%, 0% 100%)',
						}}
						onClick={() => scroll(0)}
					/>
				</Parallax>
			</>
		</ThemeProvider>
	);
};

export default App;
