// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// library.add(fab, faCheckSquare, faCoffee)
import {Container, Row, Col} from 'react-bootstrap'
const Footer = () => {
    return (    
<Container>
    <footer className="mt-5 mb-5 mx-auto p-4">
      <Row className="containerFooter" >
          <Col sm={12} md={3}>
        <ul className="mr-auto footerList">
          <li className="socialLink">
            <a className="socialLink" href="#"><i className="fab fa-facebook-square"></i></a>
        </li>
          <li className="socialLink">
            <a className="socialLink" href="#"><i className="fab fa-instagram-square"></i></a>
          </li>
          <li className="socialLink">
            <a className="socialLink" href="#"><i className="fab fa-twitter-square"></i></a>
          </li>
          <li className="socialLink">
            <a className="socialLink" href="#"><i className="fab fa-youtube"></i></a>
          </li>
        </ul>
        </Col>
        <Row style={{display:"flex", justifyContent:"space-between"}}>
          <Col sm={6} md={3} >
            <ul className="footerList">
              <li>Audio & Subtitles</li>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col sm={6} md={3} >
            <ul className="footerList">
              <li>Audio Descriptions</li>
              <li>Investors Relations</li>
              <li>Legal Notices</li>
            </ul>
          </Col>
          <Col sm={6} md={3} >
            <ul className="footerList">
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <ul className="footerList">
              <li>Gift Cards</li>
              <li>Terms Of Use</li>
              <li>Corporate Information</li>
            </ul>
          </Col>
        </Row>
        <a className="footerServiceButton">Service Code</a>
        <p className="footerText">1997-2019 Netflix, Inc. (i-0d00fcda2fdf9c0de)</p>
      </Row>
    </footer> 
    </Container>
    );

}
 
export default Footer;