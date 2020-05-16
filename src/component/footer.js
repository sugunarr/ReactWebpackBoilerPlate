import React from 'react';

export default class Footer extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            content: 'Karthi'
        }
    }

    render() {
        return <h2>Hi, my name is {this.state.content}</h2>;
    }
}