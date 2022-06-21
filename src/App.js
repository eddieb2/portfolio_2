import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

// SECTION Components
import Nav from './components/Nav';
import Home from './components/Home';
import WelcomePage from './components/WelcomePage';
import PopUp from './components/PopUp';

// SECTION Context
import { UserContext } from './context/UserContext';

function App() {
	const [darkMode, setDarkMode] = useState({
		checkedA: true,
		checkedB: true,
	});

	const handleChange = (event) => {
		setDarkMode({
			...darkMode,
			[event.target.name]: event.target.checked,
		});

		// const welcomePage = document.querySelector('.enter-site');
		const welcomePage = document.querySelector('.welcome-page');
		const popUp = document.querySelector('#popup-parent');

		console.log(popUp);
		console.log(darkMode);

		// FIXME Needs to be done differently
		if (darkMode.checkedB === true) {
			welcomePage.classList.add('dark-mode');
			welcomePage.classList.remove('light-mode');
			popUp.classList.add('dark-mode');
			popUp.classList.remove('light-mode');
		} else {
			popUp.classList.add('light-mode');
			popUp.classList.remove('dark-mode');
			welcomePage.classList.add('light-mode');
			welcomePage.classList.remove('dark-mode');
		}

		const navBar = document.querySelector('nav');
		navBar.classList.toggle('dark-mode-nav');
	};

	return (
		<Router>
			<UserContext.Provider
				value={{ darkMode, setDarkMode, handleChange }}
			>
				<WelcomePage />
				<PopUp />
				{/* <Nav /> */}
				{/* <Route exact path='/' component={Home} /> */}
			</UserContext.Provider>
		</Router>
	);
}

export default App;
