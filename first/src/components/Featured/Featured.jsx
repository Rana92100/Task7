import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import './Featured.css'
import { IoArrowBack } from 'react-icons/io5';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Card5 from '../Card5/Card5';
import shap1 from '../../imges/blogThumb1_2.webp'
import shap2 from '../../imges/blogThumb1_3.webp'
import shap3 from '../../imges/blogThumb1_1.webp'
import profil1 from '../../imges/blogProfile1_2.webp'
import profil2 from '../../imges/blogProfile1_3.webp'
import profil3 from '../../imges/blogProfile1_1.webp'

function Featured() {
    return (
        <>
            <section className='Section4'>
                <div className='Div-sec'>
                    <div className='blog'>
                        <HiOutlineArrowLongLeft />
                        <span>BLUG & NEWS</span>
                        <HiOutlineArrowLongRight />
                    </div>
                    <h2>Featured News And Insights</h2>
                    <div className='arrowes'>
                        <IoArrowBack className='arrowe1' />
                        <FaArrowAltCircleRight className='arrowe2' />
                    </div>
                </div>
                <div className='Cards5'>
                    <Card5 photo1={shap1} photo2={profil1} text1={"Uncategorized"} text2={"MARCH14, 2024"} H5={"Best And Fastest Data Server Ever"} Z={true}/>
                    <Card5 photo1={shap2} photo2={profil2} text1={"Technology"} text2={"MARCH29, 2024"} H5={"Life Won't One Beast Air OVer Above All"} />
                    <Card5 photo1={shap3} photo2={profil3} text1={"Shared Hosting"} text2={"MARCH24, 2024"} H5={"Attentive Was Born In 2015 Help Sales Teams"} />
                </div>
            </section>
        </>
    );
}

export default Featured;