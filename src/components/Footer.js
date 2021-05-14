import {Link, useLocation} from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    return (
        <footer className="footer">
            {location.pathname === '/' && <Link to='/about'>About this app</Link>} | Toggle theme
        </footer>
    )
}

export default Footer;