import React from "react"



export default class Projec extends React.Component {


	render() {


			return (<div className="project-well text-left">

			<h2>{this.props.title}</h2>
		    <p hidden="true">
		       {this.props.children}
		    </p>

		    </div>)

	}



}
