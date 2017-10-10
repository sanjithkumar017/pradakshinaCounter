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

export default class SingleCounter extends Component {
    render() {
        return (
            <View>
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
        );
    }


}