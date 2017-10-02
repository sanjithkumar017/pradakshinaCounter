/**
 * Created by sanjithkumar017 on 16/9/17.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import Counter from '../components/Counter.js';

const mapStateToProps = state => ({
    count: state.count,
    countleft: state.countleft,
    lang: state.lang
})

const mapDispatchToProps = (dispatch) => ({
    increment: () => {
        console.log("increment is called ");
        dispatch({type: 'INCREMENT'})
    },
    reset: () => {
        dispatch({type: 'RESET'})
    },
    nextlang: () => {
        console.log("Here in nextlang");
        dispatch({type: 'NEXTLANG'})
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
