import React, { useState }from 'react';
import { PeopleList } from './features/PeopleList/PeopleList'
import { AddPerson } from './features/AddPerson/AddPerson'
import { AssignPeople } from './features/AssignPeople/AssignPeople'


function App() {

  const [names, setNames] = useState<string[]>([])

  function createList(newName: string) {
  
    setNames([...names, newName])
  }


  return (
    <div className="App">
      <h1></h1>
      <AddPerson onCreate={createList}></AddPerson>
      <PeopleList names={names}/>
      <AssignPeople />
    </div>
  );
}

export default App;
