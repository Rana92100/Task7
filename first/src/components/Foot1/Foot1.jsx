import './Foot1.css'
import FF from '../../imges/ctaThumb.webp'
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
function Foot1(){
    return(
        <>
            <section className='Foot1'>
                <img src={FF}/>
                <div>Stay Connected With Cutting Edge IT</div>
                <button>TALK TO A SPECIALIST <HiOutlineArrowLongRight/> </button>
            </section>
        </>
    );
}

export default Foot1;