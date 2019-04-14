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

                 <br/>
                  <h1>All Recruitment Forms :</h1>
                  <ul> 
                    {this.state.form.map(formm => ( 
                         <li key={formm._id}>ClientName: {formm.ClientName} Address: {formm.address} Age: {formm.age} InterviewDate: {formm.InterviewDate} InterviewTime: {formm.InterviewTime}</li>
                    ))}
                 </ul>
                   
            </form>

        );
    }
}

