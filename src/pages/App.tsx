import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from "../assets/logo.svg";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        Learn React
                        </a>
                        <Button>Settings</Button>
                    </header>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
