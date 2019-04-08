import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            form: []
         };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/RecruitmentForms/')
        .then(res => {
            this.setState({ form: res.data.data });
            console.log(res);
        });
    }


    change = e => {
        this.props.onChange({[e.target.name]: e.target.value})
        this.setState({
            [e.target.name]: e.target.value

        });
    };


    onSubmit = (e) => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        this.setState({
            ClientName: '',
            address: '',
            age: '',
            InterviewDate: '',
            InterviewTime: ''

        });
        this.props.onChange({
            ClientName: '',
            address: '',
            age: '',
            InterviewDate: '',
            InterviewTime: ''

        });
    };


    render() { 
        return(
            <form>
                <input name ="ClientName"
                 placeholder ='ClientName'
                 value={this.state.ClientName}
                 onChange={e => this.change(e)}/>

                 <br/>
                 <input name ="address"
                  placeholder ='address'
                  value={this.state.address}
                  onChange={e => this.change(e)}/>
                 <br/>
                 <input name ="age"
                  placeholder ='age'
                  value={this.state.age}
                  onChange={e => this.change(e)}/>
                  <br/>

                 <input name="InterviewDate"
                  placeholder ='InterviewDate'
                  value={this.state.InterviewDate}
                  onChange={e => this.change(e)}/>
                  <br/>

                 <input name="InterviewTime"
                  placeholder ='InterviewTime'
                  value={this.state.InterviewTime}
                  onChange={e => this.change(e)}/>
                  <br/>
                  <button onClick={e => this.onSubmit(e)}>Submit</button>

                  {/* <br/>
                  <p>All Recruitment Forms :</p>
                  <ul>
                    {this.state.forms.map(formm => ( //console.log(formm.data[0]._id)
                         <li key={formm.data[0]._id}>{formm.data[0].ClientName}</li>
                    ))}
                 </ul> */}

                 <br/>
                  <p>All Recruitment Forms :</p>
                  <ul>
                    {this.state.form.map(formm => ( 
                         <li key={formm._id}>{formm.ClientName} {formm.address} {formm.age} {formm.InterviewDate} {formm.InterviewTime}</li>
                    ))}
                 </ul>

            </form>

        );
    }
}

