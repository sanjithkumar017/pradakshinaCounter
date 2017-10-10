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
import {Provider} from 'react-redux';
import styles from '../styles/styles';
import DateCircle from './dateCircles';
import MantraText from './mantraText';
import store from '../store/store.js';

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


export default class Counter extends Component {

    componentDidMount() {
        console.log("This is componentDidMount");
        //this is where we will set the AsyncStorage to Redux state
    }

    componentWillMount() {
        console.log("This is componentWillMount");
    }

    render() {
        return (
            <Provider store={store}>
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

                        <View style={styles.counterFactory}>

                            <TouchableHighlight underlayColor={'#D62828'} style={styles.buttonWrapperCounter}
                                                onPress={()=> {
                                                    this.props.increment();
                                                    if (this.props.count == 40) {

                                                        Alert.alert(
                                                            'You have successfully finished 41 rounds',
                                                            'Please rate us on Google Play',
                                                            [
                                                                {
                                                                    text: 'Ok', onPress: () => {
                                                                    this.props.reset()

                                                                }
                                                                },
                                                                {
                                                                    text: 'Cancel',
                                                                    onPress: () => console.log('Cancel Pressed')
                                                                },
                                                            ],
                                                            {cancelable: false}
                                                        )

                                                    }
                                                }}>
                                <Text
                                    style={styles.buttonCounter}>
                                    {this.props.count}
                                </Text>

                            </TouchableHighlight>


                            <TouchableOpacity style={styles.buttonWrapperReset} onPress={()=> {
                                if (this.props.count == 0) {

                                } else {
                                    Alert.alert(
                                        'Are you sure?',
                                        'You will lose the count',
                                        [
                                            {
                                                text: 'Ok', onPress: () => {
                                                this.props.reset()

                                            }
                                            },
                                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
                                        ],
                                        {cancelable: false}
                                    )
                                }
                            }}>
                                <Text
                                    style={styles.buttonReset}>
                                    RESET
                                </Text>
                            </TouchableOpacity>


                            <Text>
                                You have {this.props.countleft} rounds left
                            </Text>


                        </View>

                    </View>
                </View>
            </Provider>
        );
    }

}


