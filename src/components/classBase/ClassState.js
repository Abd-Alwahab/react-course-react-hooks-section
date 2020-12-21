import React, { Component } from "react";

export default class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
    };
  }

  render() {
    return (
      <div>
        {this.state.error ? <h3>{this.state.error}</h3> : null}

        <button
          onClick={() =>
            this.setState({
              error: "can not login",
            })
          }
        >
          Login
        </button>
      </div>
    );
  }
}
