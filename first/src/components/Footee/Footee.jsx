/* eslint-disable react/jsx-no-undef */
import './Footee.css'
import img9 from '../../imges/logo2.svg'
import { FaFacebookF, FaPhoneFlip, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import foot1 from '../../imges/footerThumb1_1.webp'
import foot2 from '../../imges/footerThumb1_1.webp'
import { IoMdMail } from 'react-icons/io';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

// eslint-disable-next-line react/prop-types
function Footee({ y }) {
    return (
        <>
            <section className={y ? 'Footer' : 'Foot'}>
                <div className='child-foot'>
                    <div className='quarter'>
                        <img src={img9} />
                        <p className='P'>ExtechIY is a Phasellus ultricies aliquam volupat ullamcorper
                            laoreet neque, a lacinia curabitur lacinia mollis
                        </p>
                        <div className='divv-icon'>
                            <div className='icon-1'>  <FaFacebookF />  </div>
                            <div className='icon-1'>  <FaTwitter />    </div>
                            <div className='icon-1'>   <FaYoutube /> </div>
                            <div className='icon-1'>   <IoLogoInstagram /> </div>
                        </div>
                    </div>
                    <div className='quarter quarter2'>
                        <h5>Quick Links</h5>
                        <div className='small-line'></div>
                        <ul>
                            <li>
                                <Link to={'/about'}> <FaAngleDoubleRight /> Extech About</Link>
                            </li>
                            <li>
                                <Link to={'/'}> <FaAngleDoubleRight /> Our Services</Link>
                            </li>
                            <li>
                                <Link to={'/'}> <FaAngleDoubleRight /> Our Blug </Link>
                            </li>
                            <li>
                                <Link to={'/about'}> <FaAngleDoubleRight /> FAQS </Link>
                            </li>
                            <li>
                                <Link to={'/contact'}> <FaAngleDoubleRight /> Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='quarter'>
                        <h5>Recent Posts</h5>
                        <div className='small-line'></div>
                        <div className='foo'>
                            <img src={foot1} />
                            <div>
                                <p><SlCalender /> 15th April,2024 </p>
                                <h6>Top 5 Most Famous</h6>
                                <h6>Technology Trend In 2024</h6>
                            </div>
                        </div>
                        <div className='foo'>
                            <img src={foot2} />
                            <div>
                                <p><SlCalender /> 20th June,2024 </p>
                                <h6>The Surfing Man Will Blow</h6>
                                <h6>Your Mind</h6>
                            </div>
                        </div>
                    </div>
                    <div className='quarter'>
                        <h5>Contact Us</h5>
                        <div className='small-line'></div>
                        <p><IoMdMail /> info@example.com</p>
                        <p><FaPhoneFlip /> +208-6666-0112 </p>
                        <div className='finally'>
                            <input type='mail' placeholder='your email address' />
                            <button>
                                <HiOutlineArrowLongRight className='icon' />
                            </button>
                        </div>
                        <div className='cheek'>
                            <input type='checkbox' />
                            <p>I agree to the <a>Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
                <div className='child2-footer'>
                    <p>&copy; All Copyright 2024 by Extech</p>
                    <div>
                        <p>Terams & Condition</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footee;