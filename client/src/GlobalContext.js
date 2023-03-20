import React from 'react';

const context = React.createContext();
context.displayName = "GlobalContext"

class GlobalContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            connected: false, 
            token: ""
        }
    }

    render() {
        return (
            <context.Provider value={{ setValue: (value) => this.setState(value), ...this.state }}>
                {this.props.children}
            </context.Provider>
        )
    }
}

export default GlobalContextProvider
export const GlobalContext = context