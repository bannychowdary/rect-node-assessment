import React from 'react';
import axios from 'axios';


class DataStore extends React.Component {   
     constructor(props){
    super(props)
    this.state={
        modelState:[]
    }
}

componentWillMount(){
    this.getRemoteData()
}
getRemoteData(){
    axios.post("http://localhost:1234/all").then((response)=>{
        console.log(response.data)
        console.log("Before")
        console.log(this.state.modelState)
        this.setState(
            {
                modelState:response.data
            }
        )

    }
    
    )
}


displayFriendCard(){

    return this.state.modelState.map((onefriend)=>{
        return(
            <FriendCard 
            title={onefriend.title} desc={onefriend.description} link={onefriend.tags}  >
            </FriendCard>
        )
    })
   }

render() {
    return (
        <div>
            <div class="row">
                {this.displayFriendCard()}
            </div> 


            




        </div>
    );
}
}
 
export default DataStore;