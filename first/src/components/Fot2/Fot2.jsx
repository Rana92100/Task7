import { IoLocation } from 'react-icons/io5';
import './Fot2.css'
import { MdAttachEmail, MdPermPhoneMsg } from 'react-icons/md';

function Fot2() {
    return (
        <>
            <section className='Fot2'>
                <div className='Base-final'>
                    <div className='ICOn'><IoLocation /> </div>
                    <div>
                        <p>Address</p>
                        <p>4648 Rocky Road Philadelphia PA</p>
                    </div>
                </div>
                <div className='liN'></div>
                <div className='Base-final'>
                    <div className='ICOn'><MdAttachEmail />
                    </div>
                    <div>
                    <p>Address</p>
                    <p>4648 Rocky Road Philadelphia PA</p>
                    </div>
                </div>
                <div className='liN'></div>
                <div className='Base-final'>
                    <div className='ICOn'><MdPermPhoneMsg /> </div>
                    <div>
                        <p>Address</p>
                        <p>4648 Rocky Road Philadelphia PA</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Fot2;