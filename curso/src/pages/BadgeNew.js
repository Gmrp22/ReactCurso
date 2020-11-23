import React from "react"; // componente
import Navbar from "../components/Navbar.js";
import Badge from "../components/badge"
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import BadgeForm from "../components/BadgeForm"
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
          {/* fila y columna el badge dentro de un componente porque es
          otro */}
            <div className="col-6">
              <Badge
                firstName="Gilda"
                lastName="Rivera"
                twitter="Gmrp2210"
                jobTitle="Frontend Engineer"
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
              />
            </div>
            <div className="col-6">
              <BadgeForm

              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew; //exportar componente
