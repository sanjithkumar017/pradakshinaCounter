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

import styles from '../styles/styles.js';

//todo
//We need to create seperate components
//We need to reuse the components


//We need to store the start date and 4 dots and the end date in AsyncStorage.
//Save it as 4 objects with date as current day number, like 2nd, 17th and so on.


const mantraLanguages = ["Tvamasmin kārya niryōgē pramāṇaṁ harisattama hanumān yatnamāstāya dhuḥkha kṣaya karōbhava",];
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

            <View style={styles.container}>
                <View style={styles.parent}>

                    <View style={styles.mantra}>
                        <TouchableOpacity onPress={this.props.nextlang}>
                            <Text style={styles.mantram}>{mantraLanguages[this.props.lang]}</Text>
                        </TouchableOpacity>

                    </View>

                    <View
                        style={styles.deekshaCounter}>
                        <View style={styles.circles}><Text style={styles.circleText}>21</Text></View>
                        <View style={styles.circles}><Text style={styles.circleText}>21</Text></View>
                        <View style={styles.circles}><Text style={styles.circleText}>21</Text></View>
                        <View style={styles.circles}><Text style={styles.circleText}>21</Text></View>
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
        );
    }
}


