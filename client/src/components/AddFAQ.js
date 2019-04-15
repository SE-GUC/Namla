import React , {Component} from 'react'

export class AddFAQ extends Component{
    state = {
        title: ''
    }
    onSubmit = (e) => {
       e.preventDefault(); 
       this.props.AddFAQ(this.state.title);
       this.setState({title:''});
    }

    onChange = (e) => this.setState({title: e.target.value});


    render(){
        return(
            <form onSubmit={this.onSubmit}  style={{display: 'flex'}}>
             <input
              type="text" 
              name="title" 
              style={{ flex: '10',padding:'5px' }}
              placeholder="Add FAQ ..."
              value={this.state.title}
              onChange={this.onChange}
              />
              <input 
              type ="submit" 
              value = "submit"
              className="btn"
              style={{flex:'1'}}
              />

            </form>
        )
    }
}

export default AddFAQ