import React, { Component } from 'react';
//import './css/App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:null,
      ipone:17160125384
    }
  }
  componentDidMount(){
    var text = $(this.refs.container).text();
    this.setState({text:text})
  }
  render() {
    return (
      <Router>
        <div ref='container' className='container'>
          <Header />
          
        </div>
      </Router>
    );
  }
}

export default App;
