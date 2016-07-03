import React from "react"



export default class Projec extends React.Component {


	render() {


			return (<div className="project-well text-left project" role="button">

			<h2 >{this.props.title} <i  className = "fa fa-circle-o-notch"></i></h2>
		    <p hidden="true">
		       {this.props.children}
		    </p>

		    </div>)

	}



}
