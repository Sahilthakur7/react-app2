import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            kv: "This is kv",
            currentEvent: '--',
            a: 'a',
            b: 'b',
            val: 0
        }
        this.update2 = this.update2.bind(this)
        this.update3 = this.update3.bind(this)
        this.increment = this.increment.bind(this)
    }
    update2(e){
        this.setState({currentEvent: e.type})
    }
    update(e){
        this.setState({txt: e.target.value})
    }
    update3(e){
        this.setState({a: this.refs.a.value, b: this.b.value})
    }
    update4(e){
        ReactDOM.render(<App val={this.props.val + 2}/>, document.getElementById('a'));
    }
    increment(){
        this.setState({val: this.state.val + 1})
    }
    componentWillMount(){
        console.log("Mount hone wala hu");
        this.setState({m: 2})
    }
    componentWilUnmount(){
        console.log("will unmount");
    }
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.val % 10 == 0;
    }
    render(){
        console.log("render fires up");
        return (
            <div>
                <h1>Kya</h1>
                <h2>Hai</h2>
                {this.props.txt} 
                {this.props.bunty} 
                {this.state.m}
                <p>
                    <input type="text" onChange={this.update.bind(this)}/>
                    {this.state.txt}
                </p>
                <p>
                    <input type="text" ref="a" onChange={this.update3.bind(this)}/>

            {this.state.a}
                </p>
                    <input type="text" ref={node => this.b = node} onChange={this.update3.bind(this)}/>
            {this.state.b}
                <p>
                    <Button>I <Heart/>React</Button>
                </p>
                <p>
                    <textarea onKeyPress= {this.update2} onCopy={this.update2.bind(this)}/>
                    {this.state.currentEvent}
                </p>
                <p>
                    <button onClick={this.increment}>{this.state.val}</button>
                </p>
                <p>
                    <button onClick={this.update4.bind(this)}>{this.props.val}</button>
                </p>
            </div>
        )
    }
}


const Button = (props) => <button>{props.children}</button>

    class Heart extends React.Component {
        render(){
            return <span>&hearts;</span>
        }
    }



App.defaultProps = {
    bunty: "YO",
    val: 0
}

class Wrapper extends React.Component {
    mount(){
        ReactDOM.render(<App/>,document.getElementById('a'))
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render(){
        return(
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id = "a">
                </div>
            </div>
        )
    }
}

export default Wrapper
