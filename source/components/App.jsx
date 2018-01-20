import React from 'react';

class App extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            counter: 0
        };
    }
    increment = () => {
        this.setState({counter:this.state.counter+1})
    };
    render() {
        return (
            <div>
                Hello World!!!
                <p>{this.state.counter}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
export default App;