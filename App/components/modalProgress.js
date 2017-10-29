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
                        style={{flex: 0.5, justifyContent: "space-between", backgroundColor: attribs.colorGrey}}>
                        <View>
                            <Text>Progress </Text>

                        </View>

                        <Button title="Close" onPress={this._hideModal} color={attribs.colorRed} style={[{}]}/>

                    </View>
                </Modal>
            </View>
        );
    }
}

export default CounterContainer(ModalInfoProgress);