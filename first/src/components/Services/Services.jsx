import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import './Services.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import MyCard from '../Cards/MyCard.jsx';
import photo1 from '../../imges/serviceIcon1_2.svg'
import photo2 from '../../imges/serviceIcon1_3.svg'
import photo3 from '../../imges/serviceIcon1_4.svg'
import photo4 from '../../imges/serviceIcon1_1.svg'




function Services() {
    return (
        <>
            <section className='section-ser'>
                <div className='div1'>
                    <HiOutlineArrowLongLeft />
                    <span>OUR SERVICES</span>
                    <HiOutlineArrowLongRight />
                </div>
                <h2>Elevating Businesses With IT Ingenuity</h2>
                <div className='arrows'>
                    <IoArrowBack className='arrow1' />
                    <FaArrowAltCircleRight className='arrow2' />
                </div>
                <div className='div-card1'>
                    <MyCard title={"Woo Commerce"} photo={photo1} classNam={"true"}/>
                    <MyCard title={"CRM Solutions"} photo={photo2} classNam={"true"}/>
                    <MyCard title={"Web Design"} photo={photo3} />
                    <MyCard title={"Data Guard Sentinel"} photo={photo4} classNam={"true"}/>
                </div>
            </section>
        </>
    );
}
export default Services;