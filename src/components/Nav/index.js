import React, { Component } from "react";
import Clock from '../Clock';

class Nav extends Component {
    render () {
        return (
            <>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="navbar-brand">{this.props.rumahSakit}</div>

                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <span className="nav-link" href="#">ID Perawat: {this.props.nurseId}</span>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <span className="nav-link" href="#"><Clock></Clock></span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Nav;