import {Link} from 'react-router-dom';

const About = () => {
    return (
        <>
            <h1>This is a todo app demo, there are many like it, but this one is mine.</h1>
            <Link to='/'>⇠ Go back</Link>
        </>
    )
}

export default About;