import {useState} from 'react';
import Header from "./components/Header";
import Birthdays from "./components/Birthdays";
import AddTask from "./components/AddTask";

function App() {
  const [bdays, setBdays] = useState([])


  // Delete Info:
  const deletePerson = (id) => {
    // console.log('delete ',id)

    setBdays(bdays.filter((person) => (
      person.id !== id
    )))
  }

  // Add Info:
  const addPerson = (info) =>{
    // console.log(info)
    const id = Math.floor(Math.random()*10000)+1
    const newPerson = {...info, id}
    // console.log(newPerson)

    setBdays([...bdays, newPerson])
    // console.log(info.birthMonth)
  }

  // Toggle Form:
  const [showForm, setshowForm] = useState(false)
  const toggleForm = () =>{
    if(showForm == true){
      setshowForm(false)
    } else{
      setshowForm(true)
    }
  }

  return (
    <main>
      <div className="container">
          <Header heading = "Birthday List" onClick={toggleForm} showForm={showForm} />
          {showForm == true ? <AddTask onAdd={addPerson}/> : ''}
          {bdays.length >= 1 ? <Birthdays bdays = {bdays} onDelete={deletePerson}/>:"No birthdays to show"}

      </div>
    </main>
  );
}

export default App;
