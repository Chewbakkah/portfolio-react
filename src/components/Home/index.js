import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoLG from "../../assets/images/ce-logo-wht.png";

const textArray1 = ['Hi!', 'Hello!', 'Greetings!', 'What\'s Up?', 'Hola!', 'Welcome!', 'Howdy,', 'Good Day!', 'Hey!', 'YO!', 'How YOU Doin?'];
const textArray2 = ['Web Developer', 'Front-End Engineer', 'UI/UX Designer', 'Back-End Dev', 'Full Stack Whiz', 'Graphic Designer', 'The Nerd'];

const Home = () => {
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);

    useEffect(() => {
        const timer = () => {
          setIndex1(prevIndex => {
            if(prevIndex === textArray1.length - 1){
              return 0;
            } 
            return prevIndex + 1;
          })
        };
        setInterval(timer, 5000);
        
        //cleanup function in order clear the interval timer
        //when the component unmounts
        return () => { clearInterval(timer); }
      }, []);

      useEffect(() => {
        const timer = () => {
          setIndex2(prevIndex => {
            if(prevIndex === textArray2.length - 1){
              return 0;
            } 
            return prevIndex + 1;
          })
        };
        setInterval(timer, 7000);
        
        //cleanup function in order clear the interval timer
        //when the component unmounts
        return () => { clearInterval(timer); }
      }, []);
    
    
return (
<div className="container-fluid">
    <div className="row align-items-center">
        <div className="col-lg-6 home-text-container">
            <span className="welcome-text">{textArray1[index1]}</span>
            <span className="intro-text">I'm Cheyne Etie,</span>
            <span className="job-text">{textArray2[index2]}</span>
            <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
        </div>
        <div className="col-lg-6 home-logo-container">
        <img className="home-logo" src={LogoLG} alt="CAE" />
        </div>
        
    </div>
</div>
  );
};

export default Home;





