import { createContext, useState } from 'react';
import { Child1 } from './child_1';
import { Child2 } from './child_2';


const ThemeContext = createContext({
                        backgroundColor: '',
                        color: '',
                        padding: '',
                        margin: ''});
export const Parent = () => {
    const [darkTheme, setDarkTheme] = useState(true);
    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    };

    const theme = {
		backgroundColor: darkTheme ? '#333' : '#CCC',
		color: darkTheme ? 'white' : '#333',
		padding: '2rem',
		margin: '2rem',
	};

    return (
        <div className='section'>
            <h2>useContext</h2>            
            <button onClick={toggleTheme}>Toggle Theme</button>
            <ThemeContext.Provider value={theme}>
              <Child1 />
              <Child2 />
            </ThemeContext.Provider>
        </div>

    )
}
export default ThemeContext;