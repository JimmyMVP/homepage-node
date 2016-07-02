import React from "react"

export default class Section extends React.Component {


    render() {


        return (
                <section id={this.props.id} className="text-center container-fluid">
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </section>
                    );

    }



}


