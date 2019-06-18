import React from 'react';
import {connect} from 'react-redux';
import {makeDetail, deletePost} from '../Actions/index';

class Comment extends React.Component {
    handleClick = () => {
        let info = this.props.index
        this.props.makeDetail(info)
    }

    handleButton = () => {
        this.props.deletePost(this.props.index)
    }
    
    render() {
        return (
            <li >
                <div onClick={this.handleClick}>{this.props.content}</div>
                <button onClick={this.handleButton}>Delete</button>
            </li>
        )
    }
}

const mapStateToProps = () => {
    return {
    };
}

export default connect(mapStateToProps, {makeDetail, deletePost})(Comment);