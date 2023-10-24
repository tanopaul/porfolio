import WorkCard from "./WorkCard";

function Work({changeProject, all_projects}) {

    const displayWorkCards = all_projects.map(project => {
      return <WorkCard cls={project.class} changeProject={changeProject} color={project.background} languages={project.languages} browser={project.browser} projectImg={project.image1} title={project.title} url={project.url} id={project.id} />
    })


    





    return (
      <div className="work">
      <div className="work-intro">
          <div className="greeting">
              <h1 className='hi'>Hi.</h1>
              <h1 className="greeting-name" >I'm Tano.</h1>
              <div className="greeting-description">
                <p>I'm passionate about crafting experiences that are engaging, accessible and user-centric.</p>
              </div>
          </div>
         
      </div>
        <div className="work-cards">
          {displayWorkCards}
        </div>

      </div>
    );
  }
  
  export default Work;