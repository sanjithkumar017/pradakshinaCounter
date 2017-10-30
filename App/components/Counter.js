/**
 * Created by sanjithkumar017 on 16/9/17.
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
    AsyncStorage,
} from 'react-native';

import styles from '../styles/styles';


import MantraText from './mantraText';
import SingleCounter from './singleCounter';
import ModalInfoBegin from './modalBegin';
import ModalInfoFinish from './modalFinish';
import ModalInfoProgress from './modalProgress';

import CounterContainer from "../containers/Container.js";

//todo

//Spend 5 days on testing
//Unit testing
//All types of testing

//We have to replace Alerts with Modals
//Make styles generalised
//Write test cases for the store || But the store has not changed.

//Start using JEST


const asyncStorageKeys = ["date1", "date2", "date3", "date4", "enddate", "startdate"]
class Counter extends Component {

    componentWillMount() {


        this.getStoredAllKeys(asyncStorageKeys).then((value)=> {

            this.props.setDate1(value[0]["1"]);
            this.props.setDate2(value[1]["1"]);
            this.props.setDate3(value[2]["1"]);
            this.props.setDate4(value[3]["1"]);
            this.props.setEndDate(value[4]["1"]);
            this.props.setStartDate(value[5]["1"]);

        })


    }

    componentDidMount() {

        //this is where we will set the AsyncStorage to Redux state


    }


    getStoredAllKeysP(keyList) {
        return new Promise(resolve => {
            AsyncStorage.multiGet(keyList, (err, stores) => {

                return resolve(stores)
            });
        });
    }

    async  getStoredAllKeys(keyList) {
        return await this.getStoredAllKeysP(keyList);
    }


    render() {
        return (

            <View style={styles.container}>
                <View style={styles.parent}>

                    <View style={styles.mantra}>
                        <MantraText/>
                    </View>

                    {!this.props.enddate && !this.props.date4 && <ModalInfoBegin/>}

                    {this.props.enddate && !this.props.date4 && <ModalInfoProgress/>}

                    {this.props.enddate && this.props.date4 && <ModalInfoFinish/>}


                    {/*we are directly including the component*/}
                    <SingleCounter/>


                </View>
            </View>

        );
    }

}


export
default
CounterContainer(Counter);



