import React, { Component } from "react";
import "./App.css";
import List from "./List/List";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: [],
    };
  }

  addProducts = () => {
    let newName = prompt("Introduce nombre de producto");

    if (newName !== "") {
      this.setState({ name: [...this.state.name, newName] });
    } else {
    }
  };

  render() {
    return (
      <div className="App">
        <h2>PROPS ENTRE COMPONENTES DE CLASE</h2>

        <div className="container">
          <p className="green">Este es el componente padre APP</p>
          <h1>LISTA DE LA COMPRA</h1>

          <div className="container-products">
            <p>Este es el div container-products</p>
            <button onClick={this.addProducts} className="add-product-button">
              Añadir producto
            </button>
            <List product={this.state.name} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
