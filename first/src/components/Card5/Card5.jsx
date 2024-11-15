

import {HiOutlineArrowLongRight } from 'react-icons/hi2';
import './Card.css'

// eslint-disable-next-line no-unused-vars, react/prop-types
function Card5({photo1,photo2,text1,text2,H5,Z}){
    return(
        <>
            <div className={Z ? "Father2" : "Father22"}>
                <div><img src={photo1} className='imag1'/></div>
                <div className='Child'>
                    <div className='Button-2'>
                        <button className='btn'>{text1}</button>
                        <button  className='btn1'>{text2}</button>
                    </div>
                    <h5 className='H5'>{H5}</h5>
                    <div className='Lin'></div>
                    <div className='Child2'>
                        <div className='Left-div'>
                            <img src={photo2}/>
                            <div>
                                <h5>Admin</h5>
                                <span>Co,Founder</span>
                            </div>
                        </div>
                        <button> <HiOutlineArrowLongRight /> </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card5;