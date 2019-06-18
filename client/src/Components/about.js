import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <div id="info">
                    <header>
                        <p>About</p>
                    </header>
                </div>
                <div>
                    <p>
                        I'm Andrew Choi and I'm currently pursuing a computer science degree at UBC.
                        <br />
                        This site is a simple exercise in HTML, CSS and JavaScript to design a message board where users can write and post their own messages.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
