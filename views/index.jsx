import React from "react"
import Layout from "./layout"
import Section from "./section"

export default class TileCategories extends React.Component {


    render() {


        return (
                <Layout>
                
                    <Section id="sec1" title="Introduction" align="center">

                        Currently in the pursuit of a computer science master degree student at the Karlsruhe Institute of Technology in 
                        Karlsruhe, Germany specializing in the field of machine learning.
                        <div className="row group">
                            <a className="btn btn-primary  faa-float animated vert" href="/cv">Go to CV</a>
                        </div>
                    </Section>
                    <Section id="sec2" title="Experience">

                        I have experience in various machine learning frameworks like Spark MLLib, Theano, scikit-learn, Tensorflow, this
                        is also my primary area of interest. I also have experience with distributed computing, front-end and back-end development
                        in Node and Rails. Here is a short list of the things I know about:

                        <div className="group">
                            Machine learning<br/>
                            Apache Spark <br/>
                            Scikit-learn <br/>
                            Theano <br/>
                            Tensorflow <br/>
                            Node <br/>
                            Python <br/>
                            Java <br/>  
                            Databases <br/>                          

                        </div>

                        <div className="group">

                           <h4>For more info:</h4>

                                <a className="btn btn-primary  faa-float animated vert" href="/cv">Go to CV</a>


                        </div>
                  

                    </Section>
                    <Section id="sec3" title="Contact">

                    <div className="group">
                        If you want to have a chat or further information, feel free to contact me.
                    </div>    
                    <div className="group">
                        <a href="mailto:marin.vlastelicap@gmail.com" className="mail-i"><i className="fa fa-envelope-o faa-spin animated-hover"></i></a>
                        <a href="https://de.linkedin.com/in/marin-vlastelica-pogančić-b6a31654
                        " className="linkedin-i"><i className="fa fa-linkedin-square faa-spin animated-hover"></i></a>
                        <a href="https://twitter.com/jimmy_mvp"><i className="fa fa-twitter faa-spin animated-hover"></i></a>
                        <a href="https://github.com/JimmyMVP" className="github-i"><i className="fa fa-github faa-spin animated-hover"></i></a>
                    </div>

                    </Section>
                    <Section id="sec4" title="More">

                        <h2> To be added...</h2>


                    </Section>    

                    
                </Layout>
                    );

    }



}


