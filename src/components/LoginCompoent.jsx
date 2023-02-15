import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gender: "",
      file: null,
      errors: {},
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFileChange(event) {
    const file = event.target.files[0];
    this.setState({ file });
  }

  handleSubmit(event) {
    event.preventDefault();
    const errors = {};
    if (!this.state.name) {
      errors.name = "Name is required";
    }
    if (!this.state.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      errors.email = "Email is invalid";
    }
    if (!this.state.gender) {
      errors.gender = "Gender is required";
    }
    if (!this.state.file) {
      errors.file = "File is required";
    }
    if (Object.keys(errors).length === 0) {
      // form submission logic goes here
      console.log("Form submitted successfully");
    } else {
      this.setState({ errors });
    }
  }

  render() {
    const { name, email, gender, file, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </label>
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </label>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>
            Gender:
            <select
              name="gender"
              value={gender}
              onChange={this.handleInputChange}
            >
              <option value="">-- Please select --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
        <div>
          <label>
            File:
            <input type="file" name="file" onChange={this.handleFileChange} />
          </label>
          {errors.file && <span className="error">{errors.file}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
