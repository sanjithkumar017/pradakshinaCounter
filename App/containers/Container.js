/**
 * Created by sanjithkumar017 on 16/9/17.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    count: state.count,
    countleft: state.countleft,
    lang: state.lang,
    date1: state.date1,
    date2: state.date2,
    date3: state.date3,
    date4: state.date4,
    enddate: state.enddate,
    startdate: state.startdate
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
    setDate1: (value) => {

        dispatch({type: 'SETDATE1', value})
    }, setDate2: (value) => {

        dispatch({type: 'SETDATE2', value})
    }, setDate3: (value) => {

        dispatch({type: 'SETDATE3', value})
    }, setDate4: (value) => {

        dispatch({type: 'SETDATE4', value})
    },
    setNewDate: () => {

        dispatch({type: 'SETNEWDATE'})
    },
    setEndDate: (value) => {

        dispatch({type: 'SETENDDATE', value})
    },
    setStartDate: (value) => {

        dispatch({type: 'SETSTARTDATE', value})
    },
})

export default connect(mapStateToProps, mapDispatchToProps)
