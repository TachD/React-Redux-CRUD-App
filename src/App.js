import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";

import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import Table from "./Table";

injectTapEventPlugin();

class App extends Component {
  state = {
    data: [
      {
        "id": "5a6b008747ee8d7357263198",
        "age": 40,
        "name": "Casandra Leblanc",
        "gender": "female",
        "company": "PHOTOBIN",
        "email": "casandraleblanc@photobin.com",
        "phone": "+1 (995) 458-2730",
        "address": "636 Prince Street, Needmore, Tennessee, 5197"
      },
      {
        "id": "5a6b0087cb6506cef3378424",
        "age": 30,
        "name": "Lucia Reed",
        "gender": "female",
        "company": "UNIA",
        "email": "luciareed@unia.com",
        "phone": "+1 (902) 507-2069",
        "address": "782 Ridgewood Avenue, Homeworth, Missouri, 948"
      },
      {
        "id": "5a6b0087eb6b2f630d741551",
        "age": 23,
        "name": "Rachael Finley",
        "gender": "female",
        "company": "INSOURCE",
        "email": "rachaelfinley@insource.com",
        "phone": "+1 (956) 425-3831",
        "address": "118 Ridge Court, Bedias, Mississippi, 1332"
      },
      {
        "id": "5a6b00875354977607dc7813",
        "age": 22,
        "name": "Reilly Patrick",
        "gender": "male",
        "company": "SENMEI",
        "email": "reillypatrick@senmei.com",
        "phone": "+1 (931) 582-2799",
        "address": "235 Thatford Avenue, Vaughn, Louisiana, 8555"
      },
      {
        "id": "5a6b00878e1696903536ff3a",
        "age": 31,
        "name": "Consuelo Hardin",
        "gender": "female",
        "company": "EXTREMO",
        "email": "consuelohardin@extremo.com",
        "phone": "+1 (890) 431-3134",
        "address": "402 Mermaid Avenue, Norris, New Mexico, 4919"
      }
    ],
    editIdx: -1
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Table
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleChange={this.handleChange}
            data={this.state.data}
            header={[
              {
                name: "Id",
                prop: "id"
              },
              {
                name: "Age",
                prop: "age"
              },
              {
                name: "Name",
                prop: "name"
              },
              {
                name: "Gender",
                prop: "gender"
              },
              {
                name: "Company",
                prop: "company"
              },
              {
                name: "Email",
                prop: "email"
              },
              {
                name: "Phone",
                prop: "phone"
              },
              {
                name: "Address",
                prop: "address"
              }
            ]}
          />

                    <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;