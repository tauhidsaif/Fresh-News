import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import NavbarWithfunc from './components/NavbarWithfunc';
// import Footer from './components/Footer';

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API
  
  render() {
    return <div>
      <Router>
      {/* <NavbarWithfunc/> */}
      <Navbar/>
      <Routes>
          <Route exact path ='/'  element={<NewsComponent key='general' pageSize={6} apiKey={this.apiKey} category='general'/>} />
          <Route exact path ='/home' element={<NewsComponent  key='home' pageSize={6} apiKey={this.apiKey} category='general'/>} />
          <Route exact path ='/bussiness'  element={<NewsComponent key='bussiness' pageSize={6} apiKey={this.apiKey} category='business'/>} />
          <Route exact path ='/entertainment'  element={<NewsComponent key='entertainment' pageSize={6} apiKey={this.apiKey} category='entertainment'/>} />
          <Route exact path ='/health'  element={<NewsComponent key='health' pageSize={6} apiKey={this.apiKey} category='health'/>} />
          <Route exact path ='/science'  element={<NewsComponent key='science' pageSize={6} apiKey={this.apiKey} category='science'/>} />
          <Route exact path ='/sports'  element={<NewsComponent key='sports' pageSize={6} apiKey={this.apiKey} category='sports'/>} />
          <Route exact path ='/technology'  element={<NewsComponent key='technology' pageSize={6} apiKey={this.apiKey} category='technology'/>} />

      </Routes>
      
      {/* <Footer/> */}
      </Router>
    </div>;
  }
}


