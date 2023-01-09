import Button from "./Button";

const LoginForm = ({onClick}) => {
  return (
    <div>
      <form className="forms">
          <header className="title">CP Lockouts</header>
          <div><input type="text" placeholder="Email" /></div>
          <div><input type="text" placeholder="Password"/></div>
          <Button color="aliceblue" text="Sign Up"></Button>
      </form>
      <div className="footerMsg">Already registered? <span onClick={onClick} className="formSwitchbtn">Log In</span></div>
    </div>
  )
}

export default LoginForm

