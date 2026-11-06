import React from "react";
import './services.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { faSpaceAwesome } from "@fortawesome/free-brands-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
    return (
        <>
            <h1 className="we-provide">We <span>Provide</span> The Best <br /> Services With <span>Our <br />Developers</span></h1>
            <div className="all-card">
                <div className="card-123">
                    <div className="card-1">
                        <h2>Digital Marketing</h2>
                        <FontAwesomeIcon className="icon-card" icon={faGears}/>
                        <p>The <span>Digital Impacts</span> have compiled a list of the best digital marketing companies in the world.</p>
                    </div>
                    <div className="card-2">
                        <h2>Web Development</h2>
                        <FontAwesomeIcon className="icon-card" icon={faSpaceAwesome}/>
                        <p>Web design services comprise the process of user interface <span>(UI)</span> and user experience <span>(UX)</span> design of any web-based solution.</p>
                    </div>
                    <div className="card-3">
                        <h2>Graphic Designing</h2>
                        <FontAwesomeIcon className="icon-card" icon={faFilm}/>
                        <p>Create visual concepts to communicate ideas that inspire and captivate consumers, creative thinking, an aptitude towards art and design</p>
                    </div>
                </div>
                <div className="card-45">
                    <div className="card-4">
                        <h2>Content Writter</h2>
                        <FontAwesomeIcon className="icon-card" icon={faPen}/>
                        <p>That <span>content</span> can include blog posts, video or podcast scripts, ebooks or whitepapers, press releases, product category descriptions, landing page or social media</p>
                    </div>
                    <div className="card-5">
                        <h2>SEO</h2>
                        <FontAwesomeIcon className="icon-card" icon={faSuitcase}/>
                        <p>Help search engines find, crawl, and index your content efficiently. The website can become easily findable, more relevant and popular towards user search querie.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services;