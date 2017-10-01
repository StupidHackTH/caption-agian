import React, { Component } from 'react'
import  { ref,get } from './config';
export default class Share extends Component {
    constructor(){
        super();
        this.state={
            src:''
        }
    }
    componentDidMount(){
        get.ref().child(`image/${this.props.match.params.id}/`).once('value',(snapshot)=>{
            let data = snapshot.val().src;
            console.log(data)
            this.setState({src:data})
         })
    }
    render() {
        console.log(this.props.match.params.id) 
        return (
            <div>
                <div  className="App">
 <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img  src={this.state.src} alt="Placeholder image"/>
    </figure>
  </div>
    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
    </div>
  </div>
  <footer className="card-footer">
    <p className="card-footer-item">
      <span>
         <a className='button is-white' href="#">Cancel</a>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button className="button is-danger" onClick={this.onSave}>save</button>
      </span>
    </p>
  </footer>
    </div>
    </div>
        )
    }
}
