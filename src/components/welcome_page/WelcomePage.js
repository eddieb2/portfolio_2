import { useSpring } from 'react-spring';
import {
	WelcomeWrapper,
	Reflection,
	TextWrapper,
	Border,
} from './WelcomePage.styles';
import { FaDoorOpen } from 'react-icons/fa';

const WelcomePage = () => {
	const enterAnimation = useSpring({
		// NOTE - left to right animation may look better
		to: { transform: 'translate(0,15rem)' },
		from: { transform: 'translate(0,-5.00rem) ' },
		config: { duration: 1250 }, // 1500
	});

	const fadeIn = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 1000,
		config: { duration: 3000 },
	});

	return (
		<WelcomeWrapper style={enterAnimation}>
			<TextWrapper>w e l c o m e</TextWrapper>
			<Reflection style={fadeIn}>w e l c o m e</Reflection>
			{/* <Border /> */}
			{/* <div>
				<FaDoorOpen />
			</div>
			<Reflection>
				<FaDoorOpen />
			</Reflection> */}
		</WelcomeWrapper>
	);
};

export default WelcomePage;
