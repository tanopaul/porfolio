import {Link} from 'react-router-dom';

function WorkCard({changeProject,cls, browser , title, id, projectImg, languages, color}) {

    function handlePageChange() {
      changeProject(id)
    }

    return (
      <div >
        <Link className='work-card-link' onClick={handlePageChange} exact to={`/${id}`}>
          <div className={`work-card-container-div work-card ${cls}`} style={{backgroundColor: `${color}`}}>
              <div className='work-description'>
                <h5>{languages.join(', ')}</h5>
                <h3>{title}</h3>
              </div>
              <div>
                <img className='browser-img' src={require(`../../portfolio/src/assets/${browser}`)} alt="card" />
                <img className='project-img' src={require(`../../portfolio/src/assets/${projectImg}`)} alt="card" />
              </div>
          </div>
        </Link>
      </div>
    );
  }
  
  export default WorkCard;