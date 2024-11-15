import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import './Client.css'
import imges5 from '../../imges/ctaThumb1_1.webp'
import Card4 from '../Card4/Card4';
import img5 from "../../imges/testiThumb3_1.webp"
import img6 from "../../imges/testiThumb3_2.webp"
import img7 from "../../imges/testiThumb3_3.webp"

function Client() {
    return (
        <>
            <div className='Clien'>
                <div className='Basec'>
                    <div>
                        <img src={imges5} />
                    </div>
                    <div className='Center'>
                        <HiOutlineArrowLongLeft />
                        <span className='Con-span'>CONTACTS</span>
                        <HiOutlineArrowLongRight />
                        <h3>24/7 Expert Hosting Support Our Customers Love</h3>
                    </div>
                    <div>
                        <button>TALK TO SPECIALIST  <HiOutlineArrowLongRight /></button>
                    </div>
                </div>
                <section className='Section3'>
                    <div className='Center2'>
                        <div>
                            <HiOutlineArrowLongLeft />
                            <span className='Con-span'>TESTIMONIALS</span>
                            <HiOutlineArrowLongRight />
                        </div>
                        <h3>Our LAtest Client Feedback</h3>
                    </div>
                    <div className='Card-4'>
                        <Card4 photo={img5} des={"Extech hos completely transformed our process.the user friendly interface and powerful features maintaining our website. Highly recommended for all!"} H={"Kristin Watson"} Span={"Web Designer"} />
                        <Card4 photo={img6} des={"I've been using Etech for several months now, and I'm extermely impressed with the ease of customization it offers, The wide range of templates."} H={"Theresa Webb "} Span={" Tech enthusiast"} classNam={true}/>
                        <Card4 photo={img7} des={"Extech offers exceptionalvalue for money. The comprehensive suite of tools and seamiess integration with varius plugins and services make it a for all"} H={"Ronald Richards "} Span={" Web Enterprenuor"} />
                    </div>
                    <div className='line3'>
                        <div className='line-line'></div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default Client;