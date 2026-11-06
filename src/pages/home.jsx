import React from "react";
import './home.css'
import The_Digital_Icon from '../assets/the_digital_main1.jpg'

const Home = ()=>{
    return(
        <>
        <main className="main1">
            <div className="img">
                <img src={The_Digital_Icon} alt="" height={500}/>
            </div>
            <div className="sdww-p">
                <h1 className="services">We are full Services</h1>
                <h1 className="digital">Digital Marketing Agency</h1>
                <h3 className="welcome">Welcome to the Digital Impacts</h3>
                <hr />
                <p className="we_partner">We partner with our clients with a team of professionals, we are able to provide <br />the best on our side. We strive to be leaders in digital marketing services worldwide <br />by revolutionizing the industry and setting new standards of professionalism and success.</p>
                <div className="btn-wrapper">
                <button>Message Us Now</button>
                </div>
            </div>
        </main>
        </>
    )
}
export default Home;