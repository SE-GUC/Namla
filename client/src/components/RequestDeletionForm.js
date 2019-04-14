import React, { Component } from 'react';
import axios from 'axios';

class RequestDeletionForm extends Component {
    state={
        value:""
    }
    handleSubmit = e => {
        e.preventDefault();
        axios.delete(`./routes/api/skillRequests/${this.state.value}`);
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({value:e.target.value});
    }

    render(){
        return(
            <>  
                <form onSubmit={this.handleSubmit}>
                    <label>
                        ID of Request to be deleted:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit Request" />
                </form>
            </>
        )
    }
}
export default RequestDeletionForm;