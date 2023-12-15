import { useState } from 'react'
import headshotPhoto from './assets/images/Headshot1.png'
import resumeLink from './assets/pdf/resume.pdf'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleDownloadClick = () => {
    window.open(resumeLink, '_blank');
  };

  return (
    <>
    <div className="container">
      <div className="header-box">
        <div className="header-pic">
            <img src={headshotPhoto} className="profilePicture logo" alt="Edward!" />
        </div>
        <div className="header-summary">
          <h2>Hi, I'm <strong className='my-name'>Edward Terry</strong></h2>
          <p><strong>Backend Software Engineer, Telm.AI</strong></p>
          <p>Bachelor's in Computer Science, <strong>Florida International University</strong></p>
          <div className='button-container'>
            <button onClick={handleDownloadClick}>View My Resume</button>
            <button onClick={
                () => { window.location.href="https://github.com/EdTerry"; }
            }>            
              My GitHub
            </button>
          </div>
        </div>
      </div>
      <div className="summary-box">
          <p>
            I am a versatile <strong>Full-Stack Software Engineer</strong> with expertise in developing a wide range of software solutions, encompassing front-end, server-side, and systems-level applications. My proficiency extends to various technologies, including:
          </p>
        <div style={{width: '100%', textAlign: 'center', marginBottom: '14px'}}>
          <button>Java</button>
          <button>Spring Boot</button>
          <button>REST APIs</button>
          <button>Angular</button>
          <button>React</button>
          <button>TypeScript/JavaScript</button>
          <button>MySQL</button>
          <button>Apache Kafka</button>
          <button>Redis</button>
          <button>Elasticsearch</button>
          <button>GCP/GKE</button>
          <button>C#</button>
        </div>
      </div>
      <div className="projects-box">
        <h2>Personal Projects</h2>
        <ul className="projects-list">
          <li><a href="https://store.steampowered.com/app/17520/Synergy/">Synergy</a> - Synergy is a cooperative mod for Half-Life 2, enabling players to embark on the singleplayer storylines of both Half-Life 2 and its sequels collaboratively. Extensive efforts were dedicated to improving AI, netcode, and overall player experience to ensure an enjoyable cooperative gaming environment.</li>
          <li>TicketRescue - TicketRescue is a React.JS-based project developed to meet the needs of a client seeking a solution for enabling prospective customers to effortlessly scan Florida Traffic Citations. The system dynamically populates paperwork, resulting in a significant reduction in operational overhead.</li>
          <li>StockSpyder - StockSpyder is a Python-based multi-threaded web application developed with Flux, ExpressJS, and BeautifulSoup. Its primary function is to scrape stocks data from diverse sources that lack dedicated APIs but permit web scraping. I utilized this tool for personal research purposes, aiming to deepen my understanding of web scraping methodologies.</li>
        </ul>
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <p>Hello there! I'm <strong>Edward Terry</strong>, a proficient full-stack software engineer with a love for crafting tech solutions. My journey into the world of software development began with a passion for technology, sparked by my love for gaming. As I delved deeper into the realm of technology, I discovered my passion for programming, which ultimately led me to where I am today. This passion eventually led me to web development using PHP, and from there, my love for programming blossomed.</p>

        <p>In my professional journey, I've had some exciting roles. At Wells Fargo, I played a key role in enhancing trade processing systems, implementing efficient solutions that streamlined operations. I also delved into cloud technologies like Google Kubernetes Engine to ensure robust and scalable deployments.</p>

        <p>Formerly at BetterCloud, I worked on creating microservices that provide users with easy access to data from various sources. My focus is on the practical implementation of these services to deliver seamless experiences to our customers.</p>

        <p>Currently at Telm.AI, I work as a backend software engineer, contributing to the improvement of our data observability platform within our collaborative engineering team. My responsibilities include addressing challenges in data quality, scalability, and security, fostering teamwork, and maintaining a high standard of software quality.</p>

        <p>In addition to my work, I enjoy personal projects like the Ticket Rescue Ticket Scanner. This app simplifies handling Florida Traffic Citations using ReactJS, Node, and other cool tech.</p>

        <p>Beyond my tech skills, I'm analytical, stick to project requirements, and have experience in Agile and CI/CD processes. I speak both English and Spanish and hold a degree in Computer Science from Florida International University.</p>

        <p>I'm thrilled about the endless possibilities in tech and am always up for creating innovative solutions.</p>
      </div>
    </div>
    </>
  )
}

export default App
