import React from 'react';

const Placeholder = (props) =>{
    let li = props.data.map((item, i) =>{
        return props.limit >= i ? <div class='col-sm-6 col-xs-12 col-md-4 col-lg-4' key={i}><div class="item"><h4>{item.title}</h4><img src={item.thumbnailUrl} /><div class="item-footer"><button type="button" class="btn btn-success">Buy Now!</button> <span class="label pull-right label-warning">From £{item.price}</span></div></div></div> : null
    });
    return(        
        <div className="placeholder">
            <div class="row">
                {li}
            </div>
        </div>
    )
};

export default Placeholder;