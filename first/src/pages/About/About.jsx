import './About.css'
import img6 from '../../imges/plane.webp'
import Navbarr from '../../components/navbar/Navbar';
import Hero2 from '../../components/Hero2/Hero2';
import UL from '../../components/UL/UL';
import Team from '../../components/Team/Team';
import Footee from '../../components/Footee/Footee';
import Fot2 from '../../components/Fot2/Fot2';


function About(){
    return(
        <>
        <Navbarr phot={img6} x={true}/>
        <Hero2 H={"About Us"} to={"About Us"}/>
        <UL/>
        <Team/>
        <Fot2/>
        <Footee y={true}/>
        </>
    );
}
export default About;