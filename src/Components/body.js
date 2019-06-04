import React from 'react';
import Form from './form';
import Posts from './posts';
import Detail from './detail';

class Body extends React.Component {
    render() {
        return (
            <div id='main'>
                <Form label="Write Comment Here:"/>
                <br />
                <Detail/>
                <br />
                <Posts label="Comments"/>
            </div>
        );
    }
}

export default Body;