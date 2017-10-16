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
import CounterContainer from "../containers/Container.js";

const asyncStorageKeys = ["date1", "date2", "date3", "date4", "enddate"]


class SingleCounter extends Component {

    componentDidMount() {

        //this is where we will set the AsyncStorage to Redux state
    }

    componentWillMount() {

    }


    render() {
        return (
            <View style={styles.counterFactory}>

                <TouchableHighlight underlayColor={'#D62828'} style={styles.buttonWrapperCounter}
                                    onPress={()=> {
                                        this.props.increment();
                                        if (this.props.count == 40) {
                                            this.props.setNewDate();
                                            Alert.alert(
                                                'You have successfully finished 41 rounds',
                                                'You can find the progress in the dots with today\'s date.',
                                                [
                                                    {
                                                        text: 'Ok', onPress: () => {
                                                        this.props.reset()

                                                    }
                                                    },
                                                    {
                                                        text: 'Cancel',
                                                        onPress: () =>{
                                                            this.props.reset()
                                                        }
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
                        //Lets add full reset here
                        if(this.props.date1){
                            Alert.alert(
                                'Are you sure?',
                                'You will lose the deeskha progress which started on '+this.props.startdate,
                                [
                                    {
                                        text: 'Ok', onPress: () => {
                                        this.props.reset()
                                        AsyncStorage.multiRemove(asyncStorageKeys , (err) => {
                                            // keys k1 & k2 removed, if they existed
                                            // do most stuff after removal (if you want)
                                            this.props.setDate1(null);
                                            this.props.setDate2(null);
                                            this.props.setDate3(null);
                                            this.props.setDate4(null);
                                            this.props.setEndDate(null);
                                        });


                                    }
                                    },
                                    {text: 'Cancel', onPress: () => {}},
                                ],
                                {cancelable: false}
                            )


                        }

                    } else {
                        Alert.alert(
                            'Are you sure?',
                            'You will lose the count.',
                            [
                                {
                                    text: 'Ok', onPress: () => {
                                    this.props.reset()

                                }
                                },
                                {text: 'Cancel', onPress: () => {}},
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
        );
    }



}
export default CounterContainer(SingleCounter);