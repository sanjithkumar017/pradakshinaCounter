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
//We need to create seperate components
//We need to reuse the components

//Spend 5 days on testing
//Unit testing
//All types of testing

//Save 4 dates into separate Async Names
//When componentWillMount is called, load these dates onto Redux state
//Set each date on complete of 41
////We need to be intelligent enough to set the correct date

//We need to store the start date and 4 dots and the end date in AsyncStorage.
//Save it as 4 objects with date as current day number, like 2nd, 17th and so on.


class Counter extends Component {

	componentDidMount() {
		console.log("This is componentDidMount");
		//this is where we will set the AsyncStorage to Redux state
	}

	componentWillMount() {
		console.log("This is componentWillMount");
	}

	render() {
		return (

			<View style={styles.container}>
				<View style={styles.parent}>

				<View style={styles.mantra}>
				<MantraText/>
				</View>

				<View style={styles.deekshaCounter}>
				<DateCircle/>
				<DateCircle/>
				<DateCircle/>
				<DateCircle/>
				</View>

				{/*we are directly including the component*/}
				<SingleCounter/>


				</View>
				</View>

		);
	}

}


export default CounterContainer(Counter);



