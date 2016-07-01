import React from "react"
import Layout from "./layout"

export default class TileCategories extends React.Component {


    render() {


        return (
                <Layout>
                    <div id="div-buttons">

                                    <div id="div-buttons" className="container-fluid">
                                        <div className="row">
                                            <a href="/">
                                            <div className="div-button" role="button">
                                                <div className="center-content">
                                                    <span className="glyphicon glyphicon-music big"></span>
                                                    <h4>Music</h4>
                                                </div>
                                            </div>
                                            </a>
                                            <a href="/projects">
                                                <div className="div-button" role="button">
                                                    <div className="center-content">
                                                        <span className="glyphicon glyphicon-blackboard big"></span>
                                                        <h4>Projects</h4>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <a href="\/">
                                        <div className="row">
                                            <div className="div-button offset3" role="button">
                                                <div className="center-content">
                                                    <span className="glyphicon glyphicon-cloud big"></span>
                                                    <h4>Mysc</h4>
                                                </div>
                                            </div>
                                        </div>
                                        </a>
                                    </div>

                                </div>
                    
                    </Layout>
                    );

    }



}


