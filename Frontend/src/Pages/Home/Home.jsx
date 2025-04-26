import Navbar from "../../Components/Navbar";
import "../../Styles/Home/Home.css";
import { Link } from "react-router-dom";
import { BiSolidChevronDownCircle } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <Navbar />
      <>
        <div className="home-bg">
          <div className="overlay">
            <div className="welcome">
              <div>
                <h1>
                  {" "}
                  Hello there<span className="excla">!</span>
                </h1>
                <div />
                <h4>Let’s build something extraordinary together.</h4>
              </div>
            </div>
            <div className="downarrow">
              <Link to="/about">
                <BiSolidChevronDownCircle className="downarrow-icon" />
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Home;
