import React from "react"
import Layout from "./layout"
import Section from "./section"

export default class TileCategories extends React.Component {


    render() {


        return (
                <Layout>
                
                    <Section id="sec1" title="Introduction" align="center">

                        Currently a computer science student at the Karlsruhe institute of technology in 
                        Karlsruhe, Germany specializing in the area of machine learning.
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

                                <button className="btn btn-primary anim">Go to CV</button>


                        </div>
                  

                    </Section>
                    <Section id="sec3" title="Contact"></Section>
                    <Section id="sec4" title="More">


                    </Section>    

                    
                </Layout>
                    );

    }



}


