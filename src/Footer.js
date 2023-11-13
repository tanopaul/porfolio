import resume from './assets/resume.pdf'

function Footer() {
    return (
      <div className="footer">
        <div >
            <ul className="footer-list">
                <li className="footer-head">Links</li>
                <li><a href='https://www.linkedin.com/in/tanopaul' rel='noreferrer' target="_blank">LinkedIn</a></li>
                <li><a href='https://github.com/tanopaul' rel='noreferrer' target="_blank">Github</a></li>
                <li><a href='https://dev.to/tanopple' rel='noreferrer' target="_blank">Blog</a></li>
                <li><a href={resume} rel='noreferrer' target="_blank">Resume</a></li>
                <li><a href='https://www.zillow.com/profile/TanoBetterRealEstate' rel='noreferrer' target="_blank">Real Estate</a></li>
            </ul>
        </div>
        <div>
            <ul className="footer-list">
                <li className="footer-head">Contact Me</li>
                <li><a href="mailto:tanopaul38@gmail.com">Message</a></li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default Footer;