// (c)2025 Lance Stubblefield - Resume Project

import './App.css'

function App() {
    const skills = [
        {title: "Front End", description: "React.js, TailwindsCSS, PostCSS, Bootstrap CSS/JS"},
        {title: "Back End", description: "React.js"},
        {title: "Database", description: "React.js"},
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

    ]
    const certificates = [
        {title: "Front End", description: "React.js, TailwindsCSS, PostCSS, Bootstrap CSS/JS"},
        {title: "Back End", description: "React.js"},
        {title: "Database", description: "React.js"},
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
                        <div className="tableContainer">
                            {credentials.map((credential, index) => (
                                <div className="tableBlock" key={index}>
                                    <div className="tableCell5">{credential.title}</div>
                                    <div className="tableCell6">{credential.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="certificates">
                        <h4>Certificates</h4>
                        <div className="tableContainer">
                            {certificates.map((certificate, index) => (
                                <div className="tableBlock" key={index}>
                                    <div className="tableCell5">{certificate.title}</div>
                                    <div className="tableCell6">{certificate.description}</div>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="links">
                        <ul>
                            <li>
                                <a target="_blank" href="https://portfolio.sol3.one">
                                    <div className="linkCell">
                                        <div className="linkImage">
                                            <img src="images/serious.png" alt="serious Lance"/>
                                        </div>
                                        <div className="portfolioCell">
                                            <div className="linkTitle">Online Portfolio</div>
                                            <div className="linkAddress">portfolio.sol3.one</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a target="_blank"
                                   href="https://www.linkedin.com/in/lance-stubblefield-designer/">
                                    <div className="linkCell">
                                        <div className="linkIcon">
                                            <img src="images/linkedin.png" alt="LinkedIn"/>
                                        </div>
                                        <div className="portfolioCell">
                                            <div className="linkTitle">LinkedIn</div>
                                            <div className="linkAddress">linkedin.sol3.one</div>
                                        </div>
                                    </div>

                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/TimeSentinel">
                                    <div className="linkCell">
                                        <div className="linkIcon">
                                            <img src="images/github.png" alt="GitHub"/>
                                        </div>
                                        <div className="portfolioCell">
                                        <div className="linkTitle">GitHub</div>
                                            <div className="linkAddress">github.sol3.one</div>
                                        </div>
                                    </div>

                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.upwork.com/freelancers/~01b480b3ffdda5cdfa">
                                    <div className="linkCell">
                                        <div className="linkIcon">
                                            <img src="images/upwork.png" alt="Upwork"/>
                                        </div>
                                        <div className="portfolioCell">
                                        <div className="linkTitle">Upwork</div>
                                            <div className="linkAddress">upwork.sol3.one</div>
                                        </div>
                                    </div>

                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.freelancer.com/u/lstubble4444">
                                    <div className="linkCell">
                                        <div className="linkIcon">
                                            <img src="images/freelancer.png" alt="Freelancer"/>
                                        </div>
                                        <div className="portfolioCell">
                                        <div className="linkTitle">Freelancer</div>
                                        <div className="linkAddress">freelancer.sol3.one</div>
                                        </div>
                                    </div>

                                </a>
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
                            <div className="exampleImage1"></div>
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
                            <div className="exampleImage2"></div>
                        </div>
                        <div className="exampleRow">
                            <div className="exampleImage3"></div>
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
                            <div className="exampleImage4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resumeBottom"></div>
        </div>
    )
}

export default App
