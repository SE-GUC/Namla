import React, { Component } from 'react';
import axios from 'axios'

class Child extends Component {

    constructor(props){
        super(props)
        this.state = {
            child: { _id:"", team:"", name:"", age:0, familyStatus:"", educationalLevel:"" },
            id:"", team:"", name:"", age:0, familyStatus:"", educationalLevel:"",
            url:"http://localhost:5000/api/teams/",
            show:false,
            edit:false,
            button:"Show"
        }
        this.getChild(this.props.id)
        this.updateChild = this.updateChild.bind(this)
        this.deleteChild = this.deleteChild.bind(this)
        this.onValueChange = this.onValueChange.bind(this)
        this.showFields = this.showFields.bind(this)
        this.show = this.show.bind(this)
    }

    getChild(id) {
        axios.get(this.state.url+id)
        .then( response => { this.setState({ child:response.data}) })
        .catch( err => { console.log(err) })
    }

    updateChild() {
        axios.put(this.state.url+this.state.id, {
            team:this.state.team,
            name:this.state.name,
            age:this.state.age,
            familyStatus:this.state.familyStatus,
            educationalLevel:this.state.educationalLevel
        })
        this.setState({ edit:false })
    }

    deleteChild(id) {
        axios.delete(this.state.url+id)
        window.location.reload()
    }

    onValueChange(event) {
        this.setState({ [event.target.name]:event.target.value })
    }

    showFields(child) {
        this.setState({ edit:true, id:child._id, team:child.team, name:child.name, 
        age:child.age, familyStatus:child.familyStatus, educationalLevel:child.educationalLevel })
    }

    show() {
        if (this.state.show){
            this.setState({ show:false, button:"Show" })
        } else {
            this.setState({ show:true, button:"Hide" })
        }
    }

    render () {
        return (
            <div className="Child">
                { !this.state.edit &&
                <div style={{backgroundColor:'#483D8B', padding:'10px'}}>
                    Name : { this.state.child.name }
                    { this.state.show && 
                    <p> Team : { this.state.child.team } - Age : { this.state.child.age } - 
                    Family Status : { this.state.child.familyStatus } - Educational Level : { this.state.child.educationalLevel } </p>}
                    <button onClick={ () => this.show() } >
                    {this.state.button}
                    </button>
                    <button onClick={ () => this.deleteChild(this.state.child._id) }>
                    Delete
                    </button>
                    <button onClick={ () => this.showFields(this.state.child) }>
                    Edit
                    </button>
                </div>}
                { this.state.edit &&
                <div style={{backgroundColor:'#FA8072', padding:'10px'}}>
                    Name<input type="text" value={this.state.name} name="name" onChange={this.onValueChange}/>
                    Age<input type="number" value={this.state.age} name="age" onChange={this.onValueChange}/>
                    Family Status<input type="text" value={this.state.familyStatus} name="familyStatus" onChange={this.onValueChange}/>
                    Educational Level<input type="text" value={this.state.educationalLevel} name="educationalLevel" onChange={this.onValueChange}/>
                    <button onClick={ () => { this.updateChild() }}>
                    Update Child
                    </button>
                </div>}
            </div>
        )
    }
}
export default Child