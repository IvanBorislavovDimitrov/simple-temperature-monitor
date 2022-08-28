import React, { Component } from 'react';

class NavbarComponent extends Component {
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Home temperature</a>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavbarComponent;