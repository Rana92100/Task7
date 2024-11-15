import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import './Card3.css'
import imge from '../../imges/pricingIcon1_1.svg'
import { GiCheckMark } from 'react-icons/gi';
import { IoCloseSharp } from "react-icons/io5";


function Card3() {
    return (
        <>
            <div className='Base1'>
                <div className='Carde'>
                    <div>
                        <h5>Regular Plans</h5>
                        <span className='Span2'>$49</span>
                        <span>/Month</span>
                    </div>
                    <div>
                        <img src={imge}/>
                    </div>
                </div>
                <ul className='Ul'>
                    <li> <GiCheckMark/> !! GB SSD Storage</li>
                    <li> <GiCheckMark/> Weekly Backups</li>
                    <li> <GiCheckMark/>Unlimited Free SSL</li>
                    <li> <GiCheckMark/>24/7 System Monitoring</li>
                    <li> <GiCheckMark/> Free Domain ($9.99 Value)</li>
                    <li> <IoCloseSharp className='xx'/> Frame 164236</li>
                    <li> <IoCloseSharp className='xx'/> 20+Payment Methods</li>
                </ul>
                <button className='Button2'>GET STARTED NOW <HiOutlineArrowLongRight/></button>
            </div>

        </>
    );
}
export default Card3;