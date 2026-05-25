import React from 'react';
import './assets/css/footer.css';

function Footer() {
	return (
		<footer className="footer-bar">
			<div className="footer-content">
				<p className="footer-text">© 2026 My Website. All rights reserved.</p>
				<div className="footer-links">
					<a href="#" className="footer-link">Home</a>
					<a href="#" className="footer-link">About</a>
					<a href="#" className="footer-link">Contact</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
