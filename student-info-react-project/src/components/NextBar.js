import React, { Component } from 'react';

export default class NextBar extends Component {

    test() {
        console.log('worked');
    }
    render() {
        return(
            <div className='bottom-bar'>
                <button className='previous' onClick={this.props.decreaseStudent}>{`< `}Previous </button>
                    <div className='modify'>
                        <button className='button' onClick={this.props.edit}>Edit</button>
                        <button className='button' onClick={this.props.remove}>Delete</button>
                        <button className='button' onClick={this.props.add}>New</button>
                    </div>
                <button className='next' onClick={this.props.increaseStudent}>Next ></button>
            </div>
        )
    }
}