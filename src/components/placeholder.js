import React from 'react';

const Placeholder = (props) =>{
    let li = props.data.map((item, i) =>{
        return props.limit >= i ? <li key={i}>{item.title}<p>{item.body}</p></li> : null
    });
    return(        
        <div className="placeholder">
            <ul>
                {li}
            </ul>
        </div>
    )
};

export default Placeholder;