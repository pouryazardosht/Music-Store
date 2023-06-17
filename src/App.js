import React, { Component } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Banner />
      </div>
    )
  }
}

export default App;
