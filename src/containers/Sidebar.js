import React, { Component } from 'react';


class Sidebar extends Component {
    
    render(){
        return (
            <div class="sidebarleft">
				<div class="sidebar-nav">
				  <div class="navbar navbar-default" role="navigation">
					<div class="navbar-header">
					  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					  </button>
					  <span class="visible-xs navbar-brand">Sidebar menu</span>
					</div>
					<div class="navbar-collapse collapse sidebar-navbar-collapse">
					  <ul class="nav navbar-nav">
						<li class="active"><a href="#">Menu Item 1</a></li>
						<li><a href="#">Menu Item 2</a></li>
						<li><a href="#">Menu Item 3</a></li>
						<li><a href="#">Menu Item 4</a></li>
						<li><a href="#">Reviews <span class="badge">1,118</span></a></li>
					  </ul>
					</div>
				  </div>
				</div>
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
        )
    }
}

export default Sidebar;