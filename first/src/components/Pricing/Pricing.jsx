import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import './Pricing.css'
import imges from '../../imges/pricingIcon1_2.svg'
import imges2 from '../../imges/pricingShape1_2.webp'
import Card3 from '../Card3/Card3';
import img3 from '../../imges/pricingShape1_1.webp'


function Pricing() {
    return (
        <>
            <section className='Section'>
                <div className='Basic'>
                    <div className='Div1'>
                        <HiOutlineArrowLongLeft />
                        <span className="Span">OURPRICING</span>
                        <HiOutlineArrowLongRight />
                    </div>
                    <h2>Our Awesome Pricing Plans</h2>
                    <div className='Div'>
                        <div className='But'>
                            <button>Monthly</button>
                            <button>Yearly</button>
                        </div>
                        <div className='Butt2'>
                            <img src={imges} />
                            <span>Save 25%</span>
                        </div>
                    </div>
                </div>
                <div className='img2'><img src={imges2} /> </div>
                <div className='sum-dev'>
                    <Card3 />
                    <Card3 />
                    <Card3 />
                </div>
                <div className='img3'>
                    <img src={img3} />
                </div>
            </section>
        </>
    );
}

export default Pricing;