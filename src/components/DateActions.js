import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const DateActions = ({deleteData, viewData}) => {
  return (
    <Row className="justify-content-center">
          <Col sm="8" className="d-flex justify-content-between">
            <Button className="btn btn-danger" onClick={deleteData}>مسح الكل</Button>
            <Button className="btn btn-primary" onClick={viewData}>عرض الكل</Button>
          </Col>
        </Row>
  )
}

export default DateActions