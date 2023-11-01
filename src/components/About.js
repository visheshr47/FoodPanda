import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor")
    }

    componentDidMount() {
        console.log("Component Did Mount")
    }

    componentDidUpdate() {
        console.log("Component Did Update")
    }

    componentWillUnmount() {

        console.log("Component UnMount")
    }
    render() {
        console.log("Render")
        return (
            <div>
                <h1>About with Class Based Component</h1>
            </div>
        )
    }
}
export default About;