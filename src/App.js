import './App.css';
import React, {Component} from 'react';
import Mycars from './components/Mycars'

class App extends Component{

    state = {
        titre: 'Mon Catalogue Voitures!'
    }

    // changeTitle = (e) => {
    //     console.log(e.target)
    //    this.setState({titre: 'Mon Nouveau titre'})
    // }

    // changeViaParam = (titre) => {
    //     this.setState({
    //         titre   // if contain same name else titre: namediff
    //         // titre: titre
    //     })
    // }

    // changeViaBinding = (param) => {
    //     this.setState({
    //         titre: param
    //     })
    // }
    
    // changeViaInput = (e) => {
    //     this.setState({
    //         titre: e.target.value
    //     })
    //    //console.log(e.target.value);
    // }

    render() {
        return (
            <div className="App">
                <Mycars></Mycars>

                {/* <button onClick={this.changeTitle}>Chenger le nom en dur</button>
                <button onClick={() => this.changeViaParam('Titre via un paramètre!')}>changer selon param</button>
                <button onClick={this.changeViaBinding.bind(this, 'Change via bind')}>Change By bind</button>
                <input type="text" onChange={this.changeViaInput} value={this.state.titre}/> */}

                {/* <header className="App-header"> */}
                    {/*<img src="" className="App-logo" alt="logo" />*/}
                    {/* <p>
                        DioufCodeur <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a> */}
                {/* </header> */}
            </div>
        );
    }
}

export default App;
