import React, { Component } from 'react';
import axios from 'axios'

class Child extends Component {

    constructor(){
        super()
        this.state = {
            children: [],
            id:"", team:"", name:"", age:0, familyStatus:"", educationalLevel:"" ,
            url:"http://localhost:3000/api/teams/",
            button:"Add Child",
            show:false
        }
        this.getChildren = this.getChildren.bind(this)
        // this.getChild = this.getChild.bind(this)
        this.createChild = this.createChild.bind(this)
        this.updateChild = this.updateChild.bind(this)
        this.deleteChild = this.deleteChild.bind(this)
        this.onValueChange = this.onValueChange.bind(this)
        this.showFields = this.showFields.bind(this)
        this.show = this.show.bind(this)
    }

    getChildren() {
        axios.get(this.state.url)
        .then( response => {this.setState({ children:response.data }) })
        .catch( err => { console.log(err) })
    }

    // getChild(id) {
    //     axios.get(this.state.url+id)
    //     .then( response => { this.setState({ child:response.data}) })
    //     .catch( err => { console.log(err) })
    // }

    createChild() {
        axios.post(this.state.url, {
            team:this.state.team,
            name:this.state.name,
            age:this.state.age,
            familyStatus:this.state.familyStatus,
            educationalLevel:this.state.educationalLevel
        })
    }

    updateChild() {
        axios.put(this.state.url+this.state.id, {
            team:this.state.team,
            name:this.state.name,
            age:this.state.age,
            familyStatus:this.state.familyStatus,
            educationalLevel:this.state.educationalLevel
        })
    }

    deleteChild(id) {
        if (id) {
            axios.delete(this.state.url+id)
        }
    }

    onValueChange(event) {
        this.setState({ [event.target.name]:event.target.value })
    }

    showFields(child) {
        this.setState({ button:"Update Child", id:child._id, team:child.team, name:child.name, 
        age:child.age, familyStatus:child.familyStatus, educationalLevel:child.educationalLevel })
    }

    show() {
        this.setState({ show:true })
    }

    mapper(child) {
        return (
            <div>
                Name : { child.name }
                { this.state.show && 
                <p> Team : { child.team } - Age : { child.age } - Family Status : { child.familyStatus } - 
                Educational Level : { child.educationalLevel } </p>}
                <button onClick={ () => this.show() } >
                Show
                </button>
                <button onClick={ () => this.deleteChild(child._id) }>
                Delete
                </button>
                <button onClick={ () => this.showFields(child) }>
                Edit
                </button>
            </div>
        )
    }

    render () {
        return (
            <div className="Child">
                <button onClick={ () => this.getChildren() } >
                Children
                </button>
                <br/>
                    { this.state.children.map( (child) => {
                        return <div> {this.mapper(child)} </div> 
                    })}
                <div>
                    Team<input type="text" value={this.state.team} name="team" onChange={this.onValueChange}/><br/>
                    Name<input type="text" value={this.state.name} name="name" onChange={this.onValueChange}/><br/>
                    Age<input type="text" value={this.state.age} name="age" onChange={this.onValueChange}/><br/>
                    Family Status<input type="text" value={this.state.familyStatus} name="familyStatus" onChange={this.onValueChange}/><br/>
                    Educational Level<input type="text" value={this.state.educationalLevel} name="educationalLevel" onChange={this.onValueChange}/><br/>
                    <button onClick={ () => {
                        if (this.state.button==="Add Child") {
                            this.createChild() 
                        } else { 
                                this.updateChild()
                             }
                        }}>
                    {this.state.button}
                    </button>
                </div>
            </div>
        )
    }
}
export default Child