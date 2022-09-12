import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";
const LandingPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
      setTimeout(() => {
        navigate("/todos")
      }, 8000);
    }, [])
  return (
    
    <>
      <div className="general-div">
        <center>
          <div className="text-mi">MyTodos</div>
          <div className="bouncing-loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </center>
      </div>
    </>
  );
};

export default LandingPage;
