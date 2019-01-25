
import React from 'react';

class DataStore extends React.Component {
    state = {  }
    render() { 
        return ( <div class="col-md-3" >
        <div class="card" style={{ width: `25rem` }}>
           <div class="card-body">
                <h5 class="card-title">{this.props.title}</h5>
                <p class="card-text">{this.props.desc}</p>
                <p class="card-text">{this.props.tags}</p>
                <a href="{this.props.link}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
); 
    }
}
 
export default DataStore;