import './index.css'
import fb from '../../images/facebook.png'
import li from '../../images/linkedin.png'
import insta from '../../images/instagram-logo.png'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            Planetry
        </div>
        
        <div className="nav-links">
            <ul>
                <li> <img src={fb} alt=""/> </li>
                <li> <img src={li} alt=""/> </li>
                <li> <img src={insta} alt=""/> </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
