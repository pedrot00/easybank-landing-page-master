import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import './Navbar.css'

function Navbar(){
    return(
       <Router>
        <nav className='navbar'>
            <img src ={logo} className='logo'/>
            <ul>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/'>About</Link></li>
                <li><Link to ='/'>Contact</Link></li>
                <li><Link to ='/'>Blog</Link></li>
                <li><Link to ='/'>Careers</Link></li>
            </ul>
            <button className='inviteButton'>Request Invite</button>
        </nav>
       </Router>
    )
}
export default Navbar;