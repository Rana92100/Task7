
import './Hero.css'
import { CiWavePulse1 } from 'react-icons/ci';
import { GiCheckMark } from 'react-icons/gi';
import { FaArrowRightLong, FaStar } from 'react-icons/fa6';
import '../navbar/Navbar.css'
import photo2 from '../../imges/profileShape1_1.webp'
import photo3 from "../../imges/heroShape1_3.webp"
import photo4 from '../../imges/heroThumb1_1.webp'
import photo5 from '../../imges/heroShape1_1.webp'
import { TiLocationArrowOutline } from "react-icons/ti";
import { TfiLocationArrow } from "react-icons/tfi";
function Hero() {
    return (
        <>
            <section className='hero'>
                <div className='hero-div'>
                    <div className='half-hero'>
                        <div className='hero-div2'>
                            <div className='wave'><CiWavePulse1 /></div>
                            Everything You Need To Create A Website
                        </div>
                        <h1>Business Innovation With IT Services Expertise</h1>
                        <div className='some-div'>
                            <div><GiCheckMark />Deployment and Support</div>
                            <div><GiCheckMark />Flexibility and Adaptability</div>
                            <div><GiCheckMark />Discovery and Analysis</div>
                            <div><GiCheckMark />Competitive Advantage</div>
                        </div>
                        <button>GET STARTED <FaArrowRightLong /></button>
                        <div className='box'>
                            <div className='box-div'>
                                <FaStar className='star1' /><span>Trustipilot</span>
                                <div className='photos'>
                                    <img src={photo2} />
                                    <div>
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <p>450+reviews</p>
                                    </div>
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='linE2'></div>
                            <div className='box-div'>
                                <span>Google</span>
                                <div className='photos'>
                                    <img src={photo2} />
                                    <div>
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <p>450+reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='img-circle'>
                            <img src={photo3} />
                        </div>
                    </div>
                    <div className='hero-half2'>
                        <div className='after-img'>
                            <TiLocationArrowOutline className='icon' />
                            <div>Solation</div>
                        </div>
                        <img src={photo4} className='img-1' />
                        <img src={photo5} className='img-2' />
                        <div className='befor-img'>
                            <TfiLocationArrow />
                            <div>Technology</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Hero;