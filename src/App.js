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
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress : 0
  }
  
  setProgress = (progress) =>{
    this.setState({progress : progress})
  }
  
  render() {
    return <div>
      <Router>
      <LoadingBar
        color='blue'
        height={4}
        progress={this.state.progress}
      />
      <Navbar/>
      <Routes>
          <Route exact path ='/'  element={<NewsComponent setProgress={this.setProgress}  key='general' pageSize={6} apiKey={this.apiKey} category='general'/>} />
          <Route exact path ='/home' element={<NewsComponent  setProgress={this.setProgress}  key='home' pageSize={6} apiKey={this.apiKey} category='general'/>} />
          <Route exact path ='/bussiness'  element={<NewsComponent  setProgress={this.setProgress} key='bussiness' pageSize={6} apiKey={this.apiKey} category='business'/>} />
          <Route exact path ='/entertainment'  element={<NewsComponent  setProgress={this.setProgress} key='entertainment' pageSize={6} apiKey={this.apiKey} category='entertainment'/>} />
          <Route exact path ='/health'  element={<NewsComponent  setProgress={this.setProgress} key='health' pageSize={6} apiKey={this.apiKey} category='health'/>} />
          <Route exact path ='/science'  element={<NewsComponent  setProgress={this.setProgress} key='science' pageSize={6} apiKey={this.apiKey} category='science'/>} />
          <Route exact path ='/sports'  element={<NewsComponent  setProgress={this.setProgress} key='sports' pageSize={6} apiKey={this.apiKey} category='sports'/>} />
          <Route exact path ='/technology'  element={<NewsComponent  setProgress={this.setProgress} key='technology' pageSize={6} apiKey={this.apiKey} category='technology'/>} />

      </Routes>
      
      {/* <Footer/> */}
      </Router>
    </div>;
  }
}


