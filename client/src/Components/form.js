import React from 'react';
import {connect} from 'react-redux';
import {updateTextArea, addComment, clearForm} from '../Actions/index';


class Form extends React.Component {    
    handleClear = () => {
        this.props.clearForm();
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let time = new Date().toString();
        let index = time.indexOf(":")+6;
        let date = time.slice(0,index);
        
        this.props.addComment(this.props.text, date);
        this.handleClear();
    }

    render() {
        return (
            <form id="input" onSubmit={this.handleSubmit}>
                <label>
                    {this.props.label}
                    <br />
                    <textarea id="msgField" type="text" onChange={(e) => this.props.updateTextArea(e.target.value)} value={this.props.text}/>
                </label>
                <br />
                <input type="submit" value='Post'/>
                <button onClick={this.handleClear} id='clear'>Clear</button>
            </form> 
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        comment: state.comments,
        text: state.text
    };
}

export default connect(mapStateToProps, {updateTextArea, addComment, clearForm})(Form);