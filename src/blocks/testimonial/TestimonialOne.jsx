import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const TestimonialOne = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <Tabs>
                    <TabPanel>
                        <div className="rn-testimonial-content text-center">
                            <div className="inner">
                                <p> I enjoyed working with Kingsley on a project that needed a team of skilled software developers. Kingsley played a critical part in understanding our networking needs for the project and implemented these features into the software accordingly. The software project was a success thanks to Kingsley and the team. I recommend Kingsley for anyone who is in need for a full-stack web developer.</p>
                            </div>
                            <div className="author-info">
                                <h6><span>David Wang</span> - Principal Hardware Engineer, Mimyr</h6>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="rn-testimonial-content text-center">
                            <div className="inner">
                                <p>Kingsley was also highly self-motivated and put himself into a group with other motivated individuals to complete projects for real clients during his project weeks. Kingsley was able to complete all of this while also working full time as an IT Coordinator. I was so impressed by Kingsley's progression in the course that I offered him a spot in the Software Engineering Internship program at DataSlate, my own company. Since then, Kingsley has been working hard to complete his AWS certification and work on an internal project.</p>
                            </div>
                            <div className="author-info">
                                <h6><span>Omar Patel</span> - Owner, DataSlate, L.L.C.</h6>
                            </div>
                        </div>
                    </TabPanel>
                    {/* <TabPanel>
                        <div className="rn-testimonial-content text-center">
                            <div className="inner">
                                <p>Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                            </div>
                            <div className="author-info">
                                <h6><span>Jannat Tumpa </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="rn-testimonial-content text-center">
                            <div className="inner">
                                <p>Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                            </div>
                            <div className="author-info">
                                <h6><span>Johns Due </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="rn-testimonial-content text-center">
                            <div className="inner">
                                <p>John Doe The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                            </div>
                            <div className="author-info">
                                <h6><span>John Doe </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="rn-testimonial-content text-center">
                            <div className="inner">
                                <p>Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                            </div>
                            <div className="author-info">
                                <h6><span>Amar Orthi </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="rn-testimonial-content text-center">
                            <div className="inner">
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                            </div>
                            <div className="author-info">
                                <h6><span>Fatima Ma </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="rn-testimonial-content text-center">
                            <div className="inner">
                                <p>Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                            </div>
                            <div className="author-info">
                                <h6><span>JON CUMMINS </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                            </div>
                        </div>
                    </TabPanel> */}
                    
                    <TabList className="testimonial-thumb-wrapper">
                        <Tab>
                            <div className="testimonial-thumbnai">
                                <div className="thumb">
                                    <img src="/assets/images/client/testimonial-1.jpg" alt="Testimonial Images"/>
                                </div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className="testimonial-thumbnai">
                                <div className="thumb">
                                    <img src="/assets/images/client/testimonial-2.jpg" alt="Testimonial Images"/>
                                </div>
                            </div>
                        </Tab>
                        {/* <Tab>
                            <div className="testimonial-thumbnai">
                                <div className="thumb">
                                    <img src="/assets/images/client/testimonial-3.jpg" alt="Testimonial Images"/>
                                </div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className="testimonial-thumbnai">
                                <div className="thumb">
                                    <img src="/assets/images/client/testimonial-4.jpg" alt="Testimonial Images"/>
                                </div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className="testimonial-thumbnai">
                                <div className="thumb">
                                    <img src="/assets/images/client/testimonial-5.jpg" alt="Testimonial Images"/>
                                </div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className="testimonial-thumbnai">
                                <div className="thumb">
                                    <img src="/assets/images/client/testimonial-6.jpg" alt="Testimonial Images"/>
                                </div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className="testimonial-thumbnai">
                                <div className="thumb">
                                    <img src="/assets/images/client/testimonial-7.jpg" alt="Testimonial Images"/>
                                </div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className="testimonial-thumbnai">
                                <div className="thumb">
                                    <img src="/assets/images/client/testimonial-8.jpg" alt="Testimonial Images"/>
                                </div>
                            </div>
                        </Tab> */}
                    </TabList>

                </Tabs>
            </div>
        </div>
    )
}

export default TestimonialOne
