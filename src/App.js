import React, { useState, useEffect } from 'react';
import './App.css';
import Data from './Data';
import Form from './components/Form';
import TeamMembers from './components/TeamMembers';


function App() {

  const[members, setMembers] = useState([])

  useEffect(() => {
    setMembers(Data)
  },[])

  const addTeamMate = mate => {
    const newMate = setMembers([...members, mate])
  }

  return (
    <div className="App">
      <Form addTeamMate= {addTeamMate} />
      {members.map(member => {
        return <TeamMembers key={member.email} info={member}/>

      })}
    </div>
  );
}

export default App;
