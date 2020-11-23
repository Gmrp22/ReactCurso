import React from "react"; // componente
import Navbar from "../components/Navbar.js";
import Badge from "../components/badge"
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Gilda"
                lastName="Rivera"
                twitter="Gmrp2210"
                jobTitle="Frontend Engineer"
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew; //exportar componente
