import {Link, useLocation} from 'react-router-dom';
import { useThemeUpdate } from './ThemeContext';

const Footer = () => {
    const location = useLocation();
    const toggleTheme = useThemeUpdate();

    return (
        <footer className="footer">
            {location.pathname === '/' && <Link to='/about'>About this app</Link>} <span className="toggle-theme" onClick={toggleTheme}>Toggle theme</span>
        </footer>
    )
}

export default Footer;