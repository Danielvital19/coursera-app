import './Nav.css';
import logo from '../images/Logo.svg';

const Nav = () => {
    return <div className='nav'> 
        <nav>
            <ul>
                <li>
                    <img src={logo} alt="Little Lemon Logo"/>
                </li>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li className='optional'>
                    <a href='/'>Menu</a>
                </li>
                <li>
                    <a href='/booking'>Reservation</a>
                </li>
                <li className='optional'>
                    <a href='/'>Order Online</a>
                </li>
                <li className='optional'>
                    <a href='/'>Login</a>
                </li>
            </ul>
        </nav>
    </div>
}

export default Nav;