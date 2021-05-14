import {useTheme} from './ThemeContext';

const Button = ({toggleForm}) => {
    const darkTheme = useTheme();

    return (
        <button className={darkTheme ? "dark" : ""} onClick={toggleForm}>+</button>
    )
}

export default Button;