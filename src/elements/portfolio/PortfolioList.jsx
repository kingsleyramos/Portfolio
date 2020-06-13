import React, { Component } from "react";
import Fade from 'react-reveal/Zoom';

// const PortfolioListContent = [
//     {
//         image: 'image-1',
//         category: 'Development',
//         title: 'Sign up and track your workouts',
//         link: "https://kingsleyramos-workout-tracker.herokuapp.com/",
//         repo: "https://github.com/kingsleyramos/Workout-Tracker"
//     },
//     {
//         image: 'image-2',
//         category: 'Development',
//         title: "Let's eat some burgers",
//         link: "https://kingsleyramos-burger.herokuapp.com/",
//         repo: "https://github.com/kingsleyramos/burger"
//     },
//     {
//         image: 'image-3',
//         category: 'Development',
//         title: "Baby it's cold outside",
//         link: "https://kingsleyramos.github.io/Weather-Dashboard/",
//         repo: "https://github.com/kingsleyramos/Weather-Dashboard"
//     }
// ]

function Button(props){
    if (props.link === ""){
        return null
    }

    return(
        <div className="portfolio-button">
            <a className="rn-btn" href={props.link}>View App</a>
        </div>
    )
}

class PortfolioList extends Component{
    render(){
        // const {column , styevariation } = this.props;
        // const list = PortfolioListContent.slice(0 , this.props.item);
        const {column , styevariation, content} = this.props;
        console.log(this.props)
        const list = content.slice(0 , this.props.item);
        return(
            <React.Fragment>
                {list.map((value , index) => (
                    
                        <div className={`${column}`} key={index}>
                            <div className={`portfolio ${styevariation}`}>
                                <div className="thumbnail-inner">
                                    <div className={`thumbnail ${value.image}`}></div>
                                    <div className={`bg-blr-image ${value.image}`}></div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">{value.title}</a></h4>
                                        <p>{value.category}</p>
                                        {/* <div className="portfolio-button">
                                            <a className="rn-btn" href={value.link}>View App</a>
                                        </div> */}
                                        <Button link={value.link} />
                                        <div className="portfolio-button">
                                            <a className="rn-btn" href={value.repo}>View Repo</a>
                                        </div>
                                        {/* <PortfolioButton link={value.link} text={"Button Test"} {() => this.hideComponent(value.link)} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                ))}
            </React.Fragment>
        )
    }
}
export default PortfolioList;