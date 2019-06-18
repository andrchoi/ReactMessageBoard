import React from 'react';
import {connect} from 'react-redux';
import {changePage} from '../Actions/index';

class Navbar extends React.Component {
    handleClick = () => {
        this.props.changePage(this.props.page);
    }

    render() {
        let result = ""
        if (this.props.current === this.props.page)
            result = 'currentPage';

        return (
            <li><a href='#top' className={result} onClick={this.handleClick}>{this.props.title}</a></li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        current: state.page
    };
}

export default connect(mapStateToProps, {changePage})(Navbar); 