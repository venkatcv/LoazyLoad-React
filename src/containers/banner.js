import React, { Component } from 'react';
import logo from '../images/fashion-fashionable-footwear-267301.png';

class Banner extends Component {
    
    render(){
        return (
            <div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div class="banner">
							<img src={logo} />
						</div>
					</div>
				</div>
			</div>
        )
    }
}

export default Banner;