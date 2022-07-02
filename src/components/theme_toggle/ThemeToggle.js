import React from 'react';
import { ToggleWrapper } from './ThemeToggle.styles';
import { useSpring, useTransition, animated } from 'react-spring';
import { LightModeIcon, DarkModeIcon } from './ThemeToggle.styles';

const ThemeToggle = ({ theme, themeToggler }) => {
	const transitions = useTransition(theme, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		config: { duration: 500 },
	});

	return (
		<ToggleWrapper>
			{transitions((style, theme) => {
				return theme === 'light' ? (
					<LightModeIcon
						style={style}
						onClick={themeToggler}
					/>
				) : (
					<DarkModeIcon
						style={style}
						onClick={themeToggler}
					/>
				);
			})}
		</ToggleWrapper>
	);
};

export default ThemeToggle;
