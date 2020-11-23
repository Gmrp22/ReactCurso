import React from "react";
import confLogo from "../images/badge-header.svg";
import './styles/Badge.css'
//svg en la variable conflogo lo hace create react app, empaqueta los archivos importados como imagen y hace dir a internet

//los componentes son clases
class Badge extends React.Component {
  render() {
    //define el resultado que se ve en pantalla
    
    return (
      <div className="Badge">
        <div className="Badge__header">
          {/* Saca de imagen */}
          <img src={confLogo} alt="Logo" />
          {/* En src no se puede dar un string, props, se le da una direccion
          no nos preocupamos  
          se le da un hash y el navegador ya no teine que recargar porque ya la tiene en cache
          */}
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src={this.props.avatarURL} alt="Avatar"></img>
          <h1> {this.props.firstName} <br /> {this.props.lastName}</h1>
        </div>
        <div className="Badge__section-info">
        <h3>{this.props.jobTitle}</h3>
          <div>
          @{this.props.twitter}
          </div>
        </div>
        <div className="Badge__footer">
          <footer>#platziconf</footer>
        </div>
      </div>
    );
  }
}
export default Badge; //exportar componente
