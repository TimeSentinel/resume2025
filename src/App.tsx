// (c)2025 Lance Stubblefield - Resume Project

import './App.css'

function App() {

    return (
        <div className="resumePage">
            <div className="resumeTop">
                <div className="resumeLeft">
                    <div className="title">resume.sol3.one</div>
                    <div className="avatar"></div>
                    <div className="credentials"></div>
                    <div className="certificates"></div>
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
                            {/*<li>Indeed:*/}
                            {/*    <a target="_blank" href="https://lance.sol3.one">https://lance.sol3.one</a>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
                <div className="resumeMain"></div>
            </div>
            <div className="resumeBottom"></div>
        </div>
    )
}

export default App
