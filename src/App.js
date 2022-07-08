import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, Wrapper } from './globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import { useTransition, useSpring } from 'react-spring';

// Components
import WelcomePage from './components/welcome_page/WelcomePage';
import Popup from './components/PopUp';
import ThemeToggle from './components/theme_toggle/ThemeToggle';

const App = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem('colorMode') || 'dark'
	);

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
				<Wrapper maxWidth='lg'>
					<WelcomePage />
					{/* <Popup /> */}
				</Wrapper>
			</>
		</ThemeProvider>
	);
};

export default App;
