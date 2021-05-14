import Button from './Button';
import {useLocation} from 'react-router-dom';

const Header = ({onAdd}) => {
    const location = useLocation();

    return (
        <header className="header">
            <h1>Todo</h1>
            {location.pathname === '/' && <Button onClick={onAdd} />}
        </header>
    )
}

export default Header;