// Write your code here
import './index.css'

const Logout = props => {
  const {onClickLogout} = props
  return (
    <button className="button" type="button" onClick={onClickLogout}>
      Logout
    </button>
  )
}

export default Logout
