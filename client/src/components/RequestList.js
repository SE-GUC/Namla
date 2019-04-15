import React, { Component } from 'react';
import axios from 'axios';


class RequestList extends Component {
    state ={
        Request:[],
    };

    componentDidMount(){
        axios.get('./routes/api/skillRequests').then(res => {this.setState({Request: res.data})});
    }


    render(){
        return(
            <>
                <ul>
                    {this.state.Request.map(Request => 
                    <ul>
                        <li>{Request.Skill}</li>
                        <li>{Request.NebnyUser}</li>
                        <li>{Request.id}</li> 
                    </ul>)}
                </ul>
                <button onClick={this.handleClick}>Read All Requests for skills</button>
            </>
        )
    }
}
export default RequestList;