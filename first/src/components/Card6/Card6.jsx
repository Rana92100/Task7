import './Card6.css'
import { FaShareAltSquare } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Card6({ photo, H5, des }) {
    return (
        <>
            <div className='Card6'>
                <img src={photo} />
                <div>
                    <h5>{H5}</h5>
                    <span>{des}</span>
                </div>
            </div>
            <div className='base-shar'>
                <FaShareAltSquare className='Shar' />
            </div>
        </>
    );
}

export default Card6;