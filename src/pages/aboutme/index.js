import React from 'react'
import "./style.css"
import { Row , Col} from 'react-bootstrap';
import PageHeader from '../../components/pageheader';
const thisPageName = "YOTAM BARAM"



export default function aboutMe(props) {
  const aboutMeData = props.aboutMe
  return (
    
      
      <Row>
        <PageHeader pageName={thisPageName}/>
        <Col id='home-contant' >
        {aboutMeData.map((about) => {
                  if(typeof(about.content) === "string") {
                    return (
                      <Row style={{marginBottom: "25px"}} >
                        <Col >
                      <h6>{about.headline}</h6>
                      <span>{about.content}</span>
                      </Col>
                      </Row>
                    )
                  } else {
                   
                    return (
                      <Row style={{marginBottom: "10px"}} >
                        <Col>
                      <h6>{about.headline}</h6>
                      <ul >
                        {about.content.map(element => {
                          return(<li>{element}</li>)
                        })}
                      </ul>
                      </Col>
                      </Row>
                      
                    )
                    
                  }
                })}

        </Col>
      </Row>


  )
};
