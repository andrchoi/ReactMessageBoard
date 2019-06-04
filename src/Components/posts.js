import React from 'react';
import {connect} from 'react-redux';
import Comment from './comment';
import {addSamples} from '../Actions/index';

class Posts extends React.Component {
    componentDidMount() {
        if (this.props.comment.length === 0) {
            this.props.addSamples();
        }
    }

    render() {
        return (
            <div>
                <header>{this.props.label}</header>
                <div className="comments">
                    <ul>
                        {this.props.comment.map((c, index) => (
                            <Comment key={index} index={index} content={c.content} date={c.date}/>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comment: state.comments
    };
}

export default connect(mapStateToProps, {addSamples})(Posts);