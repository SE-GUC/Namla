import React, { Component } from 'react';
import axios from 'axios';

class ProfileForm extends Component {
    state={
        value:""
    }
    handleSubmit= e => {
        e.preventDefault();
        axios.post('./routes/api/workshopOwners', this.state);
    }

    handleChange= e => {
        e.preventDefault();
        this.setState({value:e.target.value});
    }

    render(){
        return(
            <>  
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Skill:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit Profile" />
                </form>
            </>
        )
    }
}
export default ProfileForm;