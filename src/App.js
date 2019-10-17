import React, { useState } from 'react';
import MemberForm from "./components/MemberForm";
import MemberList from "./components/MemberList";

import './App.css';

function App() {
  const [members, setMembers] = useState([{
    name: "",
    email: "",
    role: "" 
  }]);

  const addNewMembers = member => {
      setMembers([...members, member]);
  };

  return (
      <div className="App">
          <h3>Create New Team Member</h3>
          <MemberForm addNewMembers={addNewMembers} /><br />

          <h2>Team Member List</h2>
          <MemberList memberList={members}/>
      </div>
  )
}


export default App;
