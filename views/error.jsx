import React from "react"


export default class Error extends React.Component {


	render() {


		return(
			<div>
				<h1>{this.props.message}</h1>
				<h2>{this.props.status}</h2>
				<pre>{this.props.stack}</pre>
			</div>
			)


	}


}