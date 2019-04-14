import React, { Component } from 'react';
import axios from 'axios';


class ProfileList extends Component {
    state ={
        Profiles:[],
    };

    componentDidMount(){
        axios.get('./routes/api/workshopOwners').then(res => {this.setState({Profiles: res.data})});
    }


    render(){
        return(
            <>
                <ul>
                    {this.state.Profiles.map(Profiles => 
                    <ul> 
                        <li>{Profiles.Description}</li>
                        <li>{Profiles.Contact}</li>
                        <li>{Profiles.id}</li> 
                    </ul>)}
                </ul>
            </>
        )
    }
}
export default ProfileList;