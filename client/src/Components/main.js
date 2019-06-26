import React from 'react';
import Topbar from './topbar';
import Body from './body';
import About from './about';
import {connect} from 'react-redux';
import {updatePost} from '../Actions/index';

class Main extends React.Component {   
    componentDidMount() {
        this.props.updatePost();
    }
    
    render () {
        let result = <Body/>;
        if (this.props.page === 'about') {
            result = <About/>;
        }

        return (
            <div className="App">
                <Topbar id='top'/>
                {result}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
        page: state.page,
  };
}

export default connect(mapStateToProps, {updatePost})(Main);