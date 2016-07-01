import React from "react"
import ReactDOM from "react-dom"
import Layout from "./layout"

export default class Navbar extends React.Component {


	render() {

		return (
			<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation" id="navbar">
			<div className="container">
	        <div className="navbar-header">
	            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
	                    aria-expanded="false" aria-controls="navbar">
	                <span className="sr-only">Toggle navigation</span>
	                <span className="icon-bar"></span>
	                <span className="icon-bar"></span>
	                <span className="icon-bar"></span>
	            </button>
	            <a href="/" className="navbar-brand"> Marin Vlastelica Pogancic</a>
	        </div>

	        
	        <div id="navbar" className="collapse navbar-collapse">
	            <ul className="nav navbar-nav">
	                <li ><a href="/projects">Projects</a></li>
	                <li ><a href="/contact">Contact</a></li>
	            </ul>
	        </div>
	    </div>
	 </nav>
)

	}


}
