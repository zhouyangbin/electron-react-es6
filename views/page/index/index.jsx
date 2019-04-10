import React from 'react';
import Header from '../nav/index';
class Index extends React.Component {
	constructor(){
    	super();
	    this.state = {
	    };
	 }
	 componentWillMount(){
 	 }
	 location(){
	 	console.log(123)
  	}
  render() {
    return  <main className="home-container">
     	<Header title='首页' record />
    	<div onClick={() => this.location()}>index</div>
    </main>;
  }
};
export default Index