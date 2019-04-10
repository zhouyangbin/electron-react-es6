import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
class Nav extends Component {
	 constructor(props){
    	super(props);
	    this.state = {
	    	index:"click me"
	    };
	 }
	 componentDidMount(){
	 	console.log(this.refs.zyb);
	 	// this.refs.zyb.click = this.abc()
	 }
	 abc(){
	 	console.log(123)
  	}
  render() {
    return (
    	<div id="menus-nav">
            <span ref="zyb" style={{width:'50px',height:'30px',background:'red',margin:'20px',cursor:' pointer'}} onClick={()=>this.abc()}>{this.state.index}</span>
            <button>home</button>
      </div>
      );
  }
};
export default Nav