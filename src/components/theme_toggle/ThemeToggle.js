import React from 'react';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';
import { ToggleWrapper } from './ThemeToggle.styles';

const ThemeToggle = ({ theme, themeToggler }) => {
	return (
		<ToggleWrapper>
			{theme === 'light' ? (
				<MdDarkMode onClick={themeToggler} />
			) : (
				<MdOutlineDarkMode onClick={themeToggler} />
			)}
		</ToggleWrapper>
	);
};

export default ThemeToggle;
