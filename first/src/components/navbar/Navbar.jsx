import './Navbar.css'
import photo from "../../imges/logo.svg"
import { CiSearch } from 'react-icons/ci';
import { SlBasket } from 'react-icons/sl';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Navbarr({ phot, x }) {
    // eslint-disable-next-line no-unused-vars
    const [toglle, setToglle] = useState(true);
    return (
        <>
            <nav className={x ? 'your-nav' : 'My-nav'}>
                <div>
                    <img src={phot} className='plan' />
                    <img src={photo} className="logo"></img>
                </div>
                <div className={!toglle ? " Ul-nav" : "Ul-nav2"}>
                    <ul >
                        <li>
                            <Link to={'/'}>Home <FaAngleDown />
                            </Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Services <FaAngleDown />
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}>Bages <FaAngleDown />
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}>Blog <FaAngleDown />
                            </Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                    {toglle && <button onClick={() => setToglle(true)}>Close</button>}
                </div>
                <div className='last-nav'>
                    <div className="search-icon"><CiSearch /></div>
                    <div className="basket-icon"><SlBasket /></div>
                    <button className='A'>GET A QOUTE  <FaArrowRightLong /></button>
                </div>
                <div className='new-section'>
                    <button onClick={() => setToglle(false)}> <FaAlignJustify /> </button>
                </div>
            </nav>
        </>
    );
}
export default Navbarr;