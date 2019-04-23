import React, { Component } from 'react';
import axios from 'axios'
import Child from './child'

class Team extends Component {

    constructor(){
        super()
        this.state = {
            children: [],
            teamnName:"",
            url:"http://localhost:5000/api/teams/",
            selected: [],
            teams: [],
            id:"",
            button:"Add Team"
        }
        this.getChildren()
        this.createTeam = this.createTeam.bind(this)
        this.createChild = this.createChild.bind(this)
        this.onValueChange = this.onValueChange.bind(this)
        this.onSelected = this.onSelected.bind(this)
    }

    getChildren() {
        axios.get(this.state.url)
        .then( response => {
            response.data = response.data.filter( (child) => {
                return child.team === ''
            })
            this.setState({ children:response.data }) })
        .catch( err => { console.log(err) })
    }

    getTeams() {
        if (this.state.teams.length === 0){
            axios.get(this.state.url+"getTeams")
            .then( response => {
                this.setState({ teams:response.data }) })
            .catch( err => { console.log(err) })    
        } else {
            this.setState({ teams:[] })
        }
    }

    async createTeam() {
        await axios.post(this.state.url+"createTeam", {
            name:this.state.teamName,
            children:this.state.selected,
        })
        this.state.selected.map( async (child) => {
            await axios.put(this.state.url+child._id, {
                team:this.state.teamName,
                name:child.name,
                age:child.age,
                familyStatus:child.familyStatus,
                educationalLevel:child.educationalLevel    
            })    
        })
        window.location.reload()
    }

    createChild() {
        axios.post(this.state.url, {
            team:"",
            name:this.state.name,
            age:this.state.age,
            familyStatus:this.state.familyStatus,
            educationalLevel:this.state.educationalLevel
        })
        window.location.reload()
    }

    deleteTeam(id) {
        axios.delete(this.state.url+"deleteTeam/"+id)
        window.location.reload()
    }

    updateTeam() {
        axios.put(this.state.url+"updateTeam/"+this.state.id, 
        {name:this.state.teamName, children:this.state.selected})
        window.location.reload()
    }

    async editTeam(team) {
        var children = []
        for (var i = 0; i < team.children.length; i++){
            await axios.get(this.state.url+team.children[i]).then( response => {children.push(response.data)})
        }
        this.setState({ teamName:team.name, selected:children, id:team._id, button:'Update Team' })
    }

    onValueChange(event) {
        this.setState({ [event.target.name]:event.target.value })
    }

    onSelected(event) {
        var newSelected = this.state.selected
        var newChildren = this.state.children
        for (var i=0; i < this.state.children.length; i++) {
            if (this.state.children[i].name === event.target.value) {
                axios.put(this.state.url+this.state.children[i]._id, {
                    team:this.state.teamName,
                    name:this.state.children[i].name,
                    age:this.state.children[i].age,
                    familyStatus:this.state.children[i].familyStatus,
                    educationalLevel:this.state.children[i].educationalLevel
                })      
                newSelected.push(this.state.children[i])
                if (newChildren.length === 1) newChildren.pop()   
                else newChildren.splice(newChildren.indexOf(this.state.children[i]),1)
                this.setState({  selected:newSelected, children:newChildren })
            }
        }
    }

    mapper(child) {
        return (
            <div>
                Name : { child.name } - 
                Team : { child.team } - 
                Age : { child.age } - 
                Family Status : { child.familyStatus } - 
                Educational Level : { child.educationalLevel }
                <button onClick={ () => this.onRemoved(child) } >
                X   
                </button>
            </div>
        )
    }

    teamMapper(team) {
        return (
            <div>
                <div> Name : { team.name } 
                <button onClick={ () => this.editTeam(team) } >
                Edit
                </button>
                <button onClick={ () => this.deleteTeam(team._id) } >
                Delete
                </button>
                </div>
                Children{ team.children.map( (child) => {
                        return <div key={child}> <Child id={child}></Child></div>
                    })}
            </div>
        )
    }

    render () {
        return (
            <div className="Team" style={{fontSize:'16px',fontWeight:'bold'}}>
                <div style={{backgroundColor:'#483D8B', padding:'10px', textAlign:'center'}}>
                    <button onClick={ () => this.getTeams() } >
                    Teams
                    </button>
                    <br/>
                        { this.state.teams.map( (team) => {
                            return <div key={team._id}> {this.teamMapper(team)} </div> 
                        })}
                </div>
                <div style={{backgroundColor:'#483D8B', padding:'10px'}}>
                    Name<input type="text" value={this.state.teamName} name="teamName" onChange={this.onValueChange}/>
                    Children <select onChange={this.onSelected}>
                        <option selected="selected">Children</option>
                        {
                            this.state.children.map( (child) => {
                                return <option key={child._id} value={child.name}>{child.name}</option>
                            })
                        }
                    </select>
                    <button onClick={ () => { 
                        if (this.state.button === 'Add Team') {
                            this.createTeam()
                        } else {
                            this.updateTeam()
                        }}}>
                    {this.state.button}
                    </button>
                    {
                        this.state.selected.map( (child) => {
                            return <div key={child._id}>{this.mapper(child)}</div>
                        } )
                    }
                </div>
                <div style={{backgroundColor:'#483D8B', padding:'10px'}}>
                    Name<input type="text" value={this.state.name} name="name" onChange={this.onValueChange}/>
                    Age<input type="number" value={this.state.age} name="age" onChange={this.onValueChange}/>
                    Family Status<input type="text" value={this.state.familyStatus} name="familyStatus" onChange={this.onValueChange}/>
                    Educational Level<input type="text" value={this.state.educationalLevel} name="educationalLevel" onChange={this.onValueChange}/>
                    <button onClick={ () => { this.createChild() }}>
                    Add Child
                    </button>
                </div>
            </div>
        )
    }
}
export default Team