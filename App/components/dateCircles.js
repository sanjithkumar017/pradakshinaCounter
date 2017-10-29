/**
 * Created by sanjithkumar017 on 9/10/17.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

import styles from '../styles/styles.js';
import CounterContainer from "../containers/Container.js";

import attribs from '../styles/constants'

class DateCircle extends Component {

    state = {
        isModalVisible: false
    }

    _showModal = () => this.setState({isModalVisible: true})

    _hideModal = () => this.setState({isModalVisible: false})


    componentDidMount() {
        
        //this is where we will set the AsyncStorage to Redux state
    }

    componentWillMount() {
        
    }


    render() {
        return (
            <View style={[styles.circles, {backgroundColor: this.props.date ? attribs.colorRed : attribs.colorBlue}]}>
                <Text style={styles.circleText}>{this.props.date}</Text>
            </View>
        );
    }
}

export default CounterContainer(DateCircle);