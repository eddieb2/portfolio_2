import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, Wrapper } from './globalStyles';
import { lightTheme, darkTheme } from './components/Themes';

// Components
import WelcomePage from './components/welcome_page/WelcomePage';
import Popup from './components/PopUp';
import ThemeToggle from './components/theme_toggle/ThemeToggle';

const App = () => {
	const [theme, setTheme] = useState('light');

	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
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
				<Wrapper maxWidth='md'>
					<WelcomePage />
					{/* <Popup /> */}
				</Wrapper>
			</>
		</ThemeProvider>
	);
};

export default App;
