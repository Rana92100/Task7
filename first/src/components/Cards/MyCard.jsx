/* eslint-disable react/prop-types */
import './MYCard.css'
import { FaAngleDoubleRight } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
function MyCard({title , photo , classNam}){
    return(
        <>
        <div className={classNam ? "A-card" : "card-dev"}>
            <div className='img-dev'> <img src= {photo}/></div>
            <h5>{title}</h5>
            <div>Collaboratively formulate principle capital. Progressively
                evolve user revolutionary hosting services.
            </div> 
            <button>Read more <FaAngleDoubleRight /></button>  
        </div>
        </>
    );
}
export default MyCard;