import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Search from "./src/pages/Search";
import Table from "../src/components/Table";


const App = () => {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
