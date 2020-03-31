import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Fade from 'react-reveal/Fade';
// import TransitionGroup from 'react-transition-group/TransitionGroup';
// import { AccordionItemState } from "react-accessible-accordion";



class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        // tab2 = "Awards",
        tab3 = "Experience",
        tab4 = "Education & Certification";
        const { tabStyle } = this.props

        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        {/* <Tab>{tab2}</Tab> */}
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                        <Fade right cascade>
                                            <ul>
                                                <li>
                                                    <a>Full Stack Development<span></span></a>
                                                    MERN Stack, MVC, User Authentication, Responsive Design, RESTful API
                                                </li>
                                                <li>
                                                    <a>Networking and System Support<span></span></a>
                                                    Switching &amp; Routing, G Suite Admin, AD, Meraki, WatchGuard, Verifone 
                                                </li>
                                                <li>
                                                    <a>Photography<span></span></a>
                                                    Portraiture 
                                                </li>
                                            </ul>
                                        </Fade>
                                        </div>
                                        
                                    </TabPanel>

                                    {/* <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a>Awwwards.com <span>- Winner</span></a> 2019 - 2020
                                               </li>
                                               <li>
                                                   <a>CSS Design Awards <span>- Winner</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a>Design nominees <span>- site of the day</span></a> 2013- 2014
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel> */}



                                    <TabPanel>
                                       <div className="single-tab-content">
                                        <Fade right cascade >
                                           <ul>
                                               <li>
                                                   <a>Full Stack Developer<span> - Freelance</span></a> 2020 - Current
                                               </li>
                                               <li>
                                                   <a>IT Coordinator<span> - AllSaints</span></a> 2018 - Current
                                               </li>
                                               <li>
                                                   <a>Service Desk Analyst<span> - SDSU Research Foundation</span></a> 2016 - 2018
                                               </li>
                                           </ul>
                                           </Fade>
                                       </div>
                                       
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                       <Fade right cascade >
                                           <ul>
                                               <li>
                                                   <a>Full Stack Development Certificate<span> - UCLA Extension</span></a> 2020
                                               </li>
                                               <li>
                                                   <a>B.S. Management Information Systems<span> - San Diego State University</span></a> 2016
                                               </li>
                                               <li>
                                                   <a> <br></br><span></span> </a><br></br> 
                                               </li>
                                           </ul>
                                        </Fade>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;