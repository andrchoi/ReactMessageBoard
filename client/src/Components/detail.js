import React from 'react';
import {connect} from 'react-redux';

class Detail extends React.Component {
    render() {
        return (
            <div className='currentPage'>
                <div>{this.props.detail.content}</div>
                <div>{this.props.detail.date}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        detail: state.detail
    }
}

export default connect(mapStateToProps)(Detail);