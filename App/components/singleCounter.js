/**
 * Created by sanjithkumar017 on 10/10/17.
 */

import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    AsyncStorage
} from 'react-native';

import styles from '../styles/styles';
import attribs from '../styles/constants'
import Modal from 'react-native-modal'


import CounterContainer from "../containers/Container.js";

const asyncStorageKeys = ["date1", "date2", "date3", "date4", "enddate"]


class SingleCounter extends Component {

    state = {
        isModalVisible: false,
        isModalVisibleResetOne: false,
        isModalVisibleResetTwo: false
    }

    _showModal = () => this.setState({isModalVisible: true})

    _hideModal = () => this.setState({isModalVisible: false})

    _showModalResetOne = () => this.setState({isModalVisibleResetOne: true})

    _hideModalResetOne = () => this.setState({isModalVisibleResetOne: false})

    _showModalResetTwo = () => this.setState({isModalVisibleResetTwo: true})

    _hideModalResetTwo = () => this.setState({isModalVisibleResetTwo: false})


    componentDidMount() {

        //this is where we will set the AsyncStorage to Redux state
    }

    componentWillMount() {

    }


    render() {
        {/*
         We have a parent View which has 2 children

         We have a parent container circle
         Inside which we have 4 quadrants

         We have our button which sits on top of the parent circle

         */
        }
        return (
            <View style={styles.counterFactory}>

                <View style={ styles.putCenter}>
                    <View style={ styles.parentCircle}>

                        <View style={{alignItems: "flex-start"}}>
                            <View
                                style={[styles.topLeftQuad, {backgroundColor: this.props.date4 ? attribs.colorRed : attribs.colorGrey}]}
                            />

                            <View
                                style={[styles.bottomLeftQuad, {backgroundColor: this.props.date3 ? attribs.colorRed : attribs.colorGrey}]}
                            />
                        </View>

                        <View style={{alignItems: "flex-end"}}>
                            <View
                                style={[styles.topRightQuad, {backgroundColor: this.props.date1 ? attribs.colorRed : attribs.colorGrey}]}
                            />

                            <View
                                style={[styles.bottomRightQuad, {backgroundColor: this.props.date2 ? attribs.colorRed : attribs.colorGrey}]}
                            />
                        </View>


                    </View>
                    <TouchableHighlight underlayColor={'#D62828'} style={styles.buttonWrapperCounter}
                                        onPress={()=> {
                                            this.props.increment();
                                            if (this.props.count == 40) {
                                                this.props.setNewDate();

                                                this._showModal();
                                                this.props.reset();
                                                //'You have successfully finished 41 rounds',

                                            }

                                        }}>
                        <Text
                            style={styles.buttonCounter}>
                            {this.props.count}
                        </Text>

                    </TouchableHighlight>

                    <Modal isVisible={this.state.isModalVisible} style={styles.bottomModal}>
                        <View
                            style={{flex: 0.2, justifyContent: "space-between", backgroundColor: attribs.colorGrey}}>
                            <View style={[styles.putCenter, {margin: 10}]}>
                                <Text>You have completed <Text style={styles.makeBold}>41 pradakshinas</Text></Text>

                            </View>

                            <Button title="Close" onPress={this._hideModal} color={attribs.colorRed} style={[{}]}/>

                        </View>
                    </Modal>
                </View>


                <TouchableOpacity style={styles.buttonWrapperReset} onPress={()=> {
                    if (this.props.count == 0) {
                        //Lets add full reset here
                        if (this.props.date1) {

                            this._showModalResetOne()


                        }

                    } else {
                        this._showModalResetTwo()
                    }
                }}>
                    <Text
                        style={styles.buttonReset}>
                        RESET
                    </Text>

                    <Modal isVisible={this.state.isModalVisibleResetOne} style={styles.bottomModal}>
                        <View
                            style={{flex: 0.2, justifyContent: "space-between", backgroundColor: attribs.colorGrey}}>
                            <View style={[styles.putCenter, {margin: 10}]}>
                                <Text>You will <Text
                                    style={styles.makeBold}>lose</Text> the deeskha progress which started on <Text
                                    style={styles.makeBold}>{this.props.startdate}</Text></Text>

                            </View>

                            <View style={{
                                alignItems: "center",
                                flexDirection: "row",
                                flex: 1, justifyContent: "center"
                            }}>
                                <View style={{flex: 1, margin: 5}}>
                                    <Button title="Reset" onPress={()=> {

                                        AsyncStorage.multiRemove(asyncStorageKeys, (err) => {
                                            // keys k1 & k2 removed, if they existed
                                            // do most stuff after removal (if you want)
                                            this.props.setDate1(null);
                                            this.props.setDate2(null);
                                            this.props.setDate3(null);
                                            this.props.setDate4(null);
                                            this.props.setEndDate(null);
                                        });

                                        this._hideModalResetOne()

                                    }} color={attribs.colorRed} style={{}}/>
                                </View>

                                <View style={{flex: 1, margin: 5}}>
                                    <Button title="Close" onPress={this._hideModalResetOne} color={attribs.colorBlue}
                                            style={{}}
                                    />
                                </View>

                            </View>
                        </View>
                    </Modal>

                    <Modal isVisible={this.state.isModalVisibleResetTwo} style={styles.bottomModal}>
                        <View
                            style={{flex: 0.2, justifyContent: "space-between", backgroundColor: attribs.colorGrey}}>
                            <View style={[styles.putCenter, {margin: 10}]}>
                                <Text>You will <Text
                                    style={styles.makeBold}>lose</Text> the <Text
                                    style={styles.makeBold}>count</Text></Text>

                            </View>

                            <View style={{
                                alignItems: "center",
                                flexDirection: "row",
                                flex: 1, justifyContent: "center"
                            }}>
                                <View style={{flex: 1, margin: 5}}>
                                    <Button title="Reset" onPress={()=> {
                                        this.props.reset()
                                        this._hideModalResetTwo()
                                    }} color={attribs.colorRed} style={{}}/>
                                </View>

                                <View style={{flex: 1, margin: 5}}>
                                    <Button title="Close" onPress={this._hideModalResetTwo} color={attribs.colorBlue}
                                            style={{}}
                                    />
                                </View>

                            </View>

                        </View>
                    </Modal>
                </TouchableOpacity>


                <Text>
                    You have {this.props.countleft} rounds left
                </Text>
            </View>
        );
    }


}
export default CounterContainer(SingleCounter);