import Button from './Button';
import {useLocation} from 'react-router-dom';
import {useTheme} from './ThemeContext';

const Header = ({onAdd}) => {
    const location = useLocation();
    const darkTheme = useTheme();

    return (
        <header className={darkTheme ? "header dark" : "header"}>
            <div className="title">TODO</div>
            {location.pathname === '/' && <Button onClick={onAdd} />}
        </header>
    )
}

export default Header;