import {useState} from 'react';
import LogIn from "./components/LoginForm";
import SignUp from "./components/SingupForm";

function App() {
  const [formType, setformType] = useState(0)

  const toggleForm = ()=>{
    setformType(formType^1)
  }

  return (
    <div className="body">
      {formType == 0 ? <LogIn onClick={toggleForm}></LogIn> : <SignUp onClick={toggleForm}></SignUp>}
    </div>
  );
}

export default App;
