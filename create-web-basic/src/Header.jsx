import './assets/css/Header.css';

function Header() {
    return (
        <header>
            <h1>My Web App</h1>

            {/* thanh điều hướng */}
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header