// (c)2025 Lance Stubblefield - Resume Project

import './App.css'

function App() {
    const skills = [
        {title: "Front End", description: "React.js, TailwindsCSS, PostCSS, Bootstrap CSS/JS"},
        {title: "Back End", description: "React.js"},
        {title: "Database", description: "React.js"},
        {title: "React.js", description: "React.js"},
        {title: "React.js", description: "React.js"},
        {title: "React.js", description: "React.js"},
        {title: "React.js", description: "React.js"},
    ]
    const experiences = [
        {title: "React.js", category: "Front-End", description: "React.js"},
        {title: "React.js", category: "Front-End", description: "React.js"},
        {title: "React.js", category: "Front-End", description: "React.js"},
        {title: "React.js", category: "Front-End", description: "React.js"},
        {title: "React.js", category: "Front-End", description: "React.js"},
    ]
    const credentials = [
        {title: "Passport/RealID", description: "Able to travel"},
        {title: "FA/CPR/AED", description: "First-Aid, CPR, and AED certificate from the Red Cross"},
        {title: "Database", description: "React.js"},
        {title: "React.js", description: "React.js"},
        {title: "React.js", description: "React.js"},
        {title: "React.js", description: "React.js"},
        {title: "React.js", description: "React.js"},
    ]
    const certificates = [
        {title: "Front End", description: "React.js, TailwindsCSS, PostCSS, Bootstrap CSS/JS"},
        {title: "Back End", description: "React.js"},
        {title: "Database", description: "React.js"},
        {title: "React.js", description: "React.js"},
        {title: "React.js", description: "React.js"},
        {title: "React.js", description: "React.js"},
        {title: "React.js", description: "React.js"},
    ]
    return (
        <div className="resumePage">
            <div className="resumeTop">
                <div className="resumeLeft">
                    <div className="title">resume.sol3.one</div>
                    <div className="avatar"></div>
                    <div className="credentials">
                        <h4>Credentials</h4>
                    </div>
                    <div className="certificates">
                        <h4>Certificates</h4>

                    </div>
                    <div className="links">
                        <ul>
                            <li>
                                <div className="linkCell">
                                    <div className="linkImage">
                                        <img src="images/serious.png" alt="serious Lance"/>
                                    </div>
                                    <div>
                                        <div className="linkTitle">Online<br/>Portfolio</div>
                                        <br/>
                                        <div className="linkAddress">
                                            <a target="_blank" href="https://lance.sol3.one">lance.sol3.one</a>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div className="linkCell">
                                    <div className="linkIcon">
                                        <img src="images/linkedin.png" alt="LinkedIn"/>
                                    </div>
                                    <div className="linkTitle">LinkedIn</div>
                                </div>
                                <div className="linkAddress">
                                    <a target="_blank"
                                       href="https://www.linkedin.com/in/lance-stubblefield-designer/">
                                        www.linkedin.com/in/ <br/> lance-stubblefield-designer/
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="linkCell">
                                    <div className="linkIcon">
                                        <img src="images/github.png" alt="GitHub"/>
                                    </div>
                                    <div className="linkTitle">GitHub</div>
                                </div>
                                <div className="linkAddress">
                                    <a target="_blank" href="https://github.com/TimeSentinel">
                                        github.com/TimeSentinel
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="linkCell">
                                    <div className="linkIcon">
                                        <img src="images/upwork.png" alt="Upwork"/>
                                    </div>
                                    <div className="linkTitle">Upwork</div>
                                </div>
                                <div className="linkAddress">
                                    <a target="_blank" href="https://www.upwork.com/freelancers/~01b480b3ffdda5cdfa">
                                        www.upwork.com/freelancers/~01b480b3ffdda5cdfa
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="linkCell">
                                    <div className="linkIcon">
                                        <img src="images/freelancer.png" alt="Freelancer"/>
                                    </div>
                                    <div className="linkTitle">Freelancer</div>
                                </div>
                                <div className="linkAddress">
                                    <a target="_blank" href="https://www.freelancer.com/u/lstubble4444">
                                        www.freelancer.com/u/lstubble4444
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="resumeMain">
                    <div className="resumeTitle"><h1>Lance Stubblefield</h1></div>
                    <div className="resumeIntro">
                        <h2>Experienced Web Developer</h2>
                        <p>I am saying stuff</p>
                    </div>
                    <hr className="resumeHR"/>
                    <div className="resumeSection">
                        <h3>What I'm Looking For</h3>
                        <p>Opportunities to help others and find solutions. I see myself as a troubleshooter and problem
                            solver.</p>
                    </div>
                    <div className="resumeSection">
                        <h3>Skills</h3>
                        <div className="tableContainer">
                            {skills.map((skill, index) => (
                            <div className="tableRow" key={index}>
                                <div className="tableCell1">{skill.title}</div>
                                <div className="tableCell4">{skill.description}</div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="resumeSection">
                        <h3>Experience</h3>
                        <div className="tableContainer">
                            {experiences.map((experience, index) => (
                                <div className="tableRow" key={index}>
                                    <div className="tableCell1">{experience.title}</div>
                                    <div className="tableCell2">{experience.category}</div>
                                    <div className="tableCell3">{experience.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="resumeExamples">
                        <h3>Examples of Work</h3>
                        <div className="exampleRow">
                            <div className="exampleImage"></div>
                            <div className="exampleSummary">
                                <div className="exampleTitle">Restaurant - React</div>
                                <div className="exampleDescription"></div>
                            </div>
                        </div>
                        <div className="exampleRow">
                            <div className="exampleSummary">
                                <div className="exampleTitle">M&M Cleaning Services</div>
                                <div className="exampleDescription"></div>
                            </div>
                            <div className="exampleImage"></div>
                        </div>
                        <div className="exampleRow">
                            <div className="exampleImage"></div>
                            <div className="exampleSummary">
                                <div className="exampleTitle">CNC Router Pros</div>
                                <div className="exampleDescription"></div>
                            </div>
                        </div>
                        <div className="exampleRow">
                            <div className="exampleSummary">
                                <div className="exampleTitle">Fuzzy Taco</div>
                                <div className="exampleDescription"></div>
                            </div>
                            <div className="exampleImage"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resumeBottom"></div>
        </div>
    )
}

export default App
