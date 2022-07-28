import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import DatesCount from './components/DatesCount';
import { person } from './data'
import DateList from './components/DateList';
import DateActions from './components/DateActions';

function App() {

  const [personData, setPersonData] = useState(person)

  useEffect(() => {
    setPersonData([])
  }, []);

  const onDelete = () => {
    setPersonData([])
  }

  const onView = () => {
    setPersonData(person)
  }

  return (
    <div className="App">
      <Container className="py-5">
        <DatesCount person={personData} />

        <DateList person={personData} />

        <DateActions deleteData={onDelete} viewData={onView} />
      </Container>
    </div>
  );
}

export default App;
