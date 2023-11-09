import './Specials.css';
import saladImage from '../images/salad.jpeg';
import bruschettaImage from '../images/bruschetta.png';
import dessertImage from '../images/dessert.png';


const Specials = () => {

    const specialties = [{
        name: 'Greek Salad',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: saladImage,
        price: '$20'
    },
    {
        name: 'Bruchetta',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: bruschettaImage,
        price: '$30'
    },
    {
        name: 'Lemon Desert',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: dessertImage,
        price: '$10'
    },
    {
        name: 'Lemon Desert',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: dessertImage,
        price: '$10'
    }];

    return <div className='specials'> 
        <h2>Specials</h2>
        <div className='specials-cards'>
        { specialties.map( (item, index) => (
                <div className='special-card' key={index}>
                    <img src={item.image} alt=""></img>
                    <div className='card-description'>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>

                        <a href='/'>Order online here for {item.price}</a>
                    </div>
                </div>
            ))}
       </div>
    </div>
}

export default Specials;