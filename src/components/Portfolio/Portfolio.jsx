import React from "react";
import "./Portfolio.css";
import img_1 from "../../assets/Port_1.png";
import img_2 from "../../assets/port_2.png";
import img_3 from "../../assets/Port_3.png";


const portfolioData = [
    {
        "id": 1,
        "images": img_1,
        "title": "Martial-Arts Project",
        "github": "https://github.com/Miftahulislam2001/martail-arts-client",
        "live_link": "https://martial-arts-5150e.web.app"
    },
    {
        "id": 2,
        "images": img_2,
        "title": "Chef-Recipe-project",
        "github": "https://github.com/Miftahulislam2001/chef-recipe-client-site",
        "live_link": "https://chafe-cafe.web.app/"
    },
    {
        "id": 3,
        "images": img_3,
        "title": "Kids-Toys-Project",
        "github": "https://github.com/Miftahulislam2001/kids-toy-client",
        "live_link": "https://girls-toys.web.app/"
    }
]


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">

             {
                portfolioData.map(({id, images, title, github, live_link}) =>{
                    return (
                        <article
                        key={id}
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className="portfolio_item"
                    >
                        <div className="portfolio_item-img">
                            <img src={images} alt="" />
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio_item-cta">
                            <a
                                href={github}
                                className="btn"
                                target="_blank"
                            >
                                Github
                            </a>
                            <a
                                href={live_link}
                                className="btn btn-primary"
                                target="_blank"
                            >
                                Live Demo
                            </a>
                        </div>
                    </article>
                    )
                })
             }
 
            </div>
        </section>
    );
};

export default Portfolio;
