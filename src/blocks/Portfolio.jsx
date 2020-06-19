import React from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
//import Footer from "../component/footer/Footer";
import FooterTwo from "../component/footer/FooterTwo";
//import Slider from "react-slick";
import PortfolioList from "../elements/portfolio/PortfolioList";
//import { slickDot , portfolioSlick2 } from "../page-demo/script";
import ContactThree from "../elements/contact/ContactThree";

// const list = [
//     {
//         image: 'image-1',
//         category: 'Development',
//         title: 'Getting tickets to the big show'
//     },
//     {
//         image: 'image-2',
//         category: 'Development',
//         title: 'Getting tickets to the big show'
//     },
//     {
//         image: 'image-3',
//         category: 'Development',
//         title: 'Getting tickets to the big show'
//     },
//     {
//         image: 'image-4',
//         category: 'Development',
//         title: 'Getting tickets to the big show'
//     },
//     {
//         image: 'image-3',
//         category: 'Development',
//         title: 'Getting tickets to the big show'
//     },
//     {
//         image: 'image-4',
//         category: 'Development',
//         title: 'Getting tickets to the big show'
//     }
// ]

// const PortfolioList2 = [
//     {
//         image: 'image-1',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-2',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-3',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-4',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-3',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-4',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     }
// ]

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Application will enable you to view, create, and track daily workouts with the ability to log any exercise information or notes needed.',
        technologies: 'Bootstrap, JQuery, Heroku, Express, Handlebars, MongoJS, Mongoose',
        title: 'Workout Tracker',
        link: "https://kingsleyramos-workout-tracker.herokuapp.com/",
        repo: "https://github.com/kingsleyramos/Workout-Tracker"
    },
    {
        image: 'image-2',
        category: 'This application will log the burgers you will and the the burgers you have eaten so you can always remember those great burgers.',
        technologies: 'Bootstrap, JQuery, Heroku, Express, Handlebars, MySQL',
        title: "Burger",
        link: "https://kingsleyramos-burger.herokuapp.com/",
        repo: "https://github.com/kingsleyramos/burger"
    },
    {
        image: 'image-3',
        category: 'This responsive application displays the current weather and weather forecast of a city that is search and saves the searched city.',
        technologies: 'Bootstrap, JQuery, Moment.js, OpenWeather API',
        title: "Weather Dashboard",
        link: "https://kingsleyramos.github.io/Weather-Dashboard/",
        repo: "https://github.com/kingsleyramos/Weather-Dashboard"
    },
    {
        image: 'image-4',
        category: 'This applications is for users to be able to write and save notes, as well as delete notes they\'ve written before.',
        technologies: 'Bootstrap, JQuery, Jest, Express, Heroku',
        title: "Note Taker",
        link: "https://kingsleyramos-note-taker.herokuapp.com/",
        repo: "https://github.com/kingsleyramos/Note-Taker"
    },
    {
        image: 'image-5',
        category: 'This Node application is for a business owner to be able to view and manage departments, roles, and employees in their company in order to organize and plan their business.',
        technologies: 'Node.js, Inquirer, console.table, MySQL, promise-mysql',
        title: "Employee Tracker",
        link: "",
        repo: "https://github.com/kingsleyramos/Employee-Tracker"
    },
    {
        image: 'image-6',
        category: 'This Node application will assist managers in generating a webpage that displays their team\'s basic info for quick access to emails and GitHub Profiles.',
        technologies: 'Bootstrap, Node.js, inquirer',
        title: "Employee Summary Webpage Engine",
        link: "",
        repo: "https://github.com/kingsleyramos/Template-Engine-Employee-Summary"
    },
    {
        image: 'image-7',
        category: 'This is application generates a password depending on user selected character criteria: special, numeric, lowercase, uppercase, and length.',
        technologies: 'Bootstrap',
        title: "Password Generator",
        link: "https://kingsleyramos.github.io/Password-Generator/",
        repo: "https://github.com/kingsleyramos/Password-Generator"
    },
]

const Portfolio = () => {
    return (
        <>
            <PageHelmet pageTitle='Kingsley Ramos' />

            {/* Start Header Area  */}
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* End Header Area  */}
            
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Developer Portfolio'}   />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">

                {/* Start Portfolio Area */}
                {/* <div className="portfolio-area pt--90 pb--140 bg_color--1">
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {list.map((value , index) => (
                                                <div className="portfolio" key={index}>
                                                    <div className="thumbnail-inner">
                                                        <div className={`thumbnail ${value.image}`}></div>
                                                        <div className={`bg-blr-image ${value.image}`}></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                                            <div className="portfolio-button">
                                                                <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}
                {/* End Portfolio Area */}


                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--5">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            {/* <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30">
                                        <h2 className="title">All Works</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="row">
                                <PortfolioList styevariation="text-left mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="10" content={PortfolioListContent}/>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="https://github.com/kingsleyramos"><span>Visit GitHub</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start Portfolio Area */}
                {/* <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30">
                                    <h2 className="title">All Works</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper portfolio-sacousel-inner mb--55">
                        <div className="portfolio-slick-activation mt--70 mt_sm--40">
                            <Slider {...portfolioSlick2}>
                                {PortfolioList2.map((value , index) => (
                                    <div className="portfolio" key={index}>
                                        <div className="thumbnail-inner">
                                            <div className={`thumbnail ${value.image}`}></div>
                                            <div className={`bg-blr-image ${value.image}`}></div>
                                        </div>
                                        <div className="content">
                                            <div className="inner">
                                                <p>{value.category}</p>
                                                <h4><a href="/portfolio-details">{value.title}</a></h4>
                                                <div className="portfolio-button">
                                                    <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div> */}
                {/* End Portfolio Area */}

            </main>
            {/* End Page Wrapper  */}

            {/* Start Contact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--5">
                    <ContactThree contactImages="/assets/images/about/about-9.jpg" contactTitle="Say Hello!" />
                </div>
            </div>
            {/* End COntact Area */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            {/* Start Footer Area  */}
            {/* <Footer /> */}
            <FooterTwo />
            {/* End Footer Area  */}

        </>
        
    )
}

export default Portfolio;