import { useState } from "react";
import github from './assets/icons8-github-50 (1).png'
import { useLayoutEffect } from "react";

function ProjectPage({project}) {

    

    const [display, setDisplay] = useState('')

    function handleClick(name) {
        setDisplay(name)

        const timeout = setTimeout(() => {
            setDisplay('')
        }, 10000)
        if (display === '') {
            return () => clearInterval(timeout)
        }
    }
    
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    

    const teamInfo = project.team.map(teamMember => {
        return (
            <div className="team-div">
                <div>
                <img className="team-img" onClick={() => handleClick(teamMember.name)} src={teamMember.image} alt={teamMember.name} />
                </div>
                <p style={display !== teamMember.name ? {display: "none"} : {display:""}}>{teamMember.name}</p>            
            </div>
            )
    })

    const languages = project.languages.map(language => {
        return (
            <h4 className="lang">{language}</h4>
        )
    })

    const videos = project.videos.map(video => {
        return (
            <video className='video' autoPlay={true} loop={true} muted>
                <source src={require(`../../portfolio/src/assets/${video}`)} type="video/mp4" />
            </video>
        )
    })



    return (
      <div className="project-page">
        <div>
            <div className="project-info">
                <h1 className="project-title">{project.title}</h1>
                <div className="project-info-details">
                    <a href={project.github} rel='noreferrer' target="_blank"><img src={github} className="github-link" alt='github link' /></a>
                    <div className="team-box">
                        <h3 className="project-info-titles">Team</h3>
                        <div className="team-img-div">
                            {teamInfo}
                        </div>
                    </div>
                    <div className="project-language-box">
                        <h3 className="project-info-titles">Languages</h3>
                        <div className="languages">
                            {languages}
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-media">
                <div className="project-img-div">
                    <img className="portfolio-img" src={require(`../../portfolio/src/assets/${project.image1}`)} alt={project.title} />
                </div>
                <div className="project-overview">
                    <h3>Overview</h3>
                    <p className="overview-content">{project.overview}</p>
                </div>
                <div className="project-videos-div">
                    {videos}
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default ProjectPage;