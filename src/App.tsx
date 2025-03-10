// (c)2025 Lance Stubblefield - Resume Project

import './App.css'

function App() {
    const skills = [
        {title: "Front End", description: "React.js, Typescript, TailwindsCSS, PostCSS, Bootstrap CSS/JS"},
        {title: "Back End", description: "Node.js, Express, Next, Passport"},
        {title: "Database", description: "PostgreSQL, Access, MongoDB"},
        {title: "User Experience", description: "Wireframe, Figma, Penpot, Gimp"}
    ]
    // const experiences = [
    //     {title: "20 Years", category: "Programming", description: "Various languages and environments. My first program was in early machine language."},
    //     {title: "React.js", category: "Front-End", description: "React.js"},
    //     {title: "React.js", category: "Front-End", description: "React.js"},
    //     {title: "React.js", category: "Front-End", description: "React.js"},
    //     {title: "React.js", category: "Front-End", description: "React.js"},
    // ]
    const credentials = [
        {title: "Passport/RealID", description: "Able to travel in the US and abroud"},
        {title: "FA/CPR/AED", description: "First-Aid, CPR, and AED certificate from the Red Cross"},
        {title: "FAA Remote Pilot", description: "Commercial drone photography"},
        {title: "WA Boaters Card", description: "Can operate small watercraft"},
        {title: "SDI Open Water, Dry Suit Dive Cert", description: "Underwater photography"},

    ]
    const certificates = [
        {title: "IBM Full Stack Developer", description: "React.js, Node.js, Next, Express"},
        {title: "Meta Front-End Developer", description: "React.js, CSS"},
        {title: "Google SEO Fundamentals", description: "Search Engine Optimization"},
        {title: "Google UX Design Professional", description: "Wireframe, Figma"},
        {title: "John Hopkins HTML/CSS/Javascript", description: "HTML, CSS, Javascript, Ajax"},
    ]
    const whyThis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const filmFrames = [
        {alt: "Maui Sunset", src: "images/beachsunset.webp"},
        {alt: "Paula Lake Trail Sign", src: "images/lakesign.webp"},
        {alt: "Mountain Trail", src: "images/woods.webp"},
        {alt: "Tropical Shore", src: "images/bluewater.webp"},
        {alt: "Island Sunset", src: "images/sunset.webp"},
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
                        <p>I have always been a creator - I love to design and build.<br/>
                            This is why web design is so enjoyable to me and why I am constantly learning new skills
                            and practicing my old skills.<br/><br/>
                            Every project is unique and gives me an opportunity to learn from my customers and partners.
                            What does their business do? How do their customers find them? How do they want their
                            company represented? <br/><br/>
                            My job is to create a bridge across the gap between a business's
                            image and what their customer wants to find.
                        </p>
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
                    {/*<div className="resumeSection">*/}
                    {/*    <h3>Experience</h3>*/}
                    {/*    <div className="tableContainer">*/}
                    {/*        {experiences.map((experience, index) => (*/}
                    {/*            <div className="tableRow" key={index}>*/}
                    {/*                <div className="tableCell1">{experience.title}</div>*/}
                    {/*                <div className="tableCell2">{experience.category}</div>*/}
                    {/*                <div className="tableCell3">{experience.description}</div>*/}
                    {/*            </div>*/}
                    {/*        ))}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="resumeExamples">
                        <h3>Examples of Work</h3>
                        <div className="exampleRow">
                            <div className="exampleImage1"></div>
                            <div className="exampleSummary">
                                <div className="exampleTitle">Restaurant - React/Typescript, Express, PostgreSQL</div>
                                <div className="exampleDescription">
                                    <p>Created two fully responsive variations.<br/>
                                        <ul>
                                            <li>One using simple JSON files for editable content.</li>
                                            <li>The other has a PostgreSQL database and admin CMS page.</li>
                                        </ul>
                                        I created several 'modules': Themes, Navigation, Products/Cart, Contact,
                                        Gallery, News/Blog.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="exampleRow">
                            <div className="exampleSummary">
                                <div className="exampleTitle">M&M Cleaning Services - Wordpress, Facebook Pages</div>
                                <div className="exampleDescription">
                                    <p>Local janitorial company wanted a simple, professional look to represent their
                                        business. <br/>
                                        Includes contact and tied in Facebook page.
                                    </p>
                                </div>
                            </div>
                            <div className="exampleImage2"></div>
                        </div>
                        <div className="exampleRow">
                            <div className="exampleImage3"></div>
                            <div className="exampleSummary">
                                <div className="exampleTitle">CNC Router Pros - React/Typescript, Tailwind CSS</div>
                                <div className="exampleDescription">
                                    <p>Manufacturing company's web-presence site with contact form that includes file
                                        uploads. <br/>
                                        Fully responsive, static pages with navigation, gallery, and contact page.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="exampleRow">
                            <div className="exampleSummary">
                                <div className="exampleTitle">Fuzzy Taco - React/Typescript, PostCSS</div>
                                <div className="exampleDescription">
                                    <p>Demonstration site for restaurant.<br/>
                                        Single-page, simple menu, gallery, contact, and simple menu. <br/>
                                        Uses JSON for menu and gallery
                                    </p>
                                </div>
                            </div>
                            <div className="exampleImage4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resumeBottom">
                <div className="filmstrip">
                    <div className="filmRack">
                        {whyThis.map((item) => (
                            <div className="filmHole" key={item}></div>
                        ))}
                    </div>

                    <div className="filmFrames">
                        {filmFrames.map((frame, index) => (
                            <div className="frame" key={index}>
                                <img src={frame.src} alt={frame.alt}/>
                            </div>
                        ))}
                    </div>

                    <div className="filmRack">
                        {whyThis.map((item) => (
                            <div className="filmHole" key={item}></div>
                        ))}
                    </div>
                </div>
                <div className="tagline">
                    <div className="tagLeft"> &copy;2025 Lance Stubblefield</div>
                    <div className="tagCenter"></div>
                    <div className="tagRight">Photographs taken by Lance</div>
                </div>
            </div>
        </div>
    )
}

export default App
