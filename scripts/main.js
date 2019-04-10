import React from 'react';
import ReactDOM from 'react-dom';
import Router from '../views/router';
window.onload = function(){
  ReactDOM.render(
  	<Router />, 
  	document.getElementById('app')
  );
}
