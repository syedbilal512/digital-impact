import React from "react";
import './about.css'
import Aboutus1 from '../assets/aboutus1.jpg'
import Aboutus2 from '../assets/aboutus2.jpg'
import Aboutus3 from '../assets/aboutus3.jpg'
import Aboutus4 from '../assets/aboutus4.jpg'
import Aboutus5 from '../assets/aboutus5.jpg'
import Aboutus6 from '../assets/aboutus6.jpg'

const About = () => {
    return(
        <>
        <div className="indus">
            <h1>Industries We <br /><span>Work With</span></h1>
            <p>We work as a technology partner for various industries <br />Our expertise can be applied to the specific demands <br />and nuances in your industry</p>
        </div>
        <div className="indus-img-row1">
            <div>
                <img src={Aboutus1} alt="" height={140} />
                <h3>REAL ESTATE</h3>
            </div>
            <div>
                <img src={Aboutus2} alt="" height={140} />
                <h3>Education</h3>
            </div>
            <div>
                <img src={Aboutus3} alt="" height={140} />
                <h3>COMMERCE</h3>
            </div>
        </div>

        <div className="indus-img-row2">
            <div>
                <img src={Aboutus4} alt="" height={140} />
                <h3>HOSPITALITY</h3>
            </div>
            <div>
                <img src={Aboutus5} alt="" height={140} />
                <h3>HEALTHCARE</h3>
            </div>
            <div>
                <img src={Aboutus6} alt="" height={140} />
                <h3>FINTECH</h3>
            </div>
        </div>
        <div>
            <h1 className="indus-text-top-heading">EVERYTHING YOU NEED TO KNOW ABOUT</h1>
        </div>

        <div className="indus-text">
            <h1 className="indus-text-heading">THE DIGITAL IMPACTS</h1>
            <p>The <span className="bold">Digital Impacts</span> create a perfect company for its customers. <span className="bold">Digital Impacts</span> offers the best services to ensure your business thrives online. Because we partner with our clients with a team of professionals, we can to provide the best on our side. We strive to be leaders in digital marketing services worldwide by revolutionizing the industry and setting new standards of professionalism and success.</p>
            <h1 className="indus-text-heading">OUR VISION</h1>
            <p>We strive to be leaders in digital marketing services across the world by revolutionizing the industry and setting new standards of professionalism and success. Our vision is to become a top agency offering online marketing strategies, digital sales solutions, and internet brand management in the international business sphere.</p>
            <h1 className="indus-text-heading">OUR MISSION</h1>
            <p>Our mission is to partner with customers for their success as we create diverse client base including companies and individuals functioning in many different fields and economies. We will be best in providing consistently successful, unique, and forward-thinking digital marketing solutions that take into account the individual requirements and unique demands of each client.</p>
        </div>
        </>
    )
}
export default About;