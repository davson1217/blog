import React from 'react';
import '../Styles/Portfolio.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {connect} from 'react-redux';

const Portfolio = (props) =>{

    const images = [
        {
            original: 'career.jpg',
            thumbnail: 'career.jpg',
        },
        /*{
            original: 'con2.jpg',
            thumbnail: 'con2.jpg',
        }, */
    ];

    const classes = `card portfolio ${localStorage.getItem('theme')}`;
    const textClasses = `text ${localStorage.getItem('theme')}`;

    return (
        <div className="">
            <div className="parallax mt-1"/>
            <div className={classes}>

            <div className="row">

                <div className="col-sm-12">
                    <div className="intro">
                        <div className="p-2">
                            <img src={'profile.svg'} alt="career" width={50}/>
                            <h3>About Me</h3>
                        </div>
                        To maintain consistency in my inclination towards life and goals, I strive for <u>balance</u> in both my personal and
                        career life as imbalance in one or the other creates vulnerability in both. At the core of my values, you'll find poise
                        (<span className={textClasses}>staying calm under fire</span>), confidence (<span className={textClasses}>through proper preparation</span>),
                        enthusiasm (<span className={textClasses}>genuine interest in what I do</span>) and intentness (<span className={textClasses}>staying the course</span>).

                    </div>
                </div>


                <div className="col-sm-12 mt-3">
                    <div className="intro">
                        <div className="p-2">
                            <img src={'edu.svg'} alt="career" width={50}/>
                            <h3>Education</h3>
                            <ul>
                                <li><b>M.Eng</b> (<span className={textClasses}>Karlsruhe Institute of Technology</span>)</li>
                            </ul>
                        </div>

                    </div>
                </div>


                <div className="col-sm-12 mt-3">
                    <div className="intro">
                        <div className="p-2">
                            <img src={'foreman.svg'} alt="career" width={50}/>
                            <h3>Career</h3>
                        </div>
                        Proudly a General Contractor (GC), with over a decade of experience in the engineering/construction industry, all together in Europe and the United States.
                        My career is simply a case of working in one's interest considering I often looked forward to going to work sites with my father,
                        from whom I had acquired invaluable experiences as a youngster. Thus over the years, I have demonstrated that passion by working
                        with notable entities and handling notable projects including: <b>Skanska (SWE)</b>, <b>Vest Asfalt AS (NOR)</b>, <b>Buildings To Go (US) </b>
                         among others.
                    </div>
                    <div className='mt-3'>
                        <ImageGallery items={images} showPlayButton={false} showThumbnails={false} showFullscreenButton={false}/>
                    </div>
                </div>

                <div className="col-sm-12 mt-3">
                    <div className="languages">
                        <div className="p-2">
                            <img src={'language.svg'} alt="career" width={50}/>
                            <h3>Languages</h3>
                        </div>
                        <ul>
                            <li>Norsk (<span className={textClasses}>Native</span>)</li>
                            <li>German (<span className={textClasses}>Full Professional</span>)</li>
                            <li>English (<span className={textClasses}>Full Professional</span>)</li>
                            <li>Danish (<span className={textClasses}>Professional</span>)</li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-12 mt-3">
                    <div className="interests">
                        <div className="p-2">
                            <img src={'yoga.svg'} alt="career" width={50}/>
                            <h3>Interests</h3>
                        </div>
                        Below are some of the things that makes me tick and gets me going in life
                        <ul>
                            <li>Meditation (<span className={textClasses}>If a there's a hobby that generally makes you a better person through building skills for stress management, increasing self-awareness among other benefits. Then it's got to be at the top of the log!</span>)</li>
                            <li>Traveling/Exploring (<span className={textClasses}>I want to see as many places on earth as I can afford</span>)</li>
                            <li>Hiking (<span className={textClasses}>Though my first hiking experience, many years ago, left me with bruised knees and a snapped finger, this activity has since gone on to be one of my favorite outdoor hobbies</span>)</li>
                            <li>Road Trips (<span className={textClasses}>Love the different sight I get in comparison with flying to a destination</span>)</li>
                            <li>Reading (<span className={textClasses}>Anything to improve the faculty of thinking</span>)</li>
                            <li>Writing (<span className={textClasses}>Magic. This is words without sound, voices without people </span>)</li>
                            <li>E.t.c (<span className={textClasses}>... </span>)</li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-12 mt-3">
                    <div className="contacts">
                        <div className="p-2">
                            <img src={'contacts.svg'} alt="career" width={50}/>
                            <h3>Contacts</h3>
                        </div>
                        <span>For inquiries</span>
                        <ul>
                            <li>Alvisjohnsen@gmail.com</li>
                            <li>Contracting@alvisjohnsen.online</li>
                            <li><strike>(414)888-4306</strike></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}

const MapState = state => {
    return {
        // Page : state.Page,
    }
}

const MapDispatch = dispatch =>{
    return {

    }
}


export default connect(MapState, MapDispatch)(Portfolio)
