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

class ModalInfoBegin extends Component {

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
                    <Text>You can begin the <Text style={styles.makeBold}>Deeksha</Text>.</Text>
                </TouchableOpacity>
                <Modal isVisible={this.state.isModalVisible} style={styles.bottomModal}>
                    <View
                        style={{flex: 0.2, justifyContent: "space-between", backgroundColor: attribs.colorGrey}}>
                        <View style={styles.putCenter}>
                            <Text>You can do <Text style={styles.makeBold}>41</Text> Pradakshinas, <Text
                                style={styles.makeBold}>4</Text> times around the lord to fullfill your wish. </Text>

                        </View>

                        <Button title="Close" onPress={this._hideModal} color={attribs.colorRed} style={[{}]}/>

                    </View>
                </Modal>
            </View>
        );
    }
}

export default CounterContainer(ModalInfoBegin);