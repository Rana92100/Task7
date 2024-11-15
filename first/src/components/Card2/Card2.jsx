import './Card2.css'

// eslint-disable-next-line react/prop-types
function Card2({Num , title}){
    return(
        <>
        <div className='Base'>
            <div className='Num'>{Num}</div>
            <h5>{title}</h5>
            <div>
                There are many variations of passages of Lorem Ipsum available,
                but the majoaity have suffered alteration.
            </div>
        </div>
        </>
    );
}

export default Card2;