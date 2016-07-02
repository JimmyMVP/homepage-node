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
                    <Section id="sec2" title="Experience"></Section>
                    <Section id="sec3" title="Contact"></Section>
                    <Section id="sec4" title="More">


                    </Section>    

                    
                </Layout>
                    );

    }



}


