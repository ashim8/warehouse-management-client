import React from "react";
import './FooterSection.css'
const FooterSection = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="contant bg-dark bg-gradient">
      <div>
        <h3 style={{ textAlign: "center", color: "white" }}>
            A S Warehouse
        </h3>
      </div>
      <footer className="text-center mt-5">
        <p>
          <small style={{textAlign: "center", color:"white"}}>copyright @ {year} </small>
        </p>
      </footer>
    </div>
  );
};

export default FooterSection;