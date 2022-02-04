import React, { Component } from "react";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
  }

  render() {
 
    return (
      <div className="container-list">
        <p className="red">Este es el componente LIST</p>
        <ul>
          <li> Producto : Tomate ✔️</li>
          <li> Producto : Manzana ✔️</li>
          {this.props.product.map((prod, i) => ( <li> Producto : {prod} ✔️</li> ))} 
        </ul>
      </div>
    );
  }
}

export default List;
