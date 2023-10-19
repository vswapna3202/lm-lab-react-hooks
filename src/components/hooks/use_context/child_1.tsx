import {useContext} from 'react';
import ThemeContext from "./parent";

export const Child1 = () => {
	const theme = useContext(ThemeContext);
	return <div style={theme}>Child 1</div>;
};
