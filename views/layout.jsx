import React from "react"
import Navbar from "./navbar"



export default class DefaultLayout extends React.Component {


    render() {

        return(
            <html>
            <head>
                <title>{this.props.title}</title>
                <link rel='stylesheet' href='/stylesheets/style.css'/>
                <link rel="stylesheet"  href="https://cdn.jsdelivr.net/jquery.ui/1.11.4/jquery-ui.min.css" />
                <link rel='stylesheet' href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>


                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />


            </head>
            <body>
                <img src="/images/profile.jpg" id="profile-pic-sm" />
                <Navbar />
            <div id="main-container" className="container-fluid">

                {this.props.children}

            </div>
                <script src="https://cdn.jsdelivr.net/jquery/2.2.4/jquery.min.js" />
                <script src="https://cdn.jsdelivr.net/jquery.ui/1.11.4/jquery-ui.min.js" />
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" />
                <script src="/javascripts/index.js" />
                <script src="javascripts/projects.js" />
            </body>
            </html>)




    }


}
