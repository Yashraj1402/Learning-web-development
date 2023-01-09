import Button from "./Button";

const LoginForm = ({onClick}) => {
  return (
    <div>
      <form className="forms">
          <header className="title">CP Lockouts</header>
          <div><input type="text" placeholder='User Name/Email'/></div> 
          <div><input type="text" placeholder='Password' /></div>
          <Button color="aliceblue" text="Log In"></Button>
      </form>
      <div className="footerMsg">New here? <span onClick={onClick} className="formSwitchbtn">Register</span></div>
    </div>
  )
}

export default LoginForm

