import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.setTimeRef = setInterval(() => this.setTime(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.setTimeRef);
    }

    setTime() {
        this.setState((state, props) => {
            console.log(state.date);
            console.log(props);
            return {date: new Date()}
        })
    }

    render() {
        return (
            <div><p>The current time is {this.state.date.toString()} and {this.props}</p></div>
        )
    }
}

export default Clock