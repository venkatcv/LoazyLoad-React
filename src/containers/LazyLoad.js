import React, { Component } from 'react';

import Placeholder from '../components/placeholder';
import * as Source from '../components/DataSoruce';

class LazyLoad extends Component {
    state ={
        limit:10
    }
    render(){
        return (
            <div>
            <Placeholder data={Source.Data} limit={this.state.limit}/>
            <button onClick={() => {this.LoadDataHandler(this.state.limit)}}>Loda Data</button>
            <button onClick={() => {this.Reset(10)}}>Reset</button>
            </div>
        )
    }

    LoadDataHandler = (e) =>{
      let  loadCount =  e+10;
      this.setState({limit:loadCount});
    }
    Reset = (e) =>{
      this.setState({limit:10});
    }
}

export default LazyLoad;