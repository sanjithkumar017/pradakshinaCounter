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
    AsyncStorage
} from 'react-native';

import styles from '../styles/styles';
import DateCircle from './dateCircles';
import MantraText from './mantraText';
import SingleCounter from './singleCounter';

import CounterContainer from "../containers/Container.js";

//todo

//Spend 5 days on testing
//Unit testing
//All types of testing

//We need to optimise code as much as possible
//Let's show when they have started and when they must be ending

//When we are releasing, We can ask for translations in Kannada and Tamil


class Counter extends Component {

    componentWillMount() {
        console.log("This is componentWillMount");
        // moment.utc(new Date()).format('D')
        console.log("We have set it");
        this.getStoredKey("date1").then((value)=> {
            console.log("This is componentDidMount", value);
            this.props.setDate1(value);


        })
        this.getStoredKey("date2").then((value)=> {
            console.log("This is componentDidMount", value);
            this.props.setDate2(value);

        })
        this.getStoredKey("date3").then((value)=> {
            console.log("This is componentDidMount", value);
            this.props.setDate3(value);

        })
        this.getStoredKey("date4").then((value)=> {
            console.log("This is componentDidMount", value);
            this.props.setDate4(value);

        })


    }

    componentDidMount() {
        console.log("This is componentDidMount");
        //this is where we will set the AsyncStorage to Redux state


    }

    getStoredKeyP(key) {
        return new Promise(resolve => {
            AsyncStorage.getItem(key)
                .then((value)=> {

                    return resolve(value)
                })
        });
    }

    async  getStoredKey(key) {
        return await this.getStoredKeyP(key);
    }


    render() {
        return (

            <View style={styles.container}>
                <View style={styles.parent}>

                    <View style={styles.mantra}>
                        <MantraText/>
                    </View>

                    <View style={styles.deekshaCounter}>
                        <DateCircle date={this.props.date1}/>
                        <DateCircle date={this.props.date2}/>
                        <DateCircle date={this.props.date3}/>
                        <DateCircle date={this.props.date4}/>
                    </View>

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



