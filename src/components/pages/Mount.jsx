import React from "react";

class Mount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
        setTimeout(() => {
        this.setState({favoritecolor: "orange"})
        }, 1000)
    }

  render() {
    return <h2 style={{color: this.state.favoritecolor}}>My Favorite Color is {this.state.favoritecolor}</h2>;
  }
}

export default Mount;