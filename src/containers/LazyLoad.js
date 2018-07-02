import React, { Component } from 'react';

import Placeholder from '../components/placeholder';
import * as Source from '../components/DataSoruce';

class LazyLoad extends Component {
    state ={
        limit:5
    }
    render(){
        return (
            <div>
            <Placeholder data={Source.Data} limit={this.state.limit}/>
            <button class="btn btn-primary active" onClick={() => {this.LoadDataHandler(this.state.limit)}}>Load more results</button>
			<span> &nbsp; </span>
            <button class="btn btn-primary btn-info" onClick={() => {this.Reset(5)}}>Reset</button>
            </div>
        )
    }

    LoadDataHandler = (e) =>{
      let  loadCount =  e+6;
      this.setState({limit:loadCount});
    }
    Reset = (e) =>{
      this.setState({limit:5});
    }
}

export default LazyLoad;