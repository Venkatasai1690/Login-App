// Write your code here
import './index.css'

const Login = props => {
  const {onClickLogin} = props
  return (
    <button className="button" type="button" onClick={onClickLogin}>
      Login
    </button>
  )
}

export default Login
