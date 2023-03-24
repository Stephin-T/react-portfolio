import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Stephin-T-Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Stephin-T-Resume.pdf';
                alink.click();
            })
        })
    }
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Download my Resume<br></br> from here</h3>
            </Col>
            <Col md={6} xl={7}>
              <form >
                <div className="new-email-bx">
                  {/* <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" /> */}
                  <button type="submit" onClick={onButtonClick}>Download</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
