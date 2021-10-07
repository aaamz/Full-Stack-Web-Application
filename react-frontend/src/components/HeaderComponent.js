import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a style={{marginLeft: "500px"}} className="navbar-brand">User Management Web App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent