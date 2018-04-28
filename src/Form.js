import React, {Component} from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends Component {
  state = {
    id: "",
    idError: "",

    age: "",
    ageError: "",

    name: "",
    nameError: "",

    gender: "",
    genderError: "",

    company: "",
    companyError: "",

    email: "",      
    emailError: "",

    phone: "",
    phoneError: "",

    address: "",
    addressError: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;

    const errors = {
      idError: "",
      ageError: "",
      nameError: "",
      genderError: "",    
      companyError: "",
      emailError: "",    
      phoneError: "",  
      addressError: ""
    };

    if (this.state.name.length < 5) {
      isError = true;
      errors.nameError = "name needs to be atleast 5 characters long";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();

    const err = this.validate();

    if (!err) {
      this.props.onSubmit(this.state);
      
      this.setState({
        id: "",
        idError: "",

        age: "",
        ageError: "",

        gender: "",
        genderError: "",

        company: "",
        companyError: "",

        name: "",
        nameError: "",

        email: "",
        emailError: "",

        password: "",
        passwordError: "",

        phone: "",
        phoneError: "",

        address: "",
        addressError: ""
      });
    }
  };

  render() {
    return (
      <form>
        <TextField
          name="id"
          hintText="Id"
          floatingLabelText="Id"
          value={this.state.id}
          onChange={e => this.change(e)}
          errorText={this.state.idError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="age"
          hintText="Age"
          floatingLabelText="Age"
          value={this.state.age}
          onChange={e => this.change(e)}
          errorText={this.state.ageError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="name"
          hintText="Name"
          floatingLabelText="Name"
          value={this.state.name}
          onChange={e => this.change(e)}
          errorText={this.state.nameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="gender"
          hintText="Gender"
          floatingLabelText="Gender"
          value={this.state.gender}
          onChange={e => this.change(e)}
          errorText={this.state.genderError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="company"
          hintText="Company"
          floatingLabelText="Company"
          value={this.state.company}
          onChange={e => this.change(e)}
          errorText={this.state.companyError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="email"
          hintText="Email"
          floatingLabelText="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
          errorText={this.state.emailError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="phone"
          hintText="Phone"
          floatingLabelText="Phone"
          value={this.state.phone}
          onChange={e => this.change(e)}
          errorText={this.state.phoneError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="address"
          hintText="Address"
          floatingLabelText="Address"
          value={this.state.address}
          onChange={e => this.change(e)}
          errorText={this.state.addressError}
          floatingLabelFixed
        />
        <br />      
        <RaisedButton label="Add" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}