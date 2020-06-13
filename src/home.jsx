import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "./component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "./component/header/HeaderThree";
import FooterTwo from "./component/footer/FooterTwo";
import TabTwo from "./elements/tab/TabTwo";
import ContactThree from "./elements/contact/ContactThree";
import PortfolioList from "./elements/portfolio/PortfolioList";
import ServiceList from "./elements/service/ServiceList";
// import BlogContent from "./elements/blog/BlogContent";
import TestimonialOne from "./blocks/testimonial/TestimonialOne.jsx";

import Fade from 'react-reveal/Fade';

import './index.scss';

// Title
const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Application will enable you to view, create, and track daily workouts with the ability to log any exercise information or notes needed.',
        title: 'Sign up and track your workouts',
        link: "https://kingsleyramos-workout-tracker.herokuapp.com/",
        repo: "https://github.com/kingsleyramos/Workout-Tracker"
    },
    {
        image: 'image-2',
        category: 'This application will log the burgers you will and the the burgers you have eaten so you can always remember those great burgers.',
        title: "Let's eat some burgers",
        link: "https://kingsleyramos-burger.herokuapp.com/",
        repo: "https://github.com/kingsleyramos/burger"
    },
    {
        image: 'image-3',
        category: 'This responsive application displays the current weather and weather forecast of a city that is search and saves the searched city.',
        title: "Baby it's cold outside",
        link: "https://kingsleyramos.github.io/Weather-Dashboard/",
        repo: "https://github.com/kingsleyramos/Weather-Dashboard"
    }
]

const PortfolioLanding = () => {
    let title = 'About Me',
        description = "I'm an ambitious Full Stack Developer with a long background of IT, tech enthusiast, passionate photographer, and an eager learner. Pushing the world toward a new way of using technology to advise, benefit, and provide service to others is a motivator to learn more.";
    // const PostList = BlogContent.slice(0 , 5);
    return (
        <div className="active-dark">
            <Helmet pageTitle="Kingsley Ramos" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}

                                            <h1 className="title"><Fade delay={200} duration={2000}>Hi, I’m Kingsley</Fade>
                                                <Fade delay={400} duration={2000}>
                                                    <TextLoop>
                                                        <span> Developer.</span>
                                                        <span> IT.</span>
                                                        <span> Photographer.</span>
                                                    </TextLoop>
                                                </Fade>
                                            </h1>
                                            <Fade delay={800} duration={2000}><h2>based in Los Angeles.</h2></Fade>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/portfolio_image.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <Fade bottom cascade delay={200}><p className="description">{description}</p></Fade>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}


            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
                <div className="portfolio-area ptb--120 bg_color--5">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                        <h2 className="title">Projects</h2>
                                        <p>{/* Subtext */}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" content={PortfolioListContent}/>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="/portfolio"><span>View More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}

            {/* Start Blog Area */}
            {/* <div id="blog" className="fix">
                <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-center">
                                    <h2>Latest News</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br />but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60 mt_sm--40">
                            {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="blog blog-style--1">
                                        <div className="thumbnail">
                                            <a href="/blog-details">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href="/blog-details">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </div>    
                </div>
            </div> */}
            {/* End Blog Area */}



            {/* Start Service Area  */}
            <div id="service" className="fix">
                <div className="service-area creative-service-wrapper ptb--120 bg_color--1" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title">Testimonials</h2>
                                    {/* <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p> */}
                                </div>
                            </div>
                        </div>                
                        {/* <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div> */}
                           
                        <div className="rn-testimonial-area bg_color--1 pt--80">
                            <div className="container">
                                <TestimonialOne />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            {/* End Service Area  */} 

            {/* Start Contact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--5">
                    <ContactThree contactImages="/assets/images/about/about-9.jpg" contactTitle="Say Hello!" />
                </div>
            </div>
            {/* End COntact Area */}

            <FooterTwo />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
        </div>
    )
}

export default PortfolioLanding;
