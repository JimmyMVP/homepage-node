import React from "react"

export default class Navbar extends React.Component {


	render() {

		return (<div className="container">
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

	        
	        <img src="/images/profile.jpg" id="profile-pic-sm" />
	        <div id="navbar" className="collapse navbar-collapse">
	            <ul className="nav navbar-nav">
	                <li className="inactive"><a href="/projects">Projects</a></li>
	                <li className="inactive"><a href="/contact">Contact</a></li>
	            </ul>
	        </div>
	    </div>)

	}





}