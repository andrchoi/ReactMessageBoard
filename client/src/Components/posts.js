import React from 'react';
import {connect} from 'react-redux';
import Comment from './comment';

class Posts extends React.Component {
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

export default connect(mapStateToProps)(Posts);