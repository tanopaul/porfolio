import aboutMePhoto from './assets/romania.png'
import cs50Cert from './assets/edx.png';
function About() {
    return (
      <div className="about">
        <div className='about-intro-text'>
            <h1>I'm Tano.</h1>
        </div>
          <div className='about-details'>
            <img className='about-img' src={aboutMePhoto} alt='me in Romania'/>
            <div className='about-description'>
              <h2>I’m a passionate software engineer with a unique journey that led me from the world of real estate to the exciting realm of technology. </h2>
              <p>In my previous career, I thrived in the fast-paced world of real estate, where I honed my skills in negotiations, client relations, and problem-solving. I learned the art of understanding clients’ needs and delivering solutions that exceeded their expectations. These skills have been invaluable in my software engineering journey.
              <br/><br/>Today, I’m a software engineer with a strong foundation in React.js, Python, HTML, and CSS. I enjoy tackling complex problems, building elegant solutions, and continuously learning to stay at the forefront of technological advancements.</p>
            </div>
          </div>
        <div className='education'>
            <h2>Education</h2>
            <div className='certs'>
                <div>
                    <a href='https://www.credly.com/badges/a0131837-730f-49d6-be95-ecdacae80f14/print' rel='noreferrer' target="_blank"><img className='meta-cert' src='https://images.credly.com/size/680x680/images/e91ed0b0-842b-417f-8d2f-b07535febdda/image.png' alt='certificate' /></a>
                    <h5>Self-Taught</h5>
                    <h5>Meta Front End Developer</h5>
                </div>
                <div>
                    <a href='https://courses.edx.org/certificates/dff784780cf74aa28987cb6621ce6597' className='cs50-cert' rel='noreferrer' target='_blank' ><img className='cs50-cert' src={cs50Cert} alt='certificate' /></a>
                    <h5>Self-Taught</h5>
                    <h5>Harvard CS50</h5>
                </div>
                <div>
                    <a href='#' rel='noreferrer' target="_blank"><img className='flatiron-cert' src='https://techhubsouthflorida.org/wp-content/uploads/2020/06/Flatiron-School.png' alt='certificate' /></a>
                    <h5>Bootcamp</h5>
                    <h5>Full Stack Learning</h5>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default About;