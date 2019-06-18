import React from 'react';
import Navbar from './navbar';

class Topbar extends React.Component {
    render() {
        return (
            <div>
                <h1>Awesome Message Board</h1>
                <div id="navbar">
                    <ul>
                        <Navbar title='Home' page='body'/>
                        <Navbar title='About' page='about'/>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Topbar; 