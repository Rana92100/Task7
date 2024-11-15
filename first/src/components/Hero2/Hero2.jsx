import './Hero2.css'
import { FaAngleRight } from "react-icons/fa";
import phot1 from '../../imges/element.webp'
import phot2 from '../../imges/line-element.webp'
// eslint-disable-next-line react/prop-types
function Hero2({H,to}){
    return(
        <>
            <section className='Contact'>
                <h2>{H}</h2>
                <span>Home <FaAngleRight /> {to}</span>
                <img src={phot1} className='phot1'/>
                <img src={phot2} className='phot2'/>
            </section>
        </>
    );
}

export default Hero2;