import React, { Component } from 'react';
import axios from 'axios'


export class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state ={
            file: [],
            filename:"",
            uploadDate:"",
            length:"",
            image:null,
            imagename:[],
            filee:[]
           
          };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.fileChange.bind(this);

      }

  fileChange=event =>{
    this.setState({image:event.target.files[0]})
    let files=event.target.files[0];
    let reader=new FileReader();
    reader.readAsDataURL(files);
   //console.log(reader)
    reader.onload = function (e){
      this.setState({
        imgSrc: [reader.result]
      })    
       console.log( e.target.result)

    }.bind(this);
    console.log(event.target.files[0])
     }




  fileUpload =event=>{
    event.preventDefault();
    const fd =new FormData();
    fd.append('file',this.state.image)
    axios
    .post('http://localhost:5000/api/gallery/upload',fd)
    .then(res=>{
      console.log(res.data.message);}
    ,(err)=>{
      console.log(err.message);}
    ) 
  }
  // onSubmit =event=>{
  //   event.preventDefault();
  //   axios
  //   .get('http://localhost:5000/api/gallery/home')
  //   .then(res => {
  //       this.setState({file:res.data.files.map(file =>file)})
  //       axios.get(`http://localhost:5000/api/gallery/download/${res.data.files[0].filename}`)
  //       .then(res=> {
  //         this.setState({filee:res.data})
  //         console.log(res.data)

        
  //       })
  //       console.log(res.data)
  //       })
  // }

  delImage = (filename) => {
    axios.delete(`http://localhost:5000/api/gallery/delete/${filename}`)
      .then(res =>    console.log(res)
      );
  } 
  
  onSubmit =event=>{
    event.preventDefault();
    axios
    .get('http://localhost:5000/api/gallery/home')
    .then(res1 => {
      this.setState({file:res1.data.files.map(file =>file)})
      // var index=this.state.file.indexOf(this.state.file)
      // console.log(index);

/* here i am trying to show all images but it's so complicated i have reached that 
i can show the image that i want or i choose it's index but all together still yet*/

        axios.get(`http://localhost:5000/api/gallery/download/${this.state.file[0].filename}`)
        .then(res=> {
          this.state.imagename.push(res.data)          
          this.setState({filee:res})
         
          console.log(res.data)        
        })

        
       
        console.log(res1.data)
        })
  }

  render(res) {
  return (
    <form >
      <div>
        <form>

                  <h1>GALLERY</h1>
                  <input type="submit" className="btn"style={{flex: '1'}}value="show gallery" onClick={this.onSubmit.bind(this)}/> 
                         <img src ={this.state.imgSrc} alt=""/> 
                   </form>   
                  <br/> 
                  <ul>
                  {this.state.file.map(filee => ( 
                  <li key={filee._id}>  
                  FileName:<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>{filee.filename}<span>&nbsp;&nbsp;&nbsp;&nbsp;</span> 
                  UploadDate: <span>&nbsp;</span> {filee.uploadDate}<span>&nbsp;&nbsp;&nbsp;&nbsp;</span> 
                  FileLength:<span>&nbsp;</span>{filee.length}MB

                  <button onClick={this.delImage.bind(this,filee.filename)} style={{flex: '1'}}>Delete</button>
                 <img src ={this.state.filee.data} alt=""/> 

                  </li>
                  ))}                 
                  </ul>
                  <input type="file"  className="file" onChange={this.fileChange.bind(this)} accept="image/*" />
                  <button onClick={this.fileUpload}>upload</button>
      </div>
    </form>
    );
  }
}

export default Gallery;
