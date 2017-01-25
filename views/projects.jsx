import React from "react"
import Project from "./project"
import Layout from "./layout"


export default class Projects extends React.Component {
    





    render() {


        return (<Layout>

            <Project title="Blue Brain Project"> 
            Currently working on EPFL for the team of Prof. Marc-Oliver Gewaltig in area of spiking neural networks machine learning
            and brain simulation.
        </Project>


            <Project title="Decentralised Energy Exchange"> 
            A project that won 1st place in Germany at the Microsoft Hack@Home hackathon. My team built an app running on the blockchain
            that allows everyone to sell and buy energy without any centralised regularizing instance. This project is evolving currently
            with a potential of getting funding for startup grounding.
        </Project>


        <Project title="3D Point Cloud Segmentation and Recognition at FZI"> 
            I worked on segmentation and recognition of 3D pointclouds as unordered sets. The traditional approach would be to voxelize the
            pointclouds, but I worked on a neural network that took a fixed size input of a set of unordered points which are sampled under a
            probability distribution from the original pointcloud.  
        </Project>

            <Project title="Autonomous Driving"> While being employed at the Forschungszentrum Informatik in Karlsruhe I Worked in the autonomous driving research department.
        The main projects I was working were laser mapping of environment and binding to geographical maps,
        traffic lane detection using DeepLearning.

        For lane detection I have worked on a team where we used the <em>Caffe</em> deep learning framework and we experimented
        with published network structures on our own dataset and built our own CNNs for the problem. Our solution was
        primarily programmed in Python

        The other project regarding laser mapping were concerned with using laser data to create maps and evaluate precision
        of GPS data, geographical satellite data and other sensors.
        </Project>

    <Project title="Robotics">
            While being employed at the Forschungszentrum Informatik in Karlsruhe I worked on a project concerned with programming
        a house service robot to detect people based on faces and approach/interact with people. My work was primarily in the
        team trusted with computer vision for which we used the Kinect camera. The bulk of the programming was done in C++
        using the ROS framework and a bit of OpenCV. For the detection of faces we used the simple Viola-Jones detector.

    </Project>

        <Project title="MediaEval Challenge">
            While working at the Computer Vision for Human-Computer Interaction Lab I was able to participate in the MediaEval
        challenge in the area of emotion and violence classification in movies. This was an excellent learning experience for me in the field
        of machine learning because we experimented with a lot of different classifiers and features to get the result.
        We used improved dense trajectories, loudness, features extracted by a deep neural network, GIST for features and
        mostly SVMs and Logistical Regression as classifiers. For the end result we fused the classifiers with weights which
        we derived by gradient descent. We wrote a paper on the subject.

        The primary frameworks that I have used were: LibLinear, Caffe scikit-learn. Some of the programming was also
        done in MatLab.

    </Project>


    <Project title="Citibike Data Analytics at IBM">
            Currently doing data analytics on Citibike data from New York City at IBM R&D. For the data analysis I am using
        Python with Spark, partly because the dataset is too large to fit into memory I have chosen Spark but for nice
        simple statistics and plotting I was using Pandas, Seaborn and SciPy. Currently I am working on a predictor
        to predict the expected time of the arrival of a bike in case of waiting times.

    </Project>

    <Project title="This Webpage!">
            "This web application is developed in Node.js."

    </Project> </Layout>);

    }


}