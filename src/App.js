import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Newselement from './Components/NewsElement';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class  extends Component {

  apikey = process.env.REACT_APP_NEWS_API;
  state ={
    progress:0
  }
  
  setProgress = (progress) =>
  {
    this.setState({
      progress:progress,
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
        />
        <Routes>
        <Route exact path="/"element={<Newselement setProgress =  {this.setProgress} apikey = {this.apikey} key="general" country = 'in' category = 'general' />} />
        <Route exact path="/Home"element={<Newselement setProgress =  {this.setProgress} apikey = {this.apikey} key="Home" country = 'in' category = 'general' />} />
        <Route exact path="/buisness" element={<Newselement setProgress =  {this.setProgress} apikey = {this.apikey} key="buisness" country = 'in' category = 'buisness' />} />
        <Route exact path="/entertainment" element={<Newselement setProgress =  {this.setProgress} apikey = {this.apikey} key="entertainment" country = 'in' category = 'entertainment' />} />
        <Route exact path="/health" element={<Newselement setProgress =  {this.setProgress} apikey = {this.apikey} key="health" country = 'in' category = 'health' />} />
        <Route exact path="/sports" element={<Newselement setProgress =  {this.setProgress} apikey = {this.apikey} key="sports" country = 'in' category = 'sports' />} />
        <Route exact path="/science" element={<Newselement setProgress =  {this.setProgress} apikey = {this.apikey} key="science" country = 'in' category = 'science' />} />
        <Route exact path="/technology" element={<Newselement setProgress =  {this.setProgress} apikey = {this.apikey} key="technology" country = 'in' category = 'technology' />} />
        </Routes>
       </BrowserRouter>
      </div>
    )
  }
}
