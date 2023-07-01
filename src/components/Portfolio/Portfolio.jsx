import React from "react";
import "./Portfolio.css";
import img_1 from '../../assets/Port_1.png'
import img_2 from '../../assets/Port_2.png'
import img_3 from '../../assets/Port_3.png'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item-img">
                        <img src={img_1} alt="" />
                    </div>
                    <h3>Martial-Arts Project</h3>
                    <div className="portfolio_item-cta">
                    <a
                        href="https://github.com/Miftahulislam2001/martail-arts-client"
                        className="btn"
                        target="_blank"
                    >
                        Github
                    </a>
                    <a
                        href="https://martial-arts-5150e.web.app"
                        className="btn btn-primary"
                        target="_blank"
                    >
                        Live Demo
                    </a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-img">
                        <img src={img_2} alt="" />
                    </div>
                    <h3>Chef-Recipe-project </h3>
                    <div className="portfolio_item-cta">
                    <a
                        href="https://github.com/Miftahulislam2001/chef-recipe-client-site"
                        className="btn"
                        target="_blank"
                    >
                        Github
                    </a>
                    <a
                        href="https://chafe-cafe.web.app/"
                        className="btn btn-primary"
                        target="_blank"
                    >
                        Live Demo
                    </a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-img">
                        <img src={img_3} alt="" />
                    </div>
                    <h3>Kids-Toys-Project</h3>
                    <div className="portfolio_item-cta">
                    <a
                        href="https://github.com/Miftahulislam2001/kids-toy-client"
                        className="btn"
                        target="_blank"
                    >
                        Github
                    </a>
                    <a
                        href="https://girls-toys.web.app/"
                        className="btn btn-primary"
                        target="_blank"
                    >
                        Live Demo
                    </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;
