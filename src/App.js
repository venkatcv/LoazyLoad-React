import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './images/fashion-fashionable-footwear-267301.png';
import './App.css';

import LazyLoad from './containers/LazyLoad';
import Navigation from './containers/header';
import Sidebar from './containers/Sidebar';
import Banner from './containers/banner';
import Footer from './containers/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
			<Navigation />
        </header>
			<Banner />
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
					<Sidebar /> 
				</div>
				<div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
					<LazyLoad />
				</div>
			</div>
			
		</div>
		<div class="footer">
				<div class="row">
					<div class="col-xs-12">
						<Footer />
					</div>
				</div>
		</div>
      </div>
    );
  }
}

export default App;
