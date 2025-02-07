import { useEffect, useState } from "react";
import "../../Styles/Home/Intro.css";

const Intro = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1000);
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className={`page-bg ${fadeOut ? "fade-out" : ""}`}>
      <div className="page-overlay">
        <div className="Fi-name main-head">
          {["S", "H", "A", "S", "H", "W", "A", "T"].map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
        <div className="main-head La-name">
          {["S", "H", "A", "R", "M", "A"].map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
