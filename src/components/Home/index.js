import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoLG from "../../assets/images/ce-logo-wht.png";

const Home = () => {
return (
<div className="container">
    <div className="row">
        <div className="col-md-6">
        <img className="home-logo" src={LogoLG} alt="CAE" />
        </div>
        <div className="col-md-6">
            Intro Goes Here!
        </div>
    </div>
</div>
  );
};

export default Home;
