import React from 'react';

class App extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            counter: 0,
            todos: [1, 2, 3, 4, 5]
        };
    }
    increment = () => {
        console.log(this.state.counter);
        console.log('this.state.counter');
        this.setState({counter:this.state.counter+100})
    };
    render() {
        return (
            <div>
                Hello Worldaaaaa22!!!
                <p>{this.state.counter}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
export default App;