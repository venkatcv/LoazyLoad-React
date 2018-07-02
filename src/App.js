import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LazyLoad from './containers/LazyLoad';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

		
		<nav class="navbar navbar-inverse">
		  <div class="container container-fluid">
			<div class="navbar-header">
			  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>                        
			  </button>
				<div>
					<h1 className="App-title">Venkat Demo</h1>
				</div>
			</div>
			<div class="collapse navbar-collapse" id="myNavbar">
			  <ul class="nav navbar-nav">
				<li class="active"><a href="#">Home</a></li>
				<li class="dropdown">
				  <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
				  <ul class="dropdown-menu">
					<li><a href="#">Page 1-1</a></li>
					<li><a href="#">Page 1-2</a></li>
					<li><a href="#">Page 1-3</a></li>
				  </ul>
				</li>
				<li><a href="#">Page 2</a></li>
				<li><a href="#">Page 3</a></li>
			  </ul>
			  <ul class="nav navbar-nav navbar-right">
				<li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
				<li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
			  </ul>
			</div>
		  </div>
		</nav>
          
        </header>
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
					<div class="sidebarleft">
						<h2>Basic Form</h2>
					  <form>
						<div class="form-group">
						  <label for="email">Email:</label>
						  <input type="email" class="form-control" id="email" placeholder="Enter email" />
						</div>
						<div class="form-group">
						  <label for="pwd">Password:</label>
						  <input type="password" class="form-control" id="pwd" placeholder="Enter password" />
						</div>
						<div class="checkbox">
						  <label><input type="checkbox" /> Remember me</label>
						</div>
						<button type="submit" class="btn btn-default">Submit</button>
					  </form>
					</div>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
					<LazyLoad />
				</div>
			</div>
		</div>
      </div>
    );
  }
}

export default App;
