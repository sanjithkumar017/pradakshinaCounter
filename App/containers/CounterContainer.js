/**
 * Created by sanjithkumar017 on 16/9/17.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import Counter from '../components/Counter.js';
import MantraText from '../components/mantraText';

const mapStateToProps = state => ({
    count: state.count,
    countleft: state.countleft,
    lang: state.lang
})



const mapDispatchToProps = (dispatch) => ({
    increment: () => {

        dispatch({type: 'INCREMENT'})
    },
    reset: () => {
        dispatch({type: 'RESET'})
    },
    nextlang: () => {

        dispatch({type: 'NEXTLANG'})
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
