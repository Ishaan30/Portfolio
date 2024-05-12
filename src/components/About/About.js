import './About.css'

const About = () => {
    return (
        <div>
            <section className="qualification section">
                <h2 className="section__title" data-heading="My-journey">Qualification</h2>

                <div className="qualification__container container grid">
                    <div className="education">
                        <h3 className="qualification__title">
                            <i className="uil uil-graduation-cap"></i> Education
                        </h3>

                        <div className="title">
                            <div className="timeline__item">
                                <div className="circle__dot"></div>
                                <h3 className="timeline__title">National Institute of Technology , Hamirpur</h3>
                                <p className="timeline__text">Computer Science and Engineering</p>
                                <span className="timeline__date"><i className="uil uil-calender-alt"></i>
                                    2020-present
                                </span>
                            </div>

                            <div className="timeline__item">
                                <div className="circle__dot"></div>
                                <h3 className="timeline__title">Dhauladhar ND Public Senior Secondary School , Bharwain (Himachal Pradesh)</h3>
                                <p className="timeline__text">Class 12 : 82.4%</p>
                                <span className="timeline__date"><i className="uil uil-calender-alt"></i>
                                    2017-2019
                                </span>
                            </div>

                            <div className="timeline__item">
                                <div className="circle__dot"></div>
                                <h3 className="timeline__title">Montfort Senior Secondary School , Roorkee (Uttrakhand)</h3>
                                <p className="timeline__text">Class 10 : 95%</p>
                                <span className="timeline__date"><i className="uil uil-calender-alt"></i>
                                    2005-2017
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About