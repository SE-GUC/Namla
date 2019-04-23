import React, { Component } from 'react';
import axios from 'axios'
import HeaderGallery from './Layout/HeaderGallery';



export class Admingallery extends Component {
    constructor(props) {
        super(props);
        this.state ={
            file: [],
            filename:"",
            uploadDate:"",
            length:"",
            image:null,
            imagename:[],
            files:[],
            Headers:localStorage.getItem('jwtToken')         
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
        imgSrcc: [reader.result]
      })    
       console.log( e.target.result)

    }.bind(this);
    console.log(event.target.files[0])
     }




  fileUpload =event=>{
    event.preventDefault();
    const fd =new FormData();
    fd.append('file',this.state.image)
    const headers = {
      'Authorization':localStorage.getItem('jwtToken')
    }
    axios
    .post('http://localhost:5000/api/gallery/upload',fd,{Header:headers})
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

  delImage = (filename,event) => {
    event.preventDefault();
    const headers = {
      'Authorization':localStorage.getItem('jwtToken')
    }

    axios.delete(`http://localhost:5000/api/gallery/delete/${filename}`,{Header:headers})
      .then(res =>    console.log(res)
      );
  } 
  /* here i am trying to show all images but it's so complicated i have reached that 
i can show the image that i want or i choose it's index but all together still yet*/

  onSubmit =event=>{
    event.preventDefault();
    axios
    .get('http://localhost:5000/api/gallery/home')
    .then(res1 => {
      this.setState({file:res1.data.files.map(file =>file)})

      this.setState({imagename:res1.data.files.map(file =>file.filename)})
      // var index=this.state.file.indexOf(this.state.file)
      // console.log(index);
      for (var i=0;i<this.state.imagename.length;i++){
        axios.get(`http://localhost:5000/api/gallery/download/${this.state.imagename[i]}`)
        .then(res=> {
            this.state.files.push(res.data)
            this.setState({
              imgSrc: res.data
            }) 
       })
     
      }

// console.log(this.state.files)
        })
  }
  

  render(res) {
    if (this.state.Headers!=null){
  return (
    
    <form >
      <div>
        <form>

        <HeaderGallery/>
                  <input type="submit" className="btn"style={{flex: '1'}}value="show gallery" onClick={this.onSubmit.bind(this)}/> 
                         <img src ={this.state.imgSrcc} alt=""/> 
                   </form>   
                  <br/> 
                  <ul>
                  {this.state.file.map((filee,index) => ( 
                  <li key={index}>  
                  FileName:<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>{filee.filename}<span>&nbsp;&nbsp;&nbsp;&nbsp;</span> 
                  UploadDate: <span>&nbsp;</span> {filee.uploadDate}<span>&nbsp;&nbsp;&nbsp;&nbsp;</span> 
                  FileLength:<span>&nbsp;</span>{filee.length}MB 
                  
                  {<img src ={this.state.imgSrc} height="200"width="200" alt=""/>}

                  
                  <div> 
                  <button onClick={this.delImage.bind(this,filee.filename)} style={{flex: '1'}}>Delete</button>
                  </div>
                  </li>
                  ))}     
           
                  </ul>
                  <input type="file"  className="file" onChange={this.fileChange.bind(this)} accept="image/*"   />
                  <button onClick={this.fileUpload}>upload</button>
      </div>
    </form>
    );
  }
  else {return (
    <div className="Gallery">

    <form >
      <div className="Gallery">
        <form>
        <HeaderGallery/>
                  <input type="submit" className="btn"style={{flex: '1'}}value="show gallery" onClick={this.onSubmit.bind(this)}/> 
                   </form>   
                  <br/> 
                  <ul>
                  {this.state.file.map((filee,index) => ( 
                  <li key={index}>  
                  FileName:<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>{filee.filename}<span>&nbsp;&nbsp;&nbsp;&nbsp;</span> 
                  
                  {<img src ={this.state.imgSrc} height="200"width="200" alt=""/>}

          </li>
                  ))}     
</ul>

      </div>
    </form>
    </div>
    );}
  
 
}

}

// Admingallery.propTypes = {
// 	login: PropTypes.func.isRequired,
// 	logout: PropTypes.func.isRequired,
// };
// const mapStateToProps = state => ({
// 	isLoggedIn: state.auth.isLoggedIn,
// 	loggedUser: state.auth.loggedUser,
// });

// export default connect(mapStateToProps,{ login, logout })(Admingallery);

export default Admingallery