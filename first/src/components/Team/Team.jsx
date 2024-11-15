import Card6 from '../Card6/Card6';
import './Team.css'
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import ph1 from '../../imges/04.webp'
import ph2 from '../../imges/05.webp'
import ph3 from '../../imges/06.webp'
import ph4 from '../../imges/07.webp'
import enva from '../../imges/photo_2024-11-13_21-24-59.jpg'

function Team() {
    return (
        <>
            <section className='base-team'>
                <div className='child1-team'>
                    <div>
                        <div className='Chil1-team'>
                            <HiOutlineArrowLongLeft />
                            <span>TEAM MEMBERS</span>
                            <HiOutlineArrowLongRight />
                        </div>
                        <h2>Our Dedicated Team Members</h2>
                    </div>
                    <button>All Members  <HiOutlineArrowLongRight /></button>
                </div>
                <div className='sum-card6'>
                    <Card6 photo={ph1} H5={"Masirul Islam"} des={"Web Designer"} />
                    <Card6 photo={ph2} H5={"Jessica Mardol"} des={"cyber Expert"} />
                    <Card6 photo={ph3} H5={"Arnold Hemingway"} des={"Web Expert"} />
                    <Card6 photo={ph4} H5={"Shikon Haque"} des={"Data Analyst"} />
                </div>
                <div className='sum-line'>
                    <div className='card6-line6'></div>
                    <div>1K + Brands Trust Us</div>
                    <div className='card6-line6'></div>
                </div>
                <div className='img-card6'>
                    <img src={enva} className='gray'/>
                    <img src={enva} className='gray'/>
                    <img src={enva}/>
                    <img src={enva} className='gray'/>
                    <img src={enva} className='gray'/>
                </div>
            </section>
        </>
    );
}

export default Team;