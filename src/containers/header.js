import React, { Component } from 'react';


class Navigation extends Component {
    
    render(){
        return (
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
        )
    }
}

export default Navigation;