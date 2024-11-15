import './UL.css'
import IMg from '../../imges/asterisk.svg'
function UL() {
    return (
        <>
            <section className='sum-div'>
                <div className='yes'><img src={IMg} /></div>
                <div className='TEXT yws'>Cyber Security</div>
                <div className='yes '><img src={IMg} /></div>
                <div className='TEXT no'>IT Solution</div>
                <div className='no'><img src={IMg}/></div>
                <div className='TEXT no'>Technology</div>
                <div className='no'><img src={IMg}/></div>
                <div className='TEXT no'>Data Security</div>
            </section>
        </>
    );
}

export default UL;