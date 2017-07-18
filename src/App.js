import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            kv: "This is kv"
        }
    }
    update(e){
        this.setState({txt: e.target.value})
    }
    render(){
        return (
            <div>
                <h1>Kya</h1>
                <h2>Hai</h2>
                {this.props.txt} 
                {this.props.bunty} 
                <p>
                    <input type="text" onChange={this.update.bind(this)}/>
                    {this.state.txt}
                </p>
                <p>
                    <Button>I <Heart/>React</Button>
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
    bunty: "YO"
}

export default App
