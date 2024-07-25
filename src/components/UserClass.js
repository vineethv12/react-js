import React from "react";

class UserClass extends React.Component {


    constructor(props) {
        super(props);
        console.log("contructor")
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: ""
            }
        }
    };

    // async componentDidMount() {
    //     console.log("componentDidMout")
    //     const data = await fetch("https://api.github.com/users/vineethv12");
    //     const json = await data.json();

    //     this.setState({
    //         userInfo: json
    //     });

    componentDidMount() {

        this.timer = setInterval(() => {
            console.log("setInterval");
        }, 1000);

        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componenetDidUpdate")
    }

    componentWillUnmount() {

        clearInterval(this.timer);

        console.log("componentWIllUnmount")
    }

    render() {
        console.log("render")

        return (
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url} />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h4>Contact: @noob</h4>

            </div>
        );
    };
};

export default UserClass;




























/* import React from "react";

class UserClass extends React.Component {


    constructor(props) {
        super(props);
        console.log(this.props.name + "Child Constructor");

        this.state = {
            count: 0,
            contact: "@noob"
        };
    };

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/vineethv12");
        const json = await data.json();
        console.log(json)
    }


    render() {
        console.log(this.props.name + "Child Render");
        const { name, location } = this.props;
        const { contact } = this.state

        return (
            <div className="user-card">
                <h1>Count = {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 });
                }}>Increment</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {contact}</h4>
            </div>
        );
    };
};

export default UserClass; */