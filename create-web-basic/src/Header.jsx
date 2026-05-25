import { Link } from 'react-router-dom';
import './assets/css/Header.css';

function Header() {
    return (
        <header>
            <h1>My Web App</h1>

            {/* thanh điều hướng */}
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>  {/* Sử dụng Link để điều hướng đến trang About mà không cần tải lại trang */}
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header