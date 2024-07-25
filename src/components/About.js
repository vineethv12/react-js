import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="about-container">
                <h1>About</h1>
                <h2>Integrating router</h2>

                <User name={"Noob Class"} location={"Bangalore"} />
            </div>
        )
    }
};



export default About;