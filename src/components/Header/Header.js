import "./Header.css"  
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="quiz-header">
        <Link to="/home" className="quiz-title">Stunning Quiz App</Link>
        <hr className="divider"></hr>
    </div>
  )
}

export default Header