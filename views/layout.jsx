import React from "react"
import Navbar from "./navbar"



export default class DefaultLayout extends React.Component {


    render() {

        return(
            <html>
            <head>
                <title>{this.props.title}</title>
                <link rel='stylesheet' href='/stylesheets/style.css'/>
                <script src="https://cdn.jsdelivr.net/jquery/2.2.4/jquery.min.js" />
                <link rel="stylesheet"  href="https://cdn.jsdelivr.net/jquery.ui/1.11.4/jquery-ui.min.css" />
                <script src="https://cdn.jsdelivr.net/jquery.ui/1.11.4/jquery-ui.min.js" />
                <link rel='stylesheet' href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" />
                <script language="JavaScript" src="/javascripts/index.js" />

                <script src="javascripts/projects.js" />

            </head>
            <body>
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation" id="navbar">
                <Navbar />
            </nav>
            <div id="main-container" className="container-fluid">

                {this.props.children}

            </div>
            </body>
            </html>)




    }


}