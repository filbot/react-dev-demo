import {useTheme} from './ThemeContext';

const Button = () => {
    const darkTheme = useTheme();

    return (
        <button className={darkTheme ? "dark" : ""}>+</button>
    )
}

export default Button;