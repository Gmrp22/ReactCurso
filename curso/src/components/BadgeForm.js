import React, { Component } from "react";

class BadgeForm extends Component {
state={
  firstName: 'f'
};

  handleChange = (e) => {
    // console.log({
    //   name: e.target.name, //nombre de evento
    //   value: e.target.value, //valor
    // });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = (e) => {
    console.log("se clikeo"); //algo sucedio
  };
  handleSubmit = (e) => {
    //para wue no se envie el form
    e.preventDefault();
    console.log("se envio");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              //metodos de la clase
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              //metodos de la clase
              className="form-control"
              type="text"
              name="lastName"
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              //metodos de la clase
              className="form-control"
              type="text"
              name="email"
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.handleChange}
              //metodos de la clase
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.state.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.handleChange}
              //metodos de la clase
              className="form-control"
              type="text"
              name="Twitter"
              value={this.state.Twitter}
            />
          </div>

          <button onClick={this.handleClick()} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}
export default BadgeForm;
