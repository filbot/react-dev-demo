import {Link} from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className="about-text">This is a todo app demo, there are many like it, but this one is mine.</div>
            <Link to='/'>⇠ Go back</Link>
        </>
    )
}

export default About;