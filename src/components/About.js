import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

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
                <div>
                    LoggedIn User:
                    <UserContext.Consumer>
                        {(data) => data.loggedInUser}
                    </UserContext.Consumer>
                </div>
                <User name={"Noob Class"} location={"Bangalore"} />
            </div>
        )
    }
};



export default About;