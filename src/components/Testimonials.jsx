import './Testimonials.css';
import userImage from '../images/user1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
  } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
    const testimonials = [{
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: userImage,
        user: 'John Doe'
    },
    {
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: userImage,
        user: 'John Doe'
    },
    {
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: userImage,
        user: 'John Doe'
    },
    {
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: userImage,
        user: 'John Doe'
    }];


    return <div className='testimonials'>
        <h2>Testimonials</h2>
        <div className='testimonials-cards'>
        { testimonials.map( (item) => (
                <div className='testimonials-card'>
                    <span className='testimonials-rating'>
                        <FontAwesomeIcon icon={faStar} color='gold'/>
                        <FontAwesomeIcon icon={faStar} color='gold'/>
                        <FontAwesomeIcon icon={faStar} color='gold'/>
                        <FontAwesomeIcon icon={faStar} color='gold'/>
                        <FontAwesomeIcon icon={faStar} color='gold'/>
                    </span>
                    <div className='user-description'>
                        <img src={item.image} ></img>
                        <h4>{item.user}</h4>
                    </div>
                    <p>{item.review}</p>
                </div>
            ))}
       </div>
    </div>
}

export default Testimonials;