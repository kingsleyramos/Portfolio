import React, { Component, useState } from "react";
import * as emailjs from 'emailjs-com';

const ContactThree = (props) =>{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         rnName: '',
    //         rnEmail: '',
    //         rnSubject: '',
    //         rnMessage: '',
    //     };
    // }

    const [rnName, setName] = useState('');
    const [rnEmail, setEmail] = useState('');
    const [rnSubject, setSubject] = useState('');
    const [rnMessage, setMessage] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();

        var template_params = {
            "name": rnName,
            "email": rnEmail,
            "subject": rnSubject,
            "message": rnMessage
        }
        
        var service_id = "gmail";
        var template_id = "portfolio_contact";
        const user_id = 'user_ugKrwUkzh1r75Eojpu9Xk'

        emailjs.send(service_id, template_id, template_params, user_id)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Message Sent!");
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }, function(error) {
            console.log('FAILED...', error);
        });
    };

    
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">{props.contactTitle}</h2>
                                <p className="description">And i'll send you a hello!
                                    {/* <a href="tel:+8801923088574">01923 088574</a> or email:
                                    <a href="mailto:kingsleyramos@gmail.com"> kingsleyramos@gmail.com</a> */}
                                </p>
                            </div>
                            <div className="form-wrapper">
                                <form>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={rnName}
                                            onChange={(e)=>{setName(e.target.value)}}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={rnEmail}
                                            onChange={(e)=>{setEmail(e.target.value)}}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={rnSubject}
                                            onChange={(e)=>{setSubject(e.target.value)}}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={rnMessage}
                                            onChange={(e)=>{setMessage(e.target.value)}}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" value="submit" name="submit" id="mc-embedded-subscribe" onClick={(e)=>{handleSubmit(e)}} >Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            {/* <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src={`${props.contactImages}`} alt="trydo"/>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    
}
export default ContactThree;