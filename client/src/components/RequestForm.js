import React, { Component } from 'react';
import axios from 'axios';

class RequestForm extends Component {
    state={
        Skill:""
    }
    handleSubmit(e){
        e.preventDefault();
        axios.post('./routes/api/skillRequests', this.state);
    }

    handleChange(e){
        e.preventDefault();
        this.setState({Skill:e.target.value});
    }

    render(){
        return(
            <>  
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Skill:
                        <input type="text" value={this.state.Skill} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit Request" />
                </form>
            </>
        )
    }
}
export default RequestForm;