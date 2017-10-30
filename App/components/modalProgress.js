/**
 * Created by sanjithkumar017 on 29/10/17.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Button
} from 'react-native';

import styles from '../styles/styles.js';
import CounterContainer from "../containers/Container.js";

import Modal from 'react-native-modal'

import attribs from '../styles/constants'

class ModalInfoProgress extends Component {

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

            <View style={styles.deekshaEnd}>
                <TouchableOpacity onPress={this._showModal}>
                    <Text>Your deeksha ends on <Text style={styles.makeBold}>{this.props.enddate}</Text>.</Text>
                </TouchableOpacity>
                <Modal isVisible={this.state.isModalVisible} style={styles.bottomModal}>
                    <View
                        style={{flex: 0.3, justifyContent: "space-between", backgroundColor: attribs.colorGrey}}>
                        <View style={[styles.putCenter, {margin: 10}]}>
                            <Text>You started the Deeksha on <Text style={styles.makeBold}>{this.props.startdate}</Text>.</Text>
                            <Text>You have made pradakshinas on the following days :</Text>
                            <Text>1. <Text style={styles.makeBold}>{this.props.date1}</Text> </Text>
                            <Text>2. <Text
                                style={styles.makeBold}>{this.props.date2 ? this.props.date2 : "Pending"}</Text> </Text>
                            <Text>3. <Text
                                style={styles.makeBold}>{this.props.date3 ? this.props.date3 : "Pending"}</Text> </Text>
                            <Text>4. <Text
                                style={styles.makeBold}>{this.props.date4 ? this.props.date4 : "Pending"}</Text> </Text>
                            <Text>You have to finish the Deeksha by <Text
                                style={styles.makeBold}>{this.props.enddate}</Text> </Text>
                        </View>

                        <Button title="Close" onPress={this._hideModal} color={attribs.colorRed} style={[{}]}/>

                    </View>
                </Modal>
            </View>
        );
    }
}

export default CounterContainer(ModalInfoProgress);