import {useLocation} from 'react-router-dom';
import {useTheme} from './ThemeContext';
import Button from './Button'

const Header = ({toggleForm}) => {
    const location = useLocation();
    const darkTheme = useTheme();

    return (
        <header className={darkTheme ? "header dark" : "header"}>
            <div className="title">TODO</div>
            {location.pathname === '/' && <Button toggleForm={toggleForm} />}
        </header>
    )
}

export default Header;