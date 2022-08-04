import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">NewsMonkey</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                                <li className="nav-item"><a href="/about" className="nav-link">Business</a></li>
                                <li className="nav-item"><a href="/about" className="nav-link">Entertainment</a></li>
                                <li className="nav-item"><a href="/about" className="nav-link">General</a></li>
                                <li className="nav-item"><a href="/about" className="nav-link">Health</a></li>
                                <li className="nav-item"><a href="/about" className="nav-link">Science</a></li>
                                <li className="nav-item"><a href="/about" className="nav-link">Sports</a></li>
                                <li className="nav-item"><a href="/about" className="nav-link">Technology</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
