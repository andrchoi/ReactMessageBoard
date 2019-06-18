import React from 'react';
import Form from './form';
import Posts from './posts';
import Detail from './detail';
import {connect} from 'react-redux';

class Body extends React.Component {
    render() {
        let spinner = ''
        if (this.props.isLoading === true) {
            spinner = <div><div className='spinner'></div><br /></div>
        }
        return (
            <div id='main'>
                <Form label="Write Comment Here:"/>
                <br />
                {spinner}
                <Detail/>
                <br />
                <Posts label="Comments"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.status
    }
}

export default connect (mapStateToProps)(Body);