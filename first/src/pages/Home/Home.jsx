import './Home.css'
import Navbarr from '../../components/navbar/Navbar.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Photo from '../../components/Photos/Photo.jsx';
import Services from '../../components/Services/Services.jsx';
import Dept from '../../components/Dept/Dept.jsx';
import Pricing from '../../components/Pricing/Pricing.jsx';
import Client from '../../components/Client/Client.jsx';
import Featured from '../../components/Featured/Featured.jsx';
import Footee from '../../components/Footee/Footee.jsx';
import Foot1 from '../../components/Foot1/Foot1.jsx';

function Home() {
    return (
        <>
            <div>
                <Navbarr />
                <Hero />
                <Photo />
                <Services />
                <Dept />
                <Pricing />
                <Client />
                <Featured />
                <Foot1/>
                <Footee />
            </div>
            </>
            );
}

            export default Home;