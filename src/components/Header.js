import Button from './Button';

const Header = ({onAdd}) => {
    return (
        <header className="header">
            <h1>Todo</h1>
            <Button onClick={onAdd} />
        </header>
    )
}

export default Header;