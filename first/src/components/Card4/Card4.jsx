
import { FaStar } from 'react-icons/fa';
import './Card4.css'
import { FiStar } from "react-icons/fi";
import { RiDoubleQuotesR } from 'react-icons/ri';

// eslint-disable-next-line react/prop-types
function Card4({photo,des,H,Span,classNam}) {
    return (
        <>
            <div className={classNam ? "Father" : "Father1"}>
                <FaStar className='star' />
                <FaStar className='star' />
                <FaStar className='star' />
                <FaStar className='star' />
                <FiStar className='star'/>
                <div>{des}</div>
                <div className='dis-icon'>
                    <div className='div-card'>
                        <div><img src={photo}/></div>
                        <div>
                            <h5>{H}</h5>
                            <span>{Span}</span>
                        </div>
                    </div>
                    <div><RiDoubleQuotesR className='cout'/></div>
                </div>
            </div>
        </>
    );
}

export default Card4;