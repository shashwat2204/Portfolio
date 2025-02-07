import Navbar from "../../Components/Navbar";
import "../../Styles/About/AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <div className="aboutMe">
        <div className="aboutMe-box">
          <span>
            <p>👋 Hi, I’m Shashwat Sharma,</p>
            <p>
              a passionate third-year Computer Science student at Amity
              University, Noida with a deep interest in AI/ML and Full-Stack
              Development. I specialize in C++, JavaScript (MERN stack), and
              Python (Machine Learning) and enjoy building scalable and
              efficient applications.
            </p>

            <p>
              Currently, I work part-time as a Web Developer at a startup, where
              I contribute to real-world projects, enhancing my technical and
              problem-solving skills. I actively participate in hackathons like
              Smart India Hackathon, Sparkathon, Cybercup 3.0 & 4.0, Imagine
              Cup, CSS Flair, Spooktober Fest, and Hackfest, gaining hands-on
              experience in competitive coding and teamwork. Additionally, I
              challenge myself in coding competitions on HackerRank and
              GeeksforGeeks to refine my skills.
            </p>

            <p>
              With aspirations of becoming a Software Engineer or working in
              AI/ML, I am always eager to learn and explore new technologies.
              Beyond coding, I love playing badminton and singing, which keeps
              me motivated and balanced.
            </p>

            <p>
              🚀 I’m always open to collaborations and exciting tech
              discussions. Feel free to explore my work and connect with me
              through the contact page!
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
