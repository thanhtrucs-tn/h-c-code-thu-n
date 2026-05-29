import ProfilePic from './assets/Profile.png';
import './assets/css/Card.css';

function Card () {
    return(
        <div className="card">
            <img className="card-img" src={ProfilePic} alt="Profile Pic" />
            <h2 className="card-title">Card Title</h2>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
            <button>Read More</button>
        </div>
    )
}

export default Card;
