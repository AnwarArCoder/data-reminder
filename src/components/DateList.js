import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DateList = ({person}) => {
  return (
    <Row className="justify-content-center">
          <Col sm="8" className="">
            <div className="rectangle">
              { person.length ? ( 
                person.map( item => {
                  return(
                    <div className="d-flex border-bottom" key={item.id}>
                      <img className="avatar-img" src={item.imgname} alt={item.name} />
                      <div className="px-3">
                        <p className="d-block fs-5">{item.name}</p>
                        <p className="d-block fs-6">{item.date}</p>
                      </div>
                    </div>
                  )
                } )
               ) : <h2>no no no</h2> }
            </div>
          </Col>
        </Row>
  )
}

export default DateList