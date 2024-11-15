
import './Ready.css'
import Vid from '../../imges/video.webp'
import { MdPermPhoneMsg } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

function Ready() {
    return (
        <>
            <section >
                <div className='ready'>
                    <div className='chil1'>
                        <div className='DIV'>
                            <div className='div-ICON'>
                                <div className='ICON'><MdPermPhoneMsg /></div>
                                <div>
                                    <p>CallUs 7/24</p>
                                    <p>+208-555-0112</p>
                                </div>
                            </div>
                            <div className='LINE'></div>
                            <div className='div-ICON'>
                                <div className='ICON'><MdAttachEmail /></div>
                                <div>
                                    <p>Make a Qute</p>
                                    <p>Infotech@gmail.com</p>
                                </div>
                            </div>
                            <div className='LINE'></div>
                            <div className='div-ICON'>
                                <div className='ICON'><IoLocation /></div>
                                <div>
                                    <p>Location</p>
                                    <p>4517 Washington ave.</p>
                                </div>
                            </div>
                        </div>
                        <div className='IMG'>
                            <img src={Vid} />
                        </div>
                    </div>
                    <div className='chil2'>
                        <h2>Reday to Get started?</h2>
                        <p>Nullam varius, erat quis icaulis dictum, eros urna varius eros, ut blandit felis odio in turpis.
                            Quisque rhoncus , eros in auctor ultrices,
                        </p>
                        <form>
                            <div className='Base-input'>
                                <div>
                                    <label>Your Name*</label>
                                    <input type='text'></input>
                                </div>
                                <div>
                                    <label>Your Email*</label>
                                    <input type="mail"></input>
                                </div>
                            </div>
                            <div className='Text'>
                                <label>Write Message*</label>
                                <input type='text'></input>
                            </div>
                            <button>Send Message <HiOutlineArrowLongRight /> </button>
                        </form>
                    </div>
                </div>

                <div className='chil3'>
                    <iframe src="https://maps.app.goo.gl/g1zkGV4pe5nArJwSA" width="100%" height="400px" />
                </div>
            </section>
        </>
    );
}

export default Ready;