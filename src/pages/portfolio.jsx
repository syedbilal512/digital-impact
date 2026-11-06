import React from "react";
import { Link } from "react-router-dom";
import './portfolio.css'
import Revive  from '../assets/Revive.jpg'
import Voeux from '../assets/Voeux.jpg'
import TheKingz from '../assets/TheKingz.jpg'
import Unifresh from '../assets/Unifresh.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const Portfolio = ()=> {
    return(
        <>
        <div className="domain-cards">
            <div className="domain-cards-black">
                <h1 className="top">10000+</h1>
                <h1>Domain Names <br />Registered</h1>
            </div>

            <div className="domain-cards-blue">
                <h1 className="top">90000+</h1>
                <h1>Websites Hosted</h1>
            </div>

            <div className="domain-cards-silver">
                <h1 className="top">45000+</h1>
                <h1>Customers</h1>
            </div>
        </div>

        <div className="project-write">
            <h1>Projects We've Deliverd</h1>
            <p>Over the past 10 years, we have designed and built a wide range of high-quality products from scratch. Our team has finished various web and mobile apps related to various spheres including e-learning, healthcare, e-commerce, advertising, augmented reality, action sports, finance and sharing economy.</p>
        </div>

        <div className="revive">
            <div className="revive-text">
                <p>INDUSTRY</p>
                <h1>REVIVE</h1>
                <p>Revive Beauty Salon & Institute</p>
                <p><FontAwesomeIcon className="revive-icon1" icon={faFilm}/> Web DEVELOPMENT</p>
                <p><FontAwesomeIcon className="revive-icon1" icon={faFilm}/> QUALITY ASSURANCE</p>
            </div>
            <div className="revive-img">
                <a href="https://revivesalon.pk/" target="_blank">
                    <img src={Revive} alt="" height={450} width={450}/>
                </a>
            </div>
        </div>

        <div className="voeux">
            <div className="voeux-img">
                <a href="https://voeuxcosmetics.com/" target="_blank">
                    <img src={Voeux} alt="" height={450} width={450}/>
                </a>
            </div>
            <div className="voeux-text">
                <p>INDUSTRY</p>
                <h1>Voeux</h1>
                <p>Natural Skin Care</p>
                <p><FontAwesomeIcon className="voeux-icon1" icon={faFilm}/> Web DEVELOPMENT</p>
                <p><FontAwesomeIcon className="voeux-icon1" icon={faFilm}/> QUALITY ASSURANCE</p>
            </div>
        </div>
        <div className="thekingz">
            <div className="thekingz-text">
                <p>INDUSTRY</p>
                <h1>KINGZ</h1>
                <p>Ecommerce Website</p>
                <p><FontAwesomeIcon className="thekingz-icon1" icon={faFilm}/> Web DEVELOPMENT</p>
                <p><FontAwesomeIcon className="thekingz-icon1" icon={faFilm}/> QUALITY ASSURANCE</p>
            </div>
            <div className="thekingz-img">
                <a href="https://www.kingz.com/" target="_blank">
                    <img src={TheKingz} alt="" height={450} width={450}/>
                </a>
            </div>
        </div>
        <div className="unifresh">
            <div className="unifresh-img">
                <a href="https://unifresh.com.au/" target="_blank">
                    <img src={Unifresh} alt="" height={450} width={450}/>
                </a>
            </div>
            <div className="unifresh-text">
                <p>INDUSTRY</p>
                <h1>Unifresh</h1>
                <p>Store</p>
                <p><FontAwesomeIcon className="unifresh-icon1" icon={faFilm}/> Web DEVELOPMENT</p>
                <p><FontAwesomeIcon className="unifresh-icon1" icon={faFilm}/> QUALITY ASSURANCE</p>
            </div>
        </div>
        <div className="feel-free">
            <h2>Feel Free To <span>Contact</span> Us By Submitting <br /><span>Form Or Contact Live Support</span></h2>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151986.11987457186!2d-2.3886130644640833!3d53.472335972833775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C%20UK!5e0!3m2!1sen!2sus!4v1793969990040!5m2!1sen!2sus"></iframe>
        </>

    )
}

export default Portfolio