import { useState, useEffect } from "react";
import Intro from "./Intro";
import Home from "./Home";

const LandingPage = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return <div>{showIntro ? <Intro /> : <Home />}</div>;
};

export default LandingPage;
