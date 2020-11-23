import React, { Component } from "react";

class BadgeForm extends Component {
  handleChange = (e) => {
    console.log({
      name: e.target.name, //nombre de evento
      value: e.target.value, //valor
    });
  };
  handleClick = (e) => {
    console.log("se clikeo"); //algo sucedio
  };
  handleSubmit = (e) => {
    //para wue no se envie el form
    e.preventDefault();
    console.log("se envio");
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
