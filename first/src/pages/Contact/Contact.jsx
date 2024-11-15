
import Navbarr from '../../components/navbar/Navbar';
import './Contact.css'
import img6 from '../../imges/plane.webp'
import Hero2 from '../../components/Hero2/Hero2';
import Ready from '../../components/Ready/Ready';
import Footee from '../../components/Footee/Footee';
import Fot2 from '../../components/Fot2/Fot2';


function Contact(){
    return(
        <>
                <Navbarr phot={img6} x={true}/>
                <Hero2 H={"Contact Us"} to={"Contact Us"}/>
                <Ready/>
                <Fot2/>
                <Footee y={true}/>
        </>
    );
}

export default Contact;