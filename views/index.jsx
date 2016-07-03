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
                         <button className="btn btn-primary anim">Go to CV</button>
                        </div>
                    </Section>
                    <Section id="sec2" title="Experience">

                        I have experience in various machine learning frameworks like Spark MLLib, Theano, scikit-learn, Tensor Flow, this
                        is also my primary area of interest. I also have experience with distributed computing, front-end and back-end development
                        in Node and Rails. Here is a short list of the things I know about:

                        <div className="group">
                            Machine learning<br/>
                            Apache Spark <br/>
                            Scikit-learn <br/>
                            Node <br/>
                            Python <br/>
                            Java <br/>  
                            Databases <br/>                          
                            Theano <br/>

                        </div>

                        <div className="group">

                           <h4>For more info:</h4>

                                <button className="btn btn-primary  faa-float animated">Go to CV</button>


                        </div>
                  

                    </Section>
                    <Section id="sec3" title="Contact">

                    <div className="group">
                        If you want to have a chat or further information, feel free to contact me.
                    </div>    
                    <div className="group">
                        <a href="mailto:marin.vlastelicap@gmail.com" className="mail-i"><i className="fa fa-envelope-o"></i></a>
                        <a href="https://de.linkedin.com/in/marin-vlastelica-pogančić-b6a31654
                        " className="linkedin-i"><i className="fa fa-linkedin-square"></i></a>
                        <a href="https://twitter.com/jimmy_mvp"><i className="fa fa-twitter"></i></a>
                    </div>

                    </Section>
                    <Section id="sec4" title="More">

                        <h2> To be added...</h2>


                    </Section>    

                    
                </Layout>
                    );

    }



}


