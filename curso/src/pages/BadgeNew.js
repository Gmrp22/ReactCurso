import React from "react"; // componente
import Navbar from "../components/Navbar.js";
import Badge from "../components/badge";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import BadgeForm from "../components/BadgeForm";
class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            {/* fila y columna el badge dentro de un componente porque es
          otro */}
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
              {/* ESYA MANDANDO PROP onChange */}
            </div>
          </div>
        </div>
        </React.Fragment>
    );
  }
}

export default BadgeNew; //exportar componente
