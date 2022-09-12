import { useNavigate } from "react-router-dom"
import "../styles/LandingPage.css"
const LandingPage = () => {
  return (
    <>
    <div>MyTodos</div>
     <div className="loader">
        <span></span>
        <span></span>
        <span></span>
     </div>
    </>
  )
}

export default LandingPage;