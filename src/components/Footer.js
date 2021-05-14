import {Link, useLocation} from 'react-router-dom';

const Footer = ({toggleTheme}) => {
    const location = useLocation();

    return (
        <footer className="footer">
            {location.pathname === '/' && <Link to='/about'>About this app</Link>} | <span className="toggle-theme" onClick={toggleTheme}>Toggle theme</span>
        </footer>
    )
}

export default Footer;