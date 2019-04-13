import React from 'react';
import axios from 'axios';

export default class Getrec extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            form: [],
            id:""
         };
    }

    idonChange (event){
        this.setState({id: event.target.value});
        }


    change = e => {
        this.props.onChange({[e.target.name]: e.target.value})
        this.setState({
            [e.target.name]: e.target.value

        });
    };


    onSubmit = (e) => {
       e.preventDefault();
       axios.get(`http://localhost:5000/api/RecruitmentForms/${this.state.id}`)
        .then(res => {
            this.setState({ form: res.data.data });
            console.log(res);
        });
    };


    render() { 
        return(
            <form>
                 <br/>
                  <h1>Get a Certain Recruitment Form :</h1>
                  
                  <input type="text"  placeholder="Form ID" value={this.state.value} style={{ flex: '10', padding: '5px' }} onChange={this.idonChange.bind(this)}/><br/>
                 <input 
                     type="submit" 
                     className="btn"
                     style={{flex: '1'}}
                     onClick={this.onSubmit.bind(this)} />

                <ul> 
                      <li>ClientName: {this.state.form.ClientName} Age: {this.state.form.age} Address: {this.state.form.address} InterviewDate: {this.state.form.InterviewDate} InterviewTime: {this.state.form.InterviewTime}</li>
                </ul>

            </form>

        );
    }
}

