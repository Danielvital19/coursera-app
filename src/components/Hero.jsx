import './Hero.css';
import heroImage from '../images/chicago.jpg';

const Hero = () => {
    return <div className='hero'>
        <div className='hero-item'>
            <h1>Little Lemon</h1>
            <span> Chicago</span>
            <p> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <a href='/booking'> Reserve a table</a>
        </div>
        <div className='img'>
            <img src={heroImage} alt="Little Lemon Logo" />
        </div>
    </div>
}

export default Hero;