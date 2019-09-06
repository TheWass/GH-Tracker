import React from "react";
import "./App.css";

interface IProps {
}

interface IState {
    playerName: string;
}

class Settings extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            playerName: ""
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ playerName: event.target.value });
    }

    render() {
        return (
            <div className="Settings">
                <input name="playername" type="text" value={this.state.playerName} onChange={this.handleChange} />
            </div>
        );
    }
}

export default Settings;
