import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navBar">            
        <button className='homeButton'><Link to="/">Carlo's Portfolio</Link></button>      
            <div className="navBar-content">
                <ul>
                     <div className='navBar-links'>
                        <li><Link to="/AboutMe"> About Me </Link></li>
                        <li><Link to="/Contact"> Contact Me </Link></li>
                        <li><Link to="/Projects"> View Projects </Link></li>
                      </div>
                 </ul>            
             </div>
        </nav>    
    );
}

export default Navbar;