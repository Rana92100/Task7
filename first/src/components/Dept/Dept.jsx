import './Dept.css'
import Card2 from '../Card2/Card2.jsx'
function Dept() {
    return (
        <>
            <div className="Video">
                <video src="https://youtu.be/tktoIB-SFH4" autoPlay controls className='Vid' />
            </div>
            <div className='Dept-div'>
                <div className='div2'>
                    <div className='divD'>
                        <Card2 Num={"01"} title={"Requirement"} />
                        <Card2 Num={"02"} title={"UI/UXDesign"} />
                        <Card2 Num={"03"} title={"Prototype"} />
                        <Card2 Num={"04"} title={"Development"} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Dept;