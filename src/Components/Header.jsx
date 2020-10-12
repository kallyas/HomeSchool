import React, { Component } from "react";
import Nav from "./Nav";

export default class Header extends Component {
  render() {
    return (
      <header classNameName="border-bottom pt-3 pb-3">
        <Nav />
      </header>
    );
  }
}
