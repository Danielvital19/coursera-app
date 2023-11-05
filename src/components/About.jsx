import './About.css';
import aboutImage from '../images/about.png';


const About = () => {
    return <div className='about'> 
          <div className='hero-item'>
            <h1>Little Lemon</h1>
            <span> Chicago</span>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque at porta nisi. Aliquam nec convallis tellus, quis semper sapien. Morbi sed mollis odio,
                vitae egestas justo. Suspendisse et mauris nulla. Praesent finibus vitae lectus id sollicitudin.
                Quisque aliquet pellentesque condimentum. Ut finibus sodales nunc ac gravida. Integer eget porta lacus. 
            </p>
        </div>
        <div className='img'>
            <img src={aboutImage} alt="Little Lemon Logo" />
        </div>
    </div>
}

export default About;