import { Link } from 'react-router-dom';

export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className='navbar-title'>Weather</Link>
        <ul>
            <li>
                <Link to="/bored" className='navbar-link'>Feeling bored?</Link>
            </li>
        </ul>
    </nav>
}
