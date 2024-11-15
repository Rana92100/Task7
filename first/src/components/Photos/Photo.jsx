import './Photo.css'
import img1 from '../../imges/brandLogo1_1.svg'
import img2 from '../../imges/brandLogo1_2.svg'
import img3 from '../../imges/brandLogo1_3.svg'
import img4 from '../../imges/brandLogo1_4.svg'
import img5 from '../../imges/brandLogo1_5.svg'
function Photo() {
    return (
        <>
            <section >
                <div className='Dives'>
                    <div><img src={img1} className='ImG1'/></div>
                    <div><img src={img2}  className='ImG1'/></div>
                    <div><img src={img3} className='ImG2' /></div>
                    <div><img src={img4}  className='ImG1'/></div>
                    <div><img src={img5}  className='ImG1'/></div>
                </div>
                <div className='line2'></div>
            </section>
        </>
    );
}
export default Photo